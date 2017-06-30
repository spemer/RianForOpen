// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import ModalEditor from './ModalEditor/index';
import CardSnippet from './CardSnippet/index';
import PhotoCardSnippet from './PhotoCardSnippet/index';
import ContainerCss from '../note.css';
import css from './noteCardTimeline.css';
import { changeNoteIdAndchangeNoteShow } from '../../../actions/NoteEditorActions';
import { getAllMyNotePreviews } from '../../../graphqls/TimelineGraphQl';

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
		ssr: true,
	}),
	name: 'noteData',
	skip: process.env.NODE_ENV === 'development' && true,
});

type DefaultProps = {
  themeColor: string,
  noteData: any,
  changeNoteIdAndchangeNoteShowDispatch: Function,
};

type Props = {
  themeColor: string,
  noteData: any,
  changeNoteIdAndchangeNoteShowDispatch: Function,
};

type State = {
  title: string,
  noteCount: number,
};

type Preview = {
  _id: string,
  title: string,
  is_publish: boolean,
  preview: string,
  tags: Array<string>,
  updated_at: string,
  pre_image: string,
  like: number
};

@compose(getAllMyNotePreviewsQuery)
@connect(undefined, mapDispatch)
class NoteCardTimeline extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		themeColor: '#ff3466',
		noteData: false,
		changeNoteIdAndchangeNoteShowDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.noteDataToSnippet = this.noteDataToSnippet.bind(this);
	}

	state = {
		title: '',
		noteCount: 10,
	};

	handleTitleChange: Function;
	noteDataToSnippet: Function;

	handleTitleChange(event: Event & { currentTarget: { value: string } }) {
		this.setState({ title: event.currentTarget.value });
	}

	noteDataToSnippet(noteList: Array<Preview>) {
		return noteList.map((note, index) => {
			const { changeNoteIdAndchangeNoteShowDispatch, themeColor } = this.props;
			const {
				_id,
				title,
				preview,
				updated_at,
				tags,
				is_publish,
				pre_image,
			} = note;
			const date = new Date(updated_at);
			if (pre_image) {
				return (
					<PhotoCardSnippet
						changeNoteIdAndchangeNoteShowDispatch={changeNoteIdAndchangeNoteShowDispatch}
						key={_id}
						_id={_id}
						title={title}
						preview={preview}
						updated_at={date.toLocaleDateString()}
						tags={tags}
						is_publish={is_publish}
						themeColor={themeColor}
						backgroundImage={pre_image}
					/>
				);
			}
			return (
				<CardSnippet
					changeNoteIdAndchangeNoteShowDispatch={changeNoteIdAndchangeNoteShowDispatch}
					key={_id}
					_id={_id}
					title={title}
					preview={preview}
					updated_at={date.toLocaleDateString()}
					tags={tags}
					is_publish={is_publish}
					themeColor={themeColor}
				/>
			);
		});
	}

	render() {
		const { noteData, changeNoteIdAndchangeNoteShowDispatch } = this.props;
		if (process.env.NODE_ENV === 'production') {
			return (
				<div className={ContainerCss['card-List']}>
					<ModalEditor />
					<div className={css.mansory}>
						{noteData.getAllMyNotePreviews &&
              this.noteDataToSnippet(noteData.getAllMyNotePreviews.notes)}
					</div>
				</div>
			);
		}
		return (
			<div className={ContainerCss['card-List']}>
				<ModalEditor />
				<div className={css.mansory}>
					<PhotoCardSnippet
						_id={''}
						changeNoteIdAndchangeNoteShowDispatch={changeNoteIdAndchangeNoteShowDispatch}
						title="The Universe Through A Child S "
						preview="In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble. While NASA has had many ups and downs, the launch and continued operation of the Hubble space telescope probably ranks next to the moon landings and the development of the Space"
						updated_at="2017.09.06"
						tags={['친구들과 함께하는 유쾌한 저녁', '태그', '글감']}
						themeColor={this.props.themeColor}
						backgroundImage={
              'http://www.tour-beijing.com/blog/wp-content/uploads/Lijiang-in-Summer.jpg'
            }
					/>
					<CardSnippet
						_id={''}
						changeNoteIdAndchangeNoteShowDispatch={changeNoteIdAndchangeNoteShowDispatch}
						title="컴퓨터 공학 개론과 당신의 운명"
						preview="현재에 감사하고 경의를 표하라. 지금이 근본이 되고 중요한 구심점이 될 때 삶은 여유롭게 풀리기 시작한다."
						tags={['수업', '개발']}
						themeColor={this.props.themeColor}
					/>
				</div>
			</div>
		);
	}
}

export default NoteCardTimeline;
