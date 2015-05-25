Package.describe({
  name: 'vhx:style-foundation',
  summary: 'VHX Foundation Custom Install',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'fourseven:scss'
  ]);

  api.addFiles([
    'normalize.css',
    'foundation.css'
  ]);

  api.export([]);
});