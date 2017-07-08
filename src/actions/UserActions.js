import { USER_LOGIN, USER_INFORMATION_INJECT } from '../constants';

export function userLogin(userData) {
	console.log('USERDATA: ', userData);
	return {
		type: USER_LOGIN,
		id: userData._id,
		email: userData.email,
		email_verified: userData.email_verified,
		phone: userData.phone,
		picture: userData.picture,
		token: userData.token,
		name: userData.name,
		created_at: userData.created_at,
		facebook_id: userData.facebook_id,
		naverId: userData.naverId,
		kakaoId: userData.kakaoId,
		googleId: userData.googleId,
		lastLogin: userData.lastLogin,
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
