import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: { type: String, default: '' },
	email: { type: String, default: '' },
	phone: { type: String, default: '' },
	photo: { type: String, default: '' },
	token: { type: String, default: '' },
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
