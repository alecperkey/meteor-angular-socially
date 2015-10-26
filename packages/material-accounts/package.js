Package.describe({
  name: 'perk:material-accounts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/alecperkey/meteor-angular-socially',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript@0.1.4');
  api.use('angular@1.0.2');

  api.addFiles([
    'lib/module.ng.js',
    'routes.ng.js',
    'controllers/login.ng.js',
    'controllers/register.ng.js',
    'controllers/reset.ng.js'
  ], 'client');

  api.addAssets([
    'views/login.ng.html',
    'views/register.ng.html',
    'views/reset-password.ng.html'
  ], 'client');
});

