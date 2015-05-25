Package.describe({
  name: 'vhx:style-typography',
  summary: 'VHX Typography Styles',
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
    'styles/headers.scss',
    'styles/links.scss',
    'styles/text.scss',
    'docs/code.html',
    'docs/guide.html'
  ], 'client');

  api.export([]);

});