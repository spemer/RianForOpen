import { combineEpics } from 'redux-observable';
import { AutoSaveEpic, ThemeSaveEpic } from './NoteEditorEpic';

const rootEpic = combineEpics(AutoSaveEpic, ThemeSaveEpic);

export default rootEpic;
