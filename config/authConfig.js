import { IP_ENV } from './project';

export const FacebookConfig = {
	clientID: '320560725033718',
	clientSecret: '0cfa36066dabc4e8dc065d73e0c666d9',
	callbackURL: `http://${IP_ENV}/auth/facebook/callback`,
};

export const KakaoConfig = {
	clientID: '29a406244b72cd3cef7be9f827bb34f8',
	callbackURL: `http://${IP_ENV}/oauth/kakao/callback`,
};

export const NaverConfig = {
	clientID: 'z_MC6tGUTcHO42Lzcoxt',
	clientSecret: '_1xBm5xZza',
	callbackURL: `http://${IP_ENV}/auth/naver/callback`,
};

