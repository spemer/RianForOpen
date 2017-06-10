import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const Note = new Schema({
	userid: Schema.Types.ObjectId,
	title: String,
	snippet: String,
	tag: [String],
	data: String,
	created_at: String,
	final_modified_at: String,
	publish: { type: Boolean, required: true, default: false },
});

export default mongoose.model('Notes', Note);
