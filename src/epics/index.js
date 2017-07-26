import { combineEpics } from 'redux-observable';
import { AutoSaveEpic } from './NoteEditorEpic';

const rootEpic = combineEpics(AutoSaveEpic);

export default rootEpic;
