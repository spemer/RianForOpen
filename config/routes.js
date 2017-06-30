import Router from 'koa-router';

export default function (passport) {
	return new Router()
    .get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }))
    .get(
      '/auth/facebook/callback',
      passport.authenticate('facebook', {
	successRedirect: '/',
	failureRedirect: '/',
}),
    )
    .get('/oauth/kakao', passport.authenticate('kakao'))
    .get(
      '/oauth/kakao/callback',
      passport.authenticate('kakao', {
	successRedirect: '/',
	failureRedirect: '/',
}),
    )
    .get('/auth/naver', passport.authenticate('naver'))
    .get(
      '/auth/naver/callback',
      passport.authenticate('naver', {
	successRedirect: '/',
	failureRedirect: '/',
}),
    );
}
