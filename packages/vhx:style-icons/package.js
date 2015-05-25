Package.describe({
  name: 'vhx:style-icons',
  summary: 'VHX Icon Styles',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'vhx:style-core',
    'fourseven:scss'
  ]);

  api.addFiles([
    'config/_include.scss'
  ], 'client');

  api.export([]);

});