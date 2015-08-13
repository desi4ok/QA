"use strict";

extList.controller( "FaxesController", 
	function FaxesController( $scope, dataRequest ) {
		 $scope.faxes = dataRequest.getAllFaxes();
	}
);