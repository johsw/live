'use strict';

/**
 * @ngdoc function
 * @name clientFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientFrontendApp
 */
angular.module('clientFrontendApp')
  .controller('MainCtrl', function ($scope, socket) {
    console.log('loaded');
    $scope.updates = [];

    socket.on('init', function (data) {
      console.log(data);
    });

    socket.on('update', function(data) {
      console.log(data);
      $scope.updates.push(data);
    });


  });
