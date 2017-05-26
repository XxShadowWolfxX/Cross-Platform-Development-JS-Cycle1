// requires(imports) Modules
var express = require("express"),
	session = require("express-session"),
	bcrypt = require("bcrypt-nodejs"),
	bodyParser = require("body-parser"),
	hbs = require("hbs"),
	mongoose = require("mongoose"),
	localAuth = require("./auth"),
	User = require("./user"),
	passport = require("passport"),
	app = express();

// Sets Template
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));

//Creates a session for the client
app.use(session({
	secret : 'itsASecret',
	resave : true,
	saveUninitialized: true
}));
//user passport with the session
app.use(passport.initialize());
app.use(passport.session());

localAuth(passport);

// "app.get" renders data
app.get("/", function(req, res) {
	res.render("index");
});

app.get("/login", function(req, res) {
	res.render("login");
});

app.get("/signup", function(req, res) {
	res.render("signup");
});
//post request, logs user in, if succes sends client to /user, if fail sends back to /login
app.post("/login", passport.authenticate("local-login",{
	successRedirect: "/user",
	failureRedirect: "/login"
}));

//bcrypt encrypts the password, post request for signing users up, if fails logs and error, success sends the client to /login
app.post("/signup", function (req, res){
	new User ({
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password)
	}).save(function(err){
		if(err){
			console.log(err);
		} else{
			res.redirect("/login");
		}
	});
});

app.get("/user", function(req, res){
	res.render("user", {
		user: req.user
	});
});

//sets up mongoose odm
mongoose.connect("mongodb://localhost/user");

app.listen(8080, function() {
	console.log("Server is running!");
});