'use strict';

/**
 * @ngdoc overview
 * @name blogAppApp
 * @description
 * # blogAppApp
 *
 * Main module of the application.
 */


(function()
    {
        'use strict'

        angular
            .module('blogApp', ['ngRoute'])
            .config(function ($routeProvider) {
                $routeProvider
                  .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                  })
                  .otherwise({
                    redirectTo: '/'
                  });
            });
    })();