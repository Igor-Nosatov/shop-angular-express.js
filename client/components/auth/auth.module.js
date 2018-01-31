'use strict';

angular.module('bigmalApp.auth', [
  'bigmalApp.constants',
  'bigmalApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
