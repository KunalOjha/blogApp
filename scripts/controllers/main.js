'use strict';

/**
 * @ngdoc function
 * @name blogAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogAppApp
 */
angular.module('blogApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL='http://lorempixel.com/200/250/';
    $scope.setInterval=5000;
    
    $scope.slides = [
       {
             title:'7 Ways to stay Fit',
             image:baseURL+'sports/',
             text:'Play a sport for 30 minutes a day!'
       },
       {
             title:'Healthly Food',
             image:baseURL+'food/',
             text:'Food that you should be eating!'
       },
       {
             title:'Relaxing Holidays',
             image:baseURL+'nature/',
             text:'10 Locations for Nature Lovers!'
       }
    ];
  });
