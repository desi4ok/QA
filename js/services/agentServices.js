"use strict";

extList.factory("agentServices", 
	function( $resource, dataRequest ) {

		function addAgent( agent ) {
			dataRequest.agent.save(agent)
				.$promise.then(function(data) {
					$( "#close-add-agent-modal-btn" ).click();
				});
		};

		function deleteAgent( id ) {
			dataRequest.agent.delete({agentId: id});
		}


		return {
			addAgent: addAgent,
			deleteAgent: deleteAgent
		}

	}
);