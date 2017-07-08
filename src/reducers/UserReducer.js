import { USER_LOGIN, USER_INFORMATION_INJECT } from '../constants';

const UserState = {
	userId: null,
	email: null,
	name: null,
	picture: null,
	token: null,
	loading: false,
	fbId: null,
};

export default function User(state = UserState, action) {
	switch (action.type) {
	case USER_LOGIN:
		return Object.assign({}, state, {
			userId: action._id,
			email: action.email,
			email_verified: action.email_verified,
			phone: action.phone,
			picture: action.picture,
			token: action.token,
			name: action.name,
			createdAt: action.createdAt,
			fbId: action.fbId,
			naverId: action.naverId,
			kakaoId: action.kakaoId,
			googleId: action.googleId,
			lastLogin: action.lastLogin,
		});
	case USER_INFORMATION_INJECT:
		return Object.assign({}, state, action.data);
	default:
		return state;
	}
}
