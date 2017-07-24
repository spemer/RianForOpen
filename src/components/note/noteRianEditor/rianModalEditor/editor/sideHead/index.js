// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import parentCss from '../../rianModalEditor.css';
import css from './sidehead.css';

type Store = {
	App: {
		themeColor: string
	},
	NoteEditor: {
		save: boolean
	}
}

function mapToState({ App: { themeColor }, NoteEditor: { save } }: Store) {
	return {
		save,
		themeColor,
	};
}

type Props = {
	save: boolean,
	themeColor: string,
	saveObservable: Function,
	saveRequestDispatch: Function,
};

const SideHead = ({
	save,
	themeColor,
	saveObservable,
	saveRequestDispatch,
}: Props) => (
	<div className={parentCss.sideHead}>
		<Link to={'/card/main'} >
			<svg
				version="1.1"
				width="20px"
				height="20px"
				opacity="0.38"
				viewBox="0 0 24 24"
				enableBackground="new 0 0 24 24"
				className={css.close}
			>
				<path d="M16.5,8.4l-0.9-0.9L12,11.1L8.4,7.5L7.5,8.4l3.6,3.6l-3.6,3.6l0.9,0.9l3.6-3.6l3.6,3.6l0.9-0.9L12.9,12L16.5,8.4z" />
			</svg>
		</Link>
		<div
			className={css.save}
			onClick={() => !save && saveRequestDispatch(saveObservable)}
			style={{ backgroundColor: !save ? '#f4f4f4' : null }}
			role="button"
			tabIndex="-3"
		>
			{!save ? <p>저장</p> : <ReactLoading className={css.loader} type="spinningBubbles" color={themeColor} height="20px" width="20px" />}
		</div>
		<svg
			viewBox="0 0 24 24"
			opacity="0.38"
			width="13px"
			height="20px"
			className={css.trash}
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
		</svg>
	</div>
);

export default connect(mapToState)(SideHead);