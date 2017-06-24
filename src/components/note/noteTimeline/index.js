// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Motion, spring } from 'react-motion';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import TimelineSnippet from './TimelineSnippet/index';
import TagSearch from './TagSearch/index';
import { getAllMyNotePreviews } from '../../../graphqls/TimelineGraphQl';
import css from './noteTimeline.css';
import './scroll.global.css';
import Mock from '../MOCKNOTE';

const mapState = state => ({
	Note: state.Note,
});

const getAllMyNotePreviewsQuery = graphql(getAllMyNotePreviews, {
	options: props => ({
		variables: {
			tags: [],
		},
		ssr: false,
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
  noteData: any,
  sideBar: boolean,
  mode: "List" | "Card"
};

type Props = {
  noteData: any,
  sideBar: boolean,
  mode: "List" | "Card"
};

type State = {
};

@compose(getAllMyNotePreviewsQuery)
@connect(mapState)
class NoteTimeLine extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		noteData: false,
		sideBar: false,
		mode: 'Card',
	};

	constructor(props: Props) {
		super(props);
		this.rowRenderer = this.rowRenderer.bind(this);
	}

	state = {};

	rowRenderer: Function;

	rowRenderer({ index, style }) {
		let data
		if (process.env.NODE_ENV === 'development') {
			data = Mock[index];
			return (
				<TimelineSnippet
					key={index}
					title={data.title}
					preview={data.preview}
					tags={[data.tag]}
					style={style}
				/>
			);
		} 

		const { noteData } = this.props;
		if (process.env.NODE_ENV === 'production')  {
			data = noteData.getAllMyNotePreviews ? noteData.getAllMyNotePreviews.notes[index] : [];
			const { _id, title, preview, updated_at, tags, is_publish, pre_image } = data;
			let date = new Date(updated_at);
			return (
				<TimelineSnippet
					key={index}
					_id={_id}
					title={title}
					preview={preview}
					updated_at={date.toLocaleDateString()}
					tags={tags}
					is_publish={is_publish}
					style={style}
				/>
			);
		}
	}

	render() {
		const { noteData } = this.props;
		if (process.env.NODE_ENV === 'production') {
			let noteSet = []
			if (noteData.getAllMyNotePreviews) {
				noteSet= noteData.getAllMyNotePreviews.notes
			}
			return (
				<Motion
					style={{
						x: spring(
              this.props.sideBar && this.props.mode === 'List' ? 242 : 0,
            ),
					}}
				>
					{({ x }) => (
						<div className={css.noteList} style={{ width: `${x}px` }}>
							{/* <TagSearch />*/}
							<div className={css.timelineList}>
								<AutoSizer>
									{({ height, width }) => (
										<List
										rowRenderer={this.rowRenderer}
										height={height}
										width={width}
										rowHeight={120}
										rowCount={noteSet.length}
										style={{ outline: 'none' }}
									/>
                  )}
								</AutoSizer>

							</div>
						</div>
          )}
				</Motion>
			);
		} else if (process.env.NODE_ENV === 'development') {
			return (
				<Motion
					style={{
						x: spring(
              this.props.sideBar && this.props.mode === 'List' ? 242 : 0,
            ),
					}}
				>
					{({ x }) => (
						<div className={css.noteList} style={{ width: `${x}px` }}>
							{/* <TagSearch />*/}
							<div className={css.timelineList}>
								<AutoSizer>
									{({ height, width }) => (
									<List
									rowRenderer={this.rowRenderer}
									height={height}
									width={width}
									rowHeight={120}
									rowCount={Mock.length}
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
}

export default NoteTimeLine;
