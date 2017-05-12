var mongoose = require("mongoose");

var Task = new mongoose.Schema( {
	name: String,
	description: String,
	date: Date
});

module.exports = mongoose.model("Task", Task);