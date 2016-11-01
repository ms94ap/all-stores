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
                    url:'stores',
                    templateUrl:'stores/stores.html',
                    controller: 'StoreController as vm'
                })

                .state('home.new-store', {
                    url:'stores/new',
                    templateUrl:'stores/new.html',
                    controller: 'StoreController as vm'
                })

                .state('home.store', {
                    url:'stores/:id',
                    templateUrl:'stores/store.html',
                    controller:'StoreController as vm'
                })

                .state('about', {
                    url:'about',
                    templateUrl:'home/about.html'
                });

            $urlRouterProvider.otherwise('/');
        });
}());