var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ContactSchema = new mongoose.Schema({
	name: String,
	hidden: Boolean
});
mongoose.model('Contact', ContactSchema);