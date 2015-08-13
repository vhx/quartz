Package.describe({
  name: 'vhx:style-media',
  summary: 'VHX Media Styles',
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
    'styles/avatars.scss',
    'styles/badges.scss',
    'styles/images.scss',
    'docs/code.html',
    'docs/guide.html'
  ], 'client');

  api.export([]);

});