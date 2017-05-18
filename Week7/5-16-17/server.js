var express = require("express");
	ejs = require("ejs");
	app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/login", function(req, res) {
	res.render("login");
});

app.get("/signup", function(req, res) {
	res.render("signup");
});

app.listen(8080, function() {
	console.log("Server is running!");
});