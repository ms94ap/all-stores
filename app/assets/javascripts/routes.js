(function() {
	'use strict'

	angular
		.module('app')
		.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
				.state('home', {
					url:'/',
					templateUrl:'home/home.html',
					controller: 'HomeController as vm'
				})

				.state('home.stores', {
					url:'/stores',
					templateUrl:'stores/stores.html',
					controller: 'StoreController as vm',
					resolve: {
              			storeDetails: function($stateParams, StoreFactory) {
               				return StoreFactory.getStore(1);
             			}
             		}
				})

				.state('home.new-store', {
					url:'/new-store',
					templateUrl:'stores/new.html',
					controller: 'StoreController as vm'
				})

				.state('home.store.details', {
					url:'/stores/:id',
					templateUrl:'stores/store.html',
					controller:'StoreController as vm'					
					resolve: {
              			storeDetails: function($stateParams, StoreFactory) {
               				return StoreFactory.getStore($stateParams.id);
             			}
             		}
				})

				.state('about', {
					url:'/about',
					templateUrl:'home/about.html'
				});

			$urlRouterProvider.otherwise('/');
		});
}());