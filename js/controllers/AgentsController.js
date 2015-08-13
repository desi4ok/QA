"use strict";

extList.controller( "AgentsController", 
	function AgentsController( $scope, dataRequest, agentServices ) {

		$scope.agents = dataRequest.getAllAgents();

		$scope.addAgent = function( agent ) {
			agentServices.addAgent( agent );
		}

		$scope.deleteAgent = function( id ) {
			agentServices.deleteAgent( id );
		}
	}
);