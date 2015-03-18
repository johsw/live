'use strict';

/**
 * @ngdoc function
 * @name clientFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientFrontendApp
 */
angular.module('clientFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
