Package.describe({
  name: 'vhx:style-buttons',
  summary: 'VHX Button Styles',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'vhx:style-core',
    'fourseven:scss'
  ]);

  api.addFiles([
    'config/_mixins.scss',
    'styles/buttons.block.scss',
    'styles/buttons.default.scss'
  ], 'client');

  api.export([]);

});