import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	title: String,
	preview: String,
	data: String,
	preImage: String,
	createdAt: Date,
	updatedAt: Date,
	isPublish: Boolean,
	likeUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
});

export default mongoose.model('Note', NoteSchema);
