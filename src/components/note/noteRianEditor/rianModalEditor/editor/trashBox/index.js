// @flow
import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import parentCss from '../../rianModalEditor.css';
import css from './trash.css';

type Store = {
	NoteEditor: {
		deleteNoteState: {
			progress: boolean
		}
	}
  };

function mapToState({ NoteEditor: { deleteNoteState: { progress } } }: Store) {
	return {
		progress,
	};
}

type Props = {
	title: ?string,
	changeTrashBoxOnDispatch: Function,
	noteId: ?string,
	progress: boolean,
	deleteRequestDispatch: Function,
};

const TrashBox = ({
	title,
	changeTrashBoxOnDispatch,
	noteId, progress,
	deleteRequestDispatch }: Props) => (
		<div className={parentCss.trashBox} style={{ zIndex: 995 }}>
			<div className={css.container}>
				<div className={css.title}>
					{title}
				</div>
				<div className={css.subTitle}>
					노트를 삭제하시겠습니까?
				</div>
				<div className={css.ment}>
					삭제한 노트는 복원할 수 없습니다.
				</div>
				{progress && <ReactLoading className={css.trashLoader} color="#9f9f9f" type="bubbles" width="40px" /> }
				<div className={css.buttonBox}>
					<div className={css.leftButton} onClick={() => changeTrashBoxOnDispatch(false)} role="button" tabIndex="-2">
						취소
					</div>
					<div className={css.rightButton} onClick={() => deleteRequestDispatch(noteId)} role="button" tabIndex="-3">
						확인
					</div>
				</div>
			</div>
		</div>
);

export default connect(mapToState)(TrashBox);
