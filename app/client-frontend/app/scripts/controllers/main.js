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
    
    socket.on('init', function (data) {
      console.log(data);
    });
    
    
  });
