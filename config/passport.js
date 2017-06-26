import User from 'database/models/user_model';
import mockNoteToDb from 'database/controllers/mockNoteToDb_ctrl';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { PORT, IP_ENV } from './project';

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
		clientID: '320560725033718', // your App ID
		clientSecret: '0cfa36066dabc4e8dc065d73e0c666d9', // your App Secret
		callbackURL: `http://${IP_ENV}:${PORT}/auth/facebook/callback`,
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
		   debugger;
	process.nextTick(async () => {
          // find UserID in database using FB
		try {
			 debugger;
			const UserInfor = await User.findOne({ fb_id: profile.id });
            // If user exist in db
			 debugger;
			if (UserInfor) {
              // update last_login
			  debugger;
				UserInfor.last_login = Date.now();

				const updatedUser = await UserInfor.save();

				done(null, updatedUser);
			} else {
				debugger;
				console.log(token, profile);
				console.log('pro', profile.id, profile.email, profile.emails, profile.photos[0].value);
              // if user don't exist, try to make user data in db
				const newUser = new User({
					fb_id: profile.id,
					token,
					name: `${profile.name.givenName} ${profile.name.familyName}`,
					email: profile.email || profile.emails[0].value || 'null',
					photo: profile.photos[0].value,
				});

				const updatedUser = await newUser.save();

              // makeDefalutNoteToDbForTest
				await mockNoteToDb(updatedUser._id);

				done(null, updatedUser);
			}
		} catch (e) {
			console.log('error in passport validation');
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
