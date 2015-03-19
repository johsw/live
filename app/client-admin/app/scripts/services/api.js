'use strict';

angular.module('clientAdminApp')
.factory('LiveMessages', function($resource, BACKEND_ADDRESS) {
    return $resource('/');
});
