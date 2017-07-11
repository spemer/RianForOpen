import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: String,
	email: String,
	phone: String,
	photo: String,
	token: String,
	createdAt: Date,
	updatedAt: Date,
	lastLogin: Boolean,
	fbId: String,
	googleId: String,
	kakaoId: String,
	naverId: String,
	friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
});

export default mongoose.model('User', UserSchema);
