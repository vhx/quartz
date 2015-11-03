Package.describe({
  name: 'vhx:style-core',
  summary: 'VHX Core Styles',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'iron:router@=1.0.6',
    'fourseven:scss',
    'vhx:style-colors'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars'
  ], 'client');

  api.addFiles([
    'scss.json',

    'config/_variables.scss',
    'config/_mixins.scss',
    'styles/forms.scss',
    'styles/grid.scss',
    'styles/arrows.scss',
    'styles/lists.scss',
    'styles/media.scss',
    'styles/util.scss',
    'styles/spacing.scss',

    'docs/grid.code.html',
    'docs/grid.guide.html',
    'docs/spacing.code.html',
    'docs/spacing.guide.html'

  ], 'client');

  api.export([]);

});
