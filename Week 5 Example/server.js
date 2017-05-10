require("dotenv").config();

var express = require("express");
var app = express();

app.get("/randomURL", function(request, respond) {
	if(process.env.NODE_ENV == 'dev') {
		respond.json({
			"user": process.env.DB_USER,
			"pass": process.env.DB_PASS
		});
	} else {
		respond.json({
			"user": "Does not exist",
			"pass": "User does not exist"
		});
	}
});

app.listen(process.env.PORT || 8080);

console.log("Server is running! :) Make sure to type '/randomURL' after '8080'");