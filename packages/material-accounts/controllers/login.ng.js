angular.module('material-accounts').controller("LoginCtrl", function ($meteor, $state,$mdToast) {
    var vm = this;

    vm.credentials = {
      email: '',
      password: ''
    };

    vm.error = '';

//mock module config and provider

    configAccountsProvider = function() {

        var accountsProvider = {};

        var options = {
            providers: [],
            successPath: 'home',
            failurePath: '/login'
        };

        accountsProvider.addProvider = function (name, icon, color) {
            options.providers.push ({name: name, icon: icon, color: color});
            //return this;
        };

        accountsProvider.setSuccessPath = function (path) {
            options.successPath = path;
        };

        accountsProvider.setFailurePath = function (path) {
            options.failurePath = path;
        };

        accountsProvider.addProvider ('Facebook', 'icons/facebook.svg', '#3F62B4');
        accountsProvider.addProvider ('Google', 'icons/google.svg', '#DC4A38');
        accountsProvider.addProvider ('Twitter', 'icons/twitter.svg', '#27AAE2');

        return options;
    }

    vm.options = configAccountsProvider();

    //vm.options = accounts.options;

    vm.login = function (service) {
      $meteor.loginWithPassword(vm.credentials.email, vm.credentials.password).then(
        function () {
          $state.go(vm.options.successPath);
        },
        function (err) {
          vm.error = 'Login error - ' + err;
        }
      );
    };

    vm.loginWithProvider = function (provider) {
        $meteor["loginWith" + provider].call ({}).then (
            function (response) {
                console.log (response);
            },
            function (err) {
                vm.error=err.message;
            }

        );
    };

  }
);