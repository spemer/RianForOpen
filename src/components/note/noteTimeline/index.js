// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Motion, spring } from 'react-motion';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import { changeNoteIdAndchangeNoteShow } from '../../../actions/NoteEditorActions';
import TimelineSnippet from './TimelineSnippet/index';
import { getAllMyNotePreviews } from '../../../graphqls/TimelineGraphQl';
import css from './noteTimeline.css';
import './scroll.global.css';
import Mock from '../MOCKNOTE';

const mapDispatch = dispatch => ({
	changeNoteIdAndchangeNoteShowDispatch(noteId, show) {
		dispatch(changeNoteIdAndchangeNoteShow(noteId, show));
	},
});

const getAllMyNotePreviewsQuery = graphql(getAllMyNotePreviews, {
	options: props => ({
		variables: {
			userId: SERVER ? props.userId : null,
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
  userId: string,
  noteData: any,
  sideBar: boolean,
  mode: "List" | "Card",
  changeNoteIdAndchangeNoteShowDispatch: Function,
};

type Props = {
  userId: string,
  noteData: any,
  sideBar: boolean,
  mode: "List" | "Card",
  changeNoteIdAndchangeNoteShowDispatch: Function,
};

type State = {
};

@compose(getAllMyNotePreviewsQuery)
@connect(undefined, mapDispatch)
class NoteTimeLine extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		userId: '',
		noteData: false,
		sideBar: false,
		mode: 'Card',
		changeNoteIdAndchangeNoteShowDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
		this.rowRenderer = this.rowRenderer.bind(this);
	}

	state = {};

	rowRenderer: Function;

	rowRenderer({ index, style }) {
		let data;
		if (process.env.NODE_ENV !== 'development') {
			const { noteData, changeNoteIdAndchangeNoteShowDispatch } = this.props;
			data = noteData.getAllMyNotePreviews ? noteData.getAllMyNotePreviews.notes[index] : [];
			const { _id, title, preview, updated_at, tags, is_publish, pre_image } = data;
			const date = new Date(updated_at);
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
					changeNoteIdAndchangeNoteShowDispatch={changeNoteIdAndchangeNoteShowDispatch}
				/>
			);
		} else if (process.env.NODE_ENV === 'development') {
			data = Mock[index];
			const { changeNoteIdAndchangeNoteShowDispatch } = this.props;
			return (
				<TimelineSnippet
					key={index}
					_id=""
					title={data.title}
					preview={data.preview}
					tags={[data.tag]}
					style={style}
					changeNoteIdAndchangeNoteShowDispatch={changeNoteIdAndchangeNoteShowDispatch}
				/>
			);
		}
	}

	render() {
		const { noteData } = this.props;
		if (process.env.NODE_ENV !== 'development') {
			let noteSet = [];
			if (noteData.getAllMyNotePreviews) {
				noteSet = noteData.getAllMyNotePreviews.notes;
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
