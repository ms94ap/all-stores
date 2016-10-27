(function() {
	'use strict'

	function StoreController(StoreFactory) {
		var vm = this;

		vm.name = 'andrew'

		//callable methods
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

		}

		function createStore() {
			return StoreFactory.createStore(vm.newStore)
				.then(getStores)

		}

		function updateStore(){

		}

		function deleteStore(){

		}

		function setStores(data){
			vm.stores = data;
		}

	};
	angular
		.module('app')
		.controller('StoreController', StoreController)
}());