(function() {
	'use strict'

	function StoreController(StoreFactory, CommentFactory, $filter, $stateParams, $state) {	
		// console.log("anders", $stateParams)
		var vm = this;
		vm.search = ''
		vm.editing = {
			name: false,
			address: false,
			location: false,
			email: false,
			country: false,
			phone: false
		};
	
		vm.attributes = Object.keys(vm.editing)
		

		//callable methods
		vm.getStores = getStores;
		vm.getStore = getStore;
		vm.createStore = createStore;
		vm.updateStore = updateStore;
		vm.deleteStore = deleteStore;
		vm.refilter = refilter;
		vm.createComment = createComment;
		vm.deleteComment = deleteComment;
		

		


		vm.counter = counter;
		vm.remove = remove;
		
		vm.currentComment = {};
		

		
		vm.setEditing = setEditing;

		activate();


		//defined methods
		function activate(){
			if ($stateParams.id) {
				getStore($stateParams.id)
					.then((data) => {
						// console.log("datar", data)
						return vm.store = data
					})
    	// get a single store
  			} else {
    			getStores();
	  		}
		}

		function setEditing(key, bool){
			vm.editing[key] = bool;
		}

		function getStores(){
			return StoreFactory.getStores()
				.then(setStores)
				.then(() => refilter(vm.stores, vm.search));
		}

		function getStore(id){
			return StoreFactory.getStore(id);
		}

		function createStore() {
			return StoreFactory.createStore(vm.newStore)
				.then(getStores)
				.then(() => $state.transitionTo('home.stores'))

		}

		function updateStore(store, key){
			return StoreFactory.updateStore(store)
				.then(() => { if (angular.isDefined(key)) {
							vm.editing[key] = false;
							}
						})

		}

		function deleteStore(storeId){
			return StoreFactory.deleteStore(storeId)
				.then(getStores);
		}

		function setStores(data){
			vm.stores = data;
		}
		
		function refilter(stores, search){
			
	      vm.filteredStores = $filter('filter')(stores, search);
		
		}

		function counter(storeId){
			vm.stores.forEach((store, index) => {
				if(store.id == storeId){
					if (angular.isDefined(store.rating)) {
						if (store.rating < 5) {
							store.rating += 1
						} 
					} else {

						store.rating = 1
					}
					vm.updateStore(store)
						.then(() => vm.stores[index] = store)
				}

			})

		}

		function remove(storeId){
			
				vm.stores.forEach((store, index) => {
				if(store.id == storeId){
					if (angular.isDefined(store.rating)) {
						if (store.rating > 0) {
							store.rating -= 1
						} 
					} else {

						store.rating = 1
					}
					

					
					vm.updateStore(store)
						.then(() => vm.stores[index] = store)
				}
			})

		}

		function deleteComment(commentId) {
			return CommentFactory.deleteComment(commentId)
				.then(getStores);
		}



		function createComment(store) {
			if (angular.isDefined(store.comment)) {
				store.comment.store_id = store.id
				CommentFactory.createComment(store.comment).then((data) => {
					store.comments.push(data.data)
					store.comment = undefined;
					store.addingComment = false;

				})

			}	
		}

	};

	angular
		.module('app')
		.controller('StoreController', StoreController)
}());