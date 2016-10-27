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

		function getStore(storeId) {
			return $http.get('/store/' + storeId)
				.then(handleResponse)
        		.catch(handleError);
		}

		function createStore(store) {
			var req = {
				method: 'POST',
				url: '/stores',
				headers: {
					'Content-Type': "application/json"
				},
				data: {
					store: store
				}

			};

			return $http(req)
				.catch(handleError)
			
		}

		function updateStore(store) {
			var req = {
       			method: 'PATCH',
        		url: '/stores/' + store.id,
        		headers: {
          			'Content-Type': 'application/json'
       			 },
        		data: {
          			store: store
        		}
      		}

      		return $http(req)
        		.then(handleResponse)
        		.catch(handleError);
    	}

		function deleteStore(store) {
			var req = {
      			method: 'DELETE',
      			url: '/stores/' + store.id,
      			headers: {
        			'Content-Type': 'application/json'
      			},
      			data: {
       				store: store
     		}
    	};
    		return $http(req)
    			.then(handleResponse)
    			.catch(handleError);
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