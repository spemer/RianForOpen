import { Observable } from 'rxjs/Rx';
import {
  saveComplete,
} from '../actions/NoteEditorActions';
import { SAVE_REQUEST, SAVE_REQUEST_CANCELLED } from '../constants/index';

export const AutoSaveEpic = action$ =>
  action$
    .ofType(SAVE_REQUEST)
    .switchMap(action =>
      Observable.fromPromise(action.method())
      .map(() => saveComplete())
      .takeUntil(action$.ofType(SAVE_REQUEST_CANCELLED)),
    );

export const basic = () => {};
