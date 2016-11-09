(function() {
	'use strict'

	function StoreController(StoreFactory, $filter, $stateParams, $state) {	
		// console.log("anders", $stateParams)
		var vm = this;
		vm.search = ''
		vm.editing = false;
		vm.count = 0;
		

		//callable methods
		vm.getStores = getStores;
		vm.getStore = getStore;
		vm.createStore = createStore;
		vm.updateStore = updateStore;
		// vm.storeDetails = storeDetails;
		vm.deleteStore = deleteStore;
		vm.refilter = refilter;

		vm.counter = counter;
		vm.remove = remove;


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

		function counter(storeId){
			vm.stores.forEach((store, index) => {
				if(store.id == storeId){
					if (angular.isDefined(store.count)) {
						if (store.count < 5) {
							store.count += 1
						} 
					} else {

						store.count = 1
					}
					
					vm.stores[index] = store
				}
			})

		}

		function remove(storeId){
			
				vm.stores.forEach((store, index) => {
				if(store.id == storeId){
					if (angular.isDefined(store.count)) {
						if (store.count > 0) {
							store.count -= 1
						} 
					} else {

						store.count = 1
					}
					
					vm.stores[index] = store
				}
			})

			
		}
	};

	angular
		.module('app')
		.controller('StoreController', StoreController)
}());