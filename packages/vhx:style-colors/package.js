Package.describe({
  name: 'vhx:style-colors',
  summary: 'VHX Colors',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'iron:router@=1.0.6',
    'fourseven:scss'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars'
  ], 'client');

  api.addFiles([
    'config/_include.scss',
    'config/_variables.scss',

    'docs/code.html',
    'docs/guide.html'
  ], 'client');

  api.export([]);

});
