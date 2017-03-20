(function() {
    "use strict";

    angular.module('myApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/register');

            $stateProvider
                .state('register', {
                    url: '/register',
                    controller: 'registerController',
                    templateUrl: 'templates/register.html',
                    controllerAs: 'vm'
                })
                .state('login', {
                    url: '/login',
                    controller: 'loginController',
                    templateUrl: 'templates/login.html',
                    controllerAs: 'vm'
                })
                .state('home', {
                    url: '/home',
                    controller: 'homeController',
                    templateUrl: 'templates/home.html',
                    controllerAs: 'vm'
                });
        }]);

})();
