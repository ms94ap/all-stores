(function() {
	'use strict'

	angular
		.module('app')
		.config(function($stateProvider, $urlRouteProvider){
			$stateProvider
				.state('home', {
					url:'/'
					tempateUrl:'home/home.html',
					controller: 'HomeController as vm'
				})

				.state('home.stores', {
					url:'/stores',
					templateUrl:'stores/stores.html',
					controller: 'StoreController as vm'
				})

			$urlRouteProvider.otherwise('/');
		})
}()),