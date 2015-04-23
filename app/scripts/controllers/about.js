'use strict';

/**
 * @ngdoc function
 * @name vivusTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vivusTestApp
 */
angular.module('vivusTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
