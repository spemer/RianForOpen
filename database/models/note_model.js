const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({

	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	title: String,
	data: String,
	pre_image: String,
	created_at: Date,
	updated_at: Date,
	is_publish: Boolean,
	like_users : [{{ type: Schema.Types.ObjectId, ref: 'User' }}],
	tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],

});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
