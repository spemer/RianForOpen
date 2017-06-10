import Router from 'koa-router';

export default function (passport) {
	return new Router()
    .get('/auth/facebook', passport.authenticate('facebook'))
    .get(
      '/auth/facebook/callback',
      passport.authenticate('facebook', {
	successRedirect: '/',
	failureRedirect: '/',
}),
    );
}
