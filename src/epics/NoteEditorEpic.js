import Rx from 'rxjs/Rx';

import { AUTO_SAVE_REQUEST } from '../constants/index.js';
import axios from 'axios';

export const AutoSaveEpic = (action$, store) =>
  action$.ofType(AUTO_SAVE_REQUEST).switchMap(action => null);
