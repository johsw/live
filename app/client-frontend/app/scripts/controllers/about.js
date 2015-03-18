'use strict';

/**
 * @ngdoc function
 * @name clientFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientFrontendApp
 */
angular.module('clientFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
