'use strict';

/**
 * @ngdoc function
 * @name clientAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientAdminApp
 */
angular.module('clientAdminApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.message = {}
    $scope.sendMessage = function() {
      $http.post('/api/update', $scope.message).success(function(data) {
        console.log(data);
       });
    }
  });
