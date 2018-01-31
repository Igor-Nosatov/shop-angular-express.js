'use strict';

angular.module('bigmalApp')
  .factory('Order', function($resource) {
    return $resource('/api/orders/:id/:controller', {
      id: '@_id'
    }, {
      'update': { method: 'PUT' },
      'myOrders': {
        method: 'GET',
        isArray: true,
        params: {
          controller: 'myorders'
        }
      }
    });
  });
