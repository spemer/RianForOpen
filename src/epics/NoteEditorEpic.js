import { Observable } from 'rxjs/Rx';
import {
  saveComplete,
  themeSaveComplete,
} from '../actions/NoteEditorActions';
import { SAVE_REQUEST, THEME_SAVE_REQUEST } from '../constants/index';

export const AutoSaveEpic = action$ =>
  action$
    .ofType(SAVE_REQUEST)
    .switchMap(action => Observable.fromPromise(action.method()))
    .map(() => saveComplete());

export const ThemeSaveEpic = action$ =>
  action$
    .ofType(THEME_SAVE_REQUEST)
    .switchMap(action => Observable.fromPromise(action.method()))
    .map(() => themeSaveComplete());
