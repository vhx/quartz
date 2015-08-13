Package.describe({
  name: 'vhx:style-lists',
  summary: 'VHX List Styles',
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
    'styles/pagination.scss',
    'styles/tags.scss',
    'docs/code.html',
    'docs/guide.html'
  ], 'client');

  api.export([]);

});