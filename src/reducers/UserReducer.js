// @flow
import { USER_LOGIN } from '../constants';

type UserLoginAction = {
  type: USER_LOGIN,
  userId: string,
  email: string,
  photo: string,
  token: string,
  userName: string,
  createdAt: string,
  fbId: string,
  naverId: string,
  kakaoId: string,
  googleId: string,
  lastLogin: string,
};

type State = {
  userId: ?string,
  email: ?string,
  userName: ?string,
  photo: ?string,
  token: ?string,
  loading: boolean,
  fbI?: string
};

type Action = UserLoginAction;

const UserState = {
	userId: null,
	email: null,
	userName: null,
	photo: null,
	token: null,
	loading: false,
	fbId: null,
};

export default function User(state: State = UserState, action: Action): State {
	switch (action.type) {
	case USER_LOGIN:
		return Object.assign({}, state, {
			userId: action.userId,
			email: action.email,
			photo: action.photo,
			token: action.token,
			userName: action.userName,
			createdAt: action.createdAt,
			fbId: action.fbId,
			naverId: action.naverId,
			kakaoId: action.kakaoId,
			googleId: action.googleId,
			lastLogin: action.lastLogin,
		});
	default:
		return state;
	}
}
