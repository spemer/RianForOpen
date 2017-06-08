// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Motion, spring } from 'react-motion';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import TimelineSnippet from './TimelineSnippet/index';
import TagSearch from './TagSearch/index';
import { getNotelineNumber } from '../../../graphqls/TimelineGraphQl';
import css from './noteTimeline.css';
import Mock from '../MOCKNOTE.js';
const mapState = state => ({
  Note: state.Note,
  // userId: state.User._id,
});

const getTimelineQuery = graphql(getNotelineNumber, {
  options: () => ({
    variables: {
      userId: '5923b81861322804b81cecb6', // 임시 키
    },
    ssr: false,
  }),
  name: 'noteData',
});

type ListAr = {
  title: string,
  preview: string,
  tag: string
};
type DefaultProps = {
  sideBar: boolean
};

type Props = {
  sideBar: boolean
};

type State = {
  List: Array<ListAr>
};

@compose(getTimelineQuery)
@connect(mapState)
class NoteTimeLine extends Component<DefaultProps, Props, State> {
  static defaultProps = {
    sideBar: false,
  };

  constructor(props: Props) {
    super(props);
    this._rowRenderer = this._rowRenderer.bind(this);
    this.count = 0;
  }

  state = {
    List: Mock,
  };

  _rowRenderer: Function;

  _rowRenderer({ index, isScrolling, key, style }) {
    const data = this.state.List[index];
    return (
      <TimelineSnippet
        key={index}
        title={data.title}
        preview={data.preview}
        tag={[data.tag]}
        style={style}
      />
    );
  }

  render() {
    return (
      <Motion
        style={{
          x: spring(this.props.sideBar && this.props.mode === 'List' ? 242 : 0),
        }}
      >
        {({ x }) => (
          <div className={css.noteList} style={{ width: `${x}px` }}>
            <TagSearch />
            <div className={css.timelineList}>
              <AutoSizer>
                {({ height, width }) => (
                  <List
                    rowRenderer={this._rowRenderer}
                    height={height}
                    width={width}
                    rowHeight={120}
                    rowCount={this.state.List.length}
                    style={{ outline: 'none' }}
                  />
                )}
              </AutoSizer>

            </div>
          </div>
        )}
      </Motion>
    );
  }
}

export default NoteTimeLine;
