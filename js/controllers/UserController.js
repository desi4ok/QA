"use strict";

extList.controller( "UserController", 
	function UserController( $scope, dataRequest, baseUrl ) {

		$scope.processLogin = function( user ) {
			var user = "username=" + user.username + "&password=" + user.password;
			
			dataRequest.loginUser(user)
				.$promise.then(function(data) {
					setUserToStorage( data );
					$( "#login" ).modal( "hide" );
					$( "#login-menu-item" ).html( "Logout" );
					$( "#cheboxForEdit" ).click();
				});
		};

		$scope.checkLogin = function() {
			if( $( "#login-menu-item" ).html() == "Logout" ) {

				$( "#login-menu-item" ).html( "Login" );
				clearUserFromStorage();
				$( "#cheboxForEdit" ).click();
			}
		}	

		function setUserToStorage( data ) {
	        localStorage['username'] = data.username;
	        localStorage['userId'] = data.objectId;
	        localStorage['sessionToken'] = data.sessionToken;
	    }

	    function clearUserFromStorage() {
	        delete localStorage['username'];
	        delete localStorage['userId'];
	        delete localStorage['sessionToken'];
	    }
	}
);
