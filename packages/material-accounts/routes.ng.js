
'use strict';

angular.module('material-accounts').config(
    function ( $stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/packages/material-accounts/views/login.ng.html',
                controller: 'LoginCtrl',
                controllerAs: 'lc'
            })
            .state('register',{
                url: '/register',
                templateUrl: '/packages/material-accounts/views/register.ng.html',
                controller: 'RegisterCtrl',
                controllerAs: 'rc'
            })
            .state('resetPassword', {
                url: '/resetPassword',
                templateUrl: '/packages/material-accounts/views/reset-password.ng.html',
                controller: 'ResetCtrl',
                controllerAs: 'rpc'
            })
    });

