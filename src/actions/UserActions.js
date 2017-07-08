// @flow
import { USER_LOGIN, USER_INFORMATION_INJECT } from '../constants';

type UserLoginAction = {
  type: USER_LOGIN,
  userId: string,
  email: string,
  photo: string,
  token: string,
  name: string,
  createdAt: string,
  fbId: string,
  naverId: string,
  kakaoId: string,
  googleId: string,
  lastLogin: string,
};

export function userLogin(userData: UserLoginAction): UserLoginAction {
	console.log('USERDATA: ', userData);
	return {
		type: USER_LOGIN,
		userId: userData._id,
		email: userData.email,
		photo: userData.photo,
		token: userData.token,
		name: userData.name,
		createdAt: userData.createdAt,
		fbId: userData.fbId,
		naverId: userData.naverId,
		kakaoId: userData.kakaoId,
		googleId: userData.googleId,
		lastLogin: userData.lastLogin,
	};
}

export function basic() {
	return {};
}
