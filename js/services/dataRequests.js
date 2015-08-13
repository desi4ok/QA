"use strict";

extList.factory("dataRequest",
	function( $resource, baseUrl ) {

		var agentUrl = baseUrl + "classes/Agent/",
			queueUrl = baseUrl + "classes/Queue",
			telUrl = baseUrl + "classes/Phone",
			faxUrl = baseUrl + "classes/Fax",
			loginUrl = baseUrl + "classes/Phone",
			headers = {
				"X-Parse-Application-Id" : "5BfsVCp1QL9IUDhJ44WxCm7jmCGcxIfkgme5pEJu",
				"X-Parse-REST-API-Key" : "otRUe7wVmxvwJ2IWi2N69L4EJ36VKIxGoZMznTSP"
			},
			postHeaders = {
				"X-Parse-Application-Id" : "5BfsVCp1QL9IUDhJ44WxCm7jmCGcxIfkgme5pEJu",
				"X-Parse-REST-API-Key" : "otRUe7wVmxvwJ2IWi2N69L4EJ36VKIxGoZMznTSP",
				"Content-Type": "application/json"
			};

		var Agent = $resource(agentUrl + ":agentId",
			{ agentId: "@agentId" },
			{
				getAllAgents: {
					method: "GET",
					headers: headers
				},
				save: {
					method: "POST",
					headers: postHeaders
				},
				delete: {
					method: "DELETE",
					headers: headers
				}
			});

		var Queue = $resource(queueUrl,
			null,
			{
				getAllQueues: {
					method: "GET",
					headers: headers
				}
			});

		var Tel = $resource(telUrl,
			null,
			{
				getAllTels: {
					method: "GET",
					headers: headers
				}
			});

		var Fax = $resource(faxUrl,
			null,
			{
				getAllFaxes: {
					method: "GET",
					headers: headers
				}
			});

		var User = $resource(baseUrl + "login?:user",
			{user: "@user"},
			{
				loginUser: {
					method: "GET",
					headers: headers
				}
			});

		return {
			getAllAgents: Agent.getAllAgents,
			getAllQueues: Queue.getAllQueues,
			getAllTelephones: Tel.getAllTels,
			getAllFaxes: Fax.getAllFaxes,
			loginUser: function(user) {
				return User.loginUser({user: user});
			},
			agent: Agent
		}

})
