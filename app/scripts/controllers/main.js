'use strict';

/**
 * @ngdoc function
 * @name vivusTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vivusTestApp
 */
angular.module('vivusTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
