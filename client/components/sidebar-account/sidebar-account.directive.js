'use strict';

angular.module('bigmalApp')
  .directive('sidebarAccount', function () {
    return {
      templateUrl: 'components/sidebar-account/sidebar-account.html',
      controller: 'SidebarAccountCtrl',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
