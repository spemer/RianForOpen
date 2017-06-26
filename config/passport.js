import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import { Strategy as NaverStrategy } from 'passport-naver';
import User from 'database/models/user_model';
import mockNoteToDb from 'database/controllers/mockNoteToDb_ctrl';
import { FacebookConfig, KakaoConfig, NaverConfig } from './authConfig';

// import authConfig from '../config/oauth'
export default async function passportConfig(passport) {
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});
	passport.deserializeUser(async (id, done) => {
		try {
			User.findById(id, (err, user) => {
				done(null, user);
			});
		} catch (error) {
			done(error);
		}
	});
  // var LocalStrategy = require('passport-local').Strategy
  // passport.use(new LocalStrategy(function(username, password, done) {
  // 	console.log("user", user);
  // 	// retrieve user ...
  // 	if (username === 'test' && password === 'test') {
  // 		done(null, user)
  // 	} else {
  // 		done(null, false)
  // 	}
  // }))
	passport.use(
    new FacebookStrategy(
	{
		clientID: FacebookConfig.clientID, // your App ID
		clientSecret: FacebookConfig.clientSecret, // your App Secret
		callbackURL: FacebookConfig.callbackURL,
		profileFields: [
			'email',
			'id',
			'first_name',
			'gender',
			'last_name',
			'picture',
		],
	},
      (token, tokenSecret, profile, done) => {
	process.nextTick(async () => {
          // find UserID in database using FB
		try {
			const UserInfor = await User.findOne({ fb_id: profile.id });
            // If user exist in db
			if (UserInfor) {
              // update last_login
				UserInfor.last_login = Date.now();

				const updatedUser = await UserInfor.save();

				done(null, updatedUser);
			} else {
				const newUser = new User({
					fb_id: profile.id,
					token,
					name: `${profile.name.givenName} ${profile.name.familyName}`,
					email: profile.email || profile.emails[0].value || '',
					photo: profile.photos[0].value ? profile.photos[0].value : '',
				});

				const updatedUser = await newUser.save();

              // make Defalut Notes to Database for Test
				await mockNoteToDb(updatedUser._id);

				done(null, updatedUser);
			}
		} catch (e) {
			console.log('error in facebook passport validation');
		}
	});
},
    ),
  );
	passport.use(
    new KakaoStrategy(
	{
		clientID: KakaoConfig.clientID,
		callbackURL: KakaoConfig.callbackURL,
	},
      (token, refreshToken, profile, done) => {
	process.nextTick(async () => {
          // find UserID in database using FB
		try {
			const UserInfor = await User.findOne({ kakao_id: profile.id });
            // If user exist in db
			if (UserInfor) {
              // update last_login
				UserInfor.last_login = Date.now();

				const updatedUser = await UserInfor.save();

				done(null, updatedUser);
			} else {
				const newUser = new User({
					kakao_id: profile.id,
					token,
					name: profile.displayName,
					email: profile._json.kaccount_email_verified ? profile._json.kaccount_email : '',
					photo: profile._json.properties.profile_image ? profile._json.properties.profile_image : '',
				});

				const updatedUser = await newUser.save();

              // make Defalut Notes to Database for Test
				await mockNoteToDb(updatedUser._id);

				done(null, updatedUser);
			}
		} catch (e) {
			console.log('error in kakao passport validation');
		}
	});
},
    ),
  );
	passport.use(
    new NaverStrategy(
	{
		clientID: NaverConfig.clientID,
		clientSecret: NaverConfig.clientSecret,
		callbackURL: NaverConfig.callbackURL,
	},
      (token, refreshToken, profile, done) => {
	process.nextTick(async () => {
          // find UserID in database using FB
		try {
			const UserInfor = await User.findOne({ naver_id: profile.id });
            // If user exist in db
			if (UserInfor) {
              // update last_login
				UserInfor.last_login = Date.now();

				const updatedUser = await UserInfor.save();

				done(null, updatedUser);
			} else {
				const newUser = new User({
					naver_id: profile.id,
					token,
					name: profile.displayName,
					email: profile.emails[0].value ? profile.emails[0].value : '',
					photo: profile._json.profile_image ? profile._json.profile_image : '',
				});

				const updatedUser = await newUser.save();

              // make Defalut Notes to Database for Test
				await mockNoteToDb(updatedUser._id);

				done(null, updatedUser);
			}
		} catch (e) {
			console.log('error in naver passport validation');
		}
	});
},
    ),
  );
}

// var TwitterStrategy = require('passport-twitter').Strategy
// passport.use(new TwitterStrategy({
//     consumerKey: 'authConfig.twitter.consumerKey',
//     consumerSecret: 'authConfig.twitter.consumerSecret',
//     callbackURL: 'http://127.0.0.1:' + (process.env.PORT || 1337) + '/auth/twitter/callback'
//   },
//   function(token, tokenSecret, profile, done) {
//     // retrieve user ...
//     done(null, user)
//   }
// ))

// var GoogleStrategy = require('passport-google-auth').Strategy
// passport.use(new GoogleStrategy({
//     clientId: 'authConfig.google.clientID',
//     clientSecret: 'authConfig.google.clientSecret',
//     callbackURL: 'http://127.0.0.1:' + (process.env.PORT || 1337) + '/auth/google/callback'
//   },
//   function(token, tokenSecret, profile, done) {
//     // retrieve user ...
//     done(null, user)
//   }
// ))

// import authConfig from '../config/oauth'
// router.post('/login', async(ctx, next) => {
//   console.log("login");
//   await passport.authenticate('local', {
//     successRedirect: '/about',
//     failureRedirect: '/'
//   })
//   return next();
// })
