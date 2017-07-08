// import { combineReducers } from 'redux';

// Import Reducers
import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import NoteEditorReducer from './NoteEditorReducer';
// import * as ProjectReducer from './ProjectReducer';
// import * as CalendarReducer from './CalendarReducer';
// import * as PlanReducer from './PlanReducer';
// import * as NoteEditorReducer from './NoteEditorReducer';
// import * as WhiteBoardReducer from './WhiteBoardReducer';
// import { firebaseStateReducer } from 'react-redux-firebase';
// import * as NoteTimelineReducer from './NoteTimelineReducer';
// import * as FirebaseChatReducer from './FirebaseChatReducer';

export default Object.assign(
  { App: AppReducer },
  { User: UserReducer },
  { NoteEditor: NoteEditorReducer },
);
