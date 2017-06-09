// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Motion, spring } from 'react-motion';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import TimelineSnippet from './TimelineSnippet/index';
import TagSearch from './TagSearch/index';
import { getNoteList } from '../../../graphqls/TimelineGraphQl';
import css from './noteTimeline.css';
import Mock from '../MOCKNOTE';

const mapState = state => ({
  Note: state.Note,
});

const getNoteListQuery = graphql(getNoteList, {
  options: props => ({
    variables: {
      sortby: props.userId, // 여기서 아폴로 쿼리의 변수 선언
    },
    ssr: true,
  }),
  name: 'noteData',
  skip: process.env.NODE_ENV === 'development' && true,
});

type ListAr = {
  title: string,
  preview: string,
  tag: string
};
type DefaultProps = {
  sideBar: boolean,
  mode: "List" | "Card"
};

type Props = {
  sideBar: boolean,
  mode: "List" | "Card"
};

type State = {
  List: Array<ListAr>
};

@compose(getNoteListQuery)
@connect(mapState)
class NoteTimeLine extends Component<DefaultProps, Props, State> {
  static defaultProps = {
    sideBar: false,
    mode: 'Card',
  };

  constructor(props: Props) {
    super(props);
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  state = {
    List: Mock,
  };

  rowRenderer: Function;

  rowRenderer({ index, style }) {
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
                    rowRenderer={this.rowRenderer}
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
