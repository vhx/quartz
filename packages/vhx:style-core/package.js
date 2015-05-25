Package.describe({
  name: 'vhx:style-core',
  summary: 'VHX Core Styles',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'vhx:style-foundation',
    'fourseven:scss'
  ]);

  api.addFiles([
    'scss.json',
    'config/_variables.scss',
    'config/_mixins.scss',
    'styles/forms.scss',
    'styles/grid.scss',
    'styles/arrows.scss',
    'styles/lists.scss',
    'styles/headers.scss',
    'styles/media.scss',
    'styles/util.scss'
  ], 'client');

  api.export([]);

});