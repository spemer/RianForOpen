import { USER_INFORMATION_INJECT } from '../constants';

const UserState = {
  _id: null,
  email: null,
  name: null,
  picture: null,
  token: null,
  loading: false,
  facebook_id: null,
  themeColor: '#ff3466',
};

export default function User(state = UserState, action) {
  switch (action.type) {
    case USER_INFORMATION_INJECT:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
