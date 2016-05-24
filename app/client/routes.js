'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('quartz'), '/', {
  /* dashboard */
  '/'                           : Q.layouts.standard.ui.container,

  /* styles */
  '/styleguide/html'            : Q.layouts.standard.ui.container,
  '/styleguide/css'             : Q.layouts.standard.ui.container,
  '/styleguide/colors'          : Q.layouts.standard.ui.container,
  '/styleguide/typography'      : Q.layouts.standard.ui.container,
  '/styleguide/elements'        : Q.layouts.standard.ui.container,
  '/styleguide/utilties'        : Q.layouts.standard.ui.container,
  '/styleguide/examples'        : Q.layouts.standard.ui.container,
  '/styleguide/reading'         : Q.layouts.standard.ui.container,
  '/styleguide/icons'           : Q.layouts.standard.ui.container,
  '/styleguide/tables'          : Q.layouts.standard.ui.container,

  /* scripts */
  '/content'                    : Q.layouts.standard.ui.container,
  '/javascript/conventions'     : Q.layouts.standard.ui.container,
  '/javascript/mithril'         : Q.layouts.standard.ui.container,
  '/javascript/components'      : Q.layouts.standard.ui.container,
  '/javascript/components/:id'  : Q.layouts.standard.ui.container,
  '/javascript/unit-testing'    : Q.layouts.standard.ui.container,
  '/javascript/buy'             : Q.layouts.standard.ui.container,
  '/javascript/reading'         : Q.layouts.standard.ui.container
});