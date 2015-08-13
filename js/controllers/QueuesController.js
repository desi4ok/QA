"use strict";

extList.controller( "QueuesController", 
	function QueuesController( $scope, dataRequest ) {
		 $scope.queues = dataRequest.getAllQueues();
	}
);