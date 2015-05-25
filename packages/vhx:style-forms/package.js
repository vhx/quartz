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
    'config/_include.scss',
    'styles/checkbox.scss',
    'styles/input.scss',
    'styles/radio.scss',
    'styles/select.scss',
    'docs/code.html',
    'docs/guide.html'
  ], 'client');

  api.export([]);

});