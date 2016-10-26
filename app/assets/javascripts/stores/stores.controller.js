(function() {
	'use strict'

	function StoreController() {
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
			
		}

		function getStore(){

		}

		function createStore() {

		}

		function updateStore(){

		}

		function deleteStore(){

		}

	};
	angular
		.module('app')
		.controller('StoreController', StoreController)
}());