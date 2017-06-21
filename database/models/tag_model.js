import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TagSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	name: String,
	is_booked: Boolean,
	is_publish: Boolean,
	created_at: Date,
	updated_at: Date,
});

export default mongoose.model('Tag', TagSchema);
