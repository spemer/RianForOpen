import { Observable } from 'rxjs/Rx';
import {
  autoSaveComplete,
  themeSaveComplete,
} from '../actions/NoteEditorActions';
import { AUTO_SAVE_REQUEST, THEME_SAVE_REQUEST } from '../constants/index';

export const AutoSaveEpic = (action$, store) =>
  action$
    .ofType(AUTO_SAVE_REQUEST)
    .switchMap(action => Observable.fromPromise(action.method()))
    .map(() => autoSaveComplete());

export const ThemeSaveEpic = (action$, store) =>
  action$
    .ofType(THEME_SAVE_REQUEST)
    .switchMap(action => Observable.fromPromise(action.method()))
    .map(() => themeSaveComplete());
