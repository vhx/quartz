'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('quartz'), '/', {
  '/:type/:guide'  : Q.layouts.standard.ui.container
});