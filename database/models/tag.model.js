import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const Tag = new Schema({
	userid: { type: String, default: true },
	notes: [String],
	name: { type: String, default: true },
});

export default mongoose.model('Tags', Tag);
