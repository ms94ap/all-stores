(function() {
	'use strict'

	function StoreController(StoreFactory, $filter) {
		var vm = this;
		vm.search = ''

		

		//callable methods
		vm.getStores = getStores;
		vm.getStore = getStore;
		vm.createStore = createStore;
		vm.updateStore = updateStore;
		//vm.storeDetails = storeDetails;
		vm.deleteStore = deleteStore;
		vm.refilter = refilter;

		activate();


		//defined methods
		function activate(){
			getStores().then(() => refilter(vm.stores, vm.search));
		}

		function getStores(){
			return StoreFactory.getStores()
				.then(setStores)
		}

		function getStore(id){
			return StoreFactory.getStore(id);
		}

		function createStore() {
			return StoreFactory.createStore(vm.newStore)
				.then(getStores)

		}

		function updateStore(){
			return StoreFactory.updateStore();
				

		}

		function deleteStore(){
			return StoreFactory.deleteStore();
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