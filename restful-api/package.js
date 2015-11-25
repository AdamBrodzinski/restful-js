Package.describe({
  name: 'restful-api',
  version: '0.1.0',
  summary: 'REST Framework for Meteor',
  git: 'https://github.com/AdamBrodzinski/meteor-restful',
  documentation: 'README.md'
});

Npm.depends({
  'connect': '2.11.0',
  'connect-route': '0.1.5',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'underscore',
    'webapp',
  ], 'server');

  api.addFiles([
    'connect-router.js',
    'controller.js',
    'router.js',
    'middleware.js',
    'restful.js',
  ], 'server');
  api.export('Restful', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('restful');
  api.addFiles('restful-tests.js');
});
