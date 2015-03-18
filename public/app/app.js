angular.module('userApp', [
        'ngAnimate',
        'app.routes',
        'authService',
        'mainCtrl',
        'userService',
        'userCtrl'
    ])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('AuthToken');
    });
