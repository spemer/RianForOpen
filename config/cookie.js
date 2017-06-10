const oneDay = 86400000;
const cookieConfig = {
	key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
	maxAge: oneDay, /** (number) maxAge in ms (default is 1 days) */
	overwrite: true, /** (boolean) can overwrite or not (default true) */
};

export default cookieConfig;
