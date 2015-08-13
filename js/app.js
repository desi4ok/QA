"use strict";

var extList = angular
	.module("extList", [ "ngResource", "ngRoute" ])
	.config( function( $routeProvider ) {

		$routeProvider
			.when( "/", {
				templateUrl: "/partials/agents.html"
			})
			.when( "/agents", {
				templateUrl: "/partials/agents.html"
			})
			.when( "/queues", {
				templateUrl: "/partials/queues.html"
			})
			.when( "/tel", {
				templateUrl: "/partials/phones.html"
			})
			.when( "/fax", {
				templateUrl: "/partials/faxes.html"
			})
			.otherwise({redirectTo: "/agents"});
	})
	.constant("baseUrl", "https://api.parse.com/1/");