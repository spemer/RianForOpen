import { USER_LOGIN, USER_INFORMATION_INJECT } from '../constants';

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
			case USER_LOGIN:
				return Object.assign({}, state, {
					_id: action._id,
					email: action.email,
					email_verified: action.email_verified,
					phone: action.phone,
					picture: action.picture,
					token: action.token,
					name: action.name,
					created_at: action.created_at,
					facebook_id: action.facebook_id,
					naver_id: action.naver_id,
					kakao_id: action.kakao_id,
					google_id: action.google_id,
					last_login: action.last_login,
				});
			case USER_INFORMATION_INJECT:
				return Object.assign({}, state, action.data);
			default:
				return state;
	}
}
