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
		vm.deleteStore = deleteStore;

		activate();


		//defined methods
		function activate(){
			getStores()
		}

		function getStores(){
			return StoreFactory.getStores()
				.then(setStores)
		}

		function getStore(){
			return StoreFactory.getStore();
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

		vm.filteredStores = $filter('filter')(vm.stores, vm.search);
		
		vm.refilter = function(){
	      vm.filteredStores = $filter('filter')(vm.stores, vm.search);
		
		}

	};
	angular
		.module('app')
		.controller('StoreController', StoreController)
}());