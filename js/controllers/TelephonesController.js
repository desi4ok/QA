"use strict";

extList.controller( "TelephonesController", 
	function TelephonesController( $scope, dataRequest ) {
		 $scope.telephones = dataRequest.getAllTelephones();
	}
);