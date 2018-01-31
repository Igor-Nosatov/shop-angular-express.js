'use strict';

angular.module('bigmalApp')
  .controller('CartCtrl', function($scope, Modal, ngCart) {
    $scope.clearCart = Modal.confirm.delete(function() {
      ngCart.empty()
  });
  });
