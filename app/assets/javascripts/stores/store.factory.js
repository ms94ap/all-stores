(function() {
	'use strict'
	function StoreFactory($http){
		return {
			getStores: getStores,
			getStore: getStore,
			createStore: createStore,
			updateStore: updateStore,
			deleteStore: deleteStore
		}

		function getStores() {
			return $http.get('/stores')
				.then(handleResponse)
				.catch(handleError);
		}

		function getStore() {
			
		}

		function createStore() {
			
		}

		function updateStore() {
			
		}

		function deleteStore() {
			
		}

		function handleResponse(response){
			console.log(response)
			return response.data

		}

		function handleError(error) {
			console.log(error)
		}
	}

	angular
		.module('app')
		.factory('StoreFactory', StoreFactory)
}());