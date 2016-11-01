(function() {
	'use strict'

	function StoreController(StoreFactory, $filter, $stateParams, $state) {	
		// console.log("anders", $stateParams)
		var vm = this;
		vm.search = ''
		vm.editing = false;
		

		//callable methods
		vm.getStores = getStores;
		vm.getStore = getStore;
		vm.createStore = createStore;
		vm.updateStore = updateStore;
		// vm.storeDetails = storeDetails;
		vm.deleteStore = deleteStore;
		vm.refilter = refilter;


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

		function setEditing(bool){
			vm.editing = bool;
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

		function updateStore(store){
			return StoreFactory.updateStore(store)
				.then(() => vm.editing = false);
				

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

	};
	//StoreController.$inject = ['StoreFactory', '$filter', 'storeDetails'];

	angular
		.module('app')
		.controller('StoreController', StoreController)
}());