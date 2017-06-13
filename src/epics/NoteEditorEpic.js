import { Observable } from 'rxjs/Rx';
import { autoSaveComplete } from '../actions/NoteEditorActions';
import { AUTO_SAVE_REQUEST, AUTO_SAVE_COMPLETE } from '../constants/index';

export const AutoSaveEpic = (action$, store) =>
  action$
    .ofType(AUTO_SAVE_REQUEST)
    .switchMap(action => Observable.fromPromise(action.method()))
    .map(() => autoSaveComplete());
