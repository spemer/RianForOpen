import User from 'database/models/user.model.js';
import Note from 'database/models/note.model.js';
import { saveNote } from 'database/controllers/note.ctrl.js';
import moment from 'moment';
import { PORT, IP_ENV } from './project';
import MockNote from 'MockData/noteList.js';
import { Strategy as FacebookStrategy } from 'passport-facebook';

// {
// 	"title":"vel est donec odio justo sollicitudin ut suscipit a feugiat et",
// 	"final_modified_at":"7/13/2016",
// 	"snippet":"Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
// 	"tag":"Pittsburgh"
// },

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
		clientID: '183216738826974', // your App ID
		clientSecret: '8b227a26867fdc7ce8cc43f6a989733f', // your App Secret
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
	process.nextTick(() => {
          // find the user in the database based on their facebook id
		console.log('PROFILE: ', profile);
		User.findOne({ facebook_id: profile.id }, (err, user) => {
			if (err) throw err;
			if (user) {
				console.log('PROFILE USER: ', user);
              // 유저를 찾았다면 라스트 로그인을 갱신시키고 로그인을 한다
				user.last_login = Date.now();
				user.save((err, updatedUser) => {
					if (err) throw err;
					console.log('UPDATED USER: ', updatedUser);
					done(null, updatedUser);
				});
			} else {
              // 유저를 못찾았다면 유저를 만든다
				const newUser = new User({
					facebook_id: profile.id,
					token,
					name: `${profile.name.givenName} ${profile.name.familyName}`,
					email: profile.email || profile.emails[0].value || 'null',
					picture: profile.photos[0].value,
				});
				newUser.save((err, updatedUser) => {
					if (err) throw err;
					const NotePromise = MockNote.map((infor) => {
						saveNote(updatedUser._id, infor);
					});

					Promise.all(NotePromise).then(() => {
						done(null, updatedUser);
					});
                // done(null, updatedUser);
				});
			}
		});
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
