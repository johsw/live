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

    $scope.connectionStatus = 'disconnected';
    $scope.updates = [];

    socket.on('init', function (data) {
      $scope.connectionStatus = data.msg;
    });

    socket.on('update', function(data) {
      $scope.updates.push(data);
    });

    socket.on('disconnect', function (data) {
      $scope.connectionStatus = 'disconnected';
    });

  });
