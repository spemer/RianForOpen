import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TagSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	name: String,
	isBooked: Boolean,
	isPublish: Boolean,
	createdAt: Date,
	updatedAt: Date,
});

export default mongoose.model('Tag', TagSchema);
