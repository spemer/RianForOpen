import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
	email: String,
	phone: String,
	photo: String,
	token: String,
	created_at: Date,
	updated_at: Date,
	last_login: Boolean,
	fb_id: String,
	google_id: String,
	kakao_id: String,
	naver_id: String,
	friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	tags: [String],
});

export default mongoose.model('User', UserSchema);
