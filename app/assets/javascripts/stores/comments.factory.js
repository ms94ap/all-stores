(function() {
	'use strict'

	function CommentFactory($http){
		return {
			createComment: createComment,
			deleteComment: deleteComment
			
		}	

		function createComment(comment) {
			var req = {
				method: 'POST',
				url: '/comments',
				headers: {
	          			'Content-Type': 'application/json'
	       		},
				data: {
					comment: comment
				}
			};
			return $http(req)
				.catch(handleError);	
		}

		function deleteComment(commentId){
			var req = {
				method: 'DELETE',
				url: '/comments/' + commentId,
				headers: {
					'Content-Type': 'application/json'
				},
				
			};
				return $http(req)
    				.then(handleResponse)
    				.catch(handleError);
		}


		function handleResponse(response){
			// console.log(response)
			return response.data
		}

		function handleError(error) {
			console.log(error)
		}
	}
	
	angular
		.module('app')
		.factory('CommentFactory', CommentFactory)
}());