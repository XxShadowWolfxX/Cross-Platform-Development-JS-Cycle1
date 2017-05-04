angular.module("example-app", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "main.html"
			})
			.when("/red", {
				templateUrl: "red.html"
			})
			.when("blue", {
				templateUrl: "blue.html"
			})
	})
	.controller("someController", function() {

	})