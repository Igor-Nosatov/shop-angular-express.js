'use strict';

angular.module('bigmalApp')
  .controller('SidebarAccountCtrl', ['$scope', 'Auth',
    function($scope, Auth) {
      $scope.isAdmin = Auth.hasRole('admin');
      $scope.isLoggedIn = Auth.isLoggedIn();
    }
  ]);
