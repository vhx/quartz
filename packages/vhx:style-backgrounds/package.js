Package.describe({
  name: 'vhx:style-backgrounds',
  summary: 'VHX Background Styles',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'iron:router@=1.0.6',
    'fourseven:scss',
    'vhx:style-core'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars'
  ], 'client');

  api.addFiles([
    'config/_include.scss',
    'styles/backgrounds.scss',
    'docs/code.html',
    'docs/guide.html'
  ], 'client');

  api.export([]);

});