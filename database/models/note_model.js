const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({

	user_id : {type : Schema.Types.ObjectId, ref : 'User'},
	title : String,
	data : String,
	pre_image : String,
	created_at : Date,
	updated_at : Date,
	is_publish : Boolean,
	like : Number,
	tags : [String]

});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;