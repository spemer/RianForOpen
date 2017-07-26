// @flow
import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import parentCss from '../../rianListEditor.css';
import css from './sidehead.css';

type Store = {
	App: {
		themeColor: string
	},
	NoteEditor: {
		save: boolean,
		deleteNoteState: {
			progress: boolean,
		},
	},
}

function mapToState({
	App: { themeColor },
	NoteEditor: { save, deleteNoteState: { progress } } }: Store) {
	return {
		save,
		themeColor,
		progress,
	};
}


type Props = {
	full: boolean,
	save: boolean,
	themeColor: string,
	progress: boolean,
	noteId: ?string,
	saveObservable: Function,
	saveRequestDispatch: Function,
	deleteRequestDispatch: Function,
};

const SideHead = ({
	full,
	save,
	themeColor,
	progress,
	noteId,
	saveObservable,
	saveRequestDispatch,
	deleteRequestDispatch,
}: Props) => (
	<div className={parentCss.sideHead}>
		<div
			className={css.save}
			onClick={() => !save && saveRequestDispatch(saveObservable)}
			style={{ backgroundColor: !save ? '#f4f4f4' : null }}
			role="button"
			tabIndex="-3"
		>
			{!save ?
				<svg x="0px" y="0px" viewBox="0 0 54 29" enableBackground="new 0 0 54 29">
					<g>
						<path
							fill="#BABAC0"
							d="M20.6,11.7c0,1.9,0.9,4,2.7,4.8l-0.9,1.2c-1.2-0.6-2.1-1.8-2.6-3.1c-0.5,1.5-1.3,2.7-2.6,3.3l-0.9-1.2
		c1.8-0.9,2.7-3,2.7-5v-0.4h-2.3V10h6.1v1.3h-2.3V11.7z M25.8,9V20h-1.6v-5.9h-1.9v-1.3h1.9V9H25.8z"
						/>
						<path
							fill="#BABAC0"
							d="M33.4,15.2c-1.2-0.4-2.1-1.1-2.5-2c-0.5,1.1-1.4,2-2.7,2.4l-0.8-1.2c1.8-0.6,2.6-2,2.6-3.4h-2.2V9.7h6V11
		h-2.2c0,1.3,0.8,2.5,2.5,3L33.4,15.2z M36.3,17.9c0,1.3-1.4,2.1-3.7,2.1c-2.3,0-3.7-0.8-3.7-2.1c0-1.4,1.4-2.2,3.7-2.2
		C34.9,15.7,36.3,16.5,36.3,17.9z M34.8,17.9c0-0.6-0.8-0.9-2.2-0.9c-1.4,0-2.2,0.3-2.2,0.9c0,0.6,0.8,0.9,2.2,0.9
		C34,18.8,34.8,18.5,34.8,17.9z M37.7,11.5v1.3h-1.5v2.7h-1.6V9h1.6v2.5H37.7z"
						/>
					</g>
				</svg> :
				<ReactLoading className={css.loader} type="spinningBubbles" color={themeColor} height="20px" width="20px" />}
		</div>
		{!progress && !full ?
			<svg
				viewBox="0 0 24 24"
				opacity="0.38"
				width="13px"
				height="20px"
				className={css.trash}
				onClick={() => { deleteRequestDispatch(noteId); }}
			>
				<path
					fill="none"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M4.4 20.8c0 1.2 1 2.2 2.2 2.2h10.8c1.2 0 2.2-1 2.2-2.2V7.6H4.4v13.2zM19.6 2.1h-3.8L14.7 1H9.3L8.2 2.1H4.4v3.3h15.2zM12 10.4v9.9M15.3 10.4v9.9M8.7 10.4v9.9"
				/>
			</svg> : !full && !progress &&
			<ReactLoading className={css.trashLoader} type="spinningBubbles" color={themeColor} height="20px" width="20px" />}
	</div>
);

export default connect(mapToState)(SideHead);
