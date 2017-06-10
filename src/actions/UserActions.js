import { USER_LOGIN, USER_INFORMATION_INJECT } from '../constants';

export function userLogin(userData) {
	console.log('USERDATA: ', userData);
	return {
		type: USER_LOGIN,
		_id: userData._id,
		email: userData.email,
		email_verified: userData.email_verified,
		phone: userData.phone,
		picture: userData.picture,
		token: userData.token,
		name: userData.name,
		created_at: userData.created_at,
		facebook_id: userData.facebook_id,
		naver_id: userData.naver_id,
		kakao_id: userData.kakao_id,
		google_id: userData.google_id,
		last_login: userData.last_login,
    // shared_tagList: [ObjectID]
	};
}
export function userInformationInject(information) {
	return {
		type: USER_INFORMATION_INJECT,
		data: information,
	};
}

export function basic() {
	return {};
}
