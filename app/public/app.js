'use strict';

_.max = function (array) {
  return Math.max.apply(Math, array);
};'use strict';

window.Q = {
  data: {},
  models: {
    data: {}
  },
  components: {
    shared: {}
  },
  layouts: {
    standard: {
      ui: {}
    }
  }
};Q.models.data.scripts = m.prop(null);

Q.models.getScripts = function () {
  Q.models.data.scripts({
    mithril: [{ guide: 'guide__js_mithril_intro', code: 'code__js_mithril_intro' }, { guide: 'guide__js_mithril_folders', code: 'code__js_mithril_folders' }, { guide: 'guide__js_mithril_order', code: 'code__js_mithril_order' }, { guide: 'guide__js_mithril_namespace', code: 'code__js_mithril_namespace' }, { guide: 'guide__js_mithril_layouts', code: 'code__js_mithril_layouts' }, { guide: 'guide__js_mithril_components', code: 'code__js_mithril_components' }, { guide: 'guide__js_mithril_models', code: 'code__js_mithril_models' }, { guide: 'guide__js_mithril_requests', code: 'code__js_mithril_requests' }, { guide: 'guide__js_mithril_api', code: 'code__js_mithril_api' }]
  });
};Q.models.data.styles = m.prop(null);

Q.models.getStyles = function () {
  Q.models.data.styles({
    colors: [{ guide: 'guide__style_colors', code: 'code__style_colors' }, { guide: 'guide__style_tools_colors', code: 'code__style_tools_colors' }, { guide: 'guide__style_brand_colors', code: 'code__style_brand_colors' }, { guide: 'guide__style_external_colors', code: 'code__style_external_colors' }],
    elements: [{ guide: 'guide__style_buttons', code: 'code__style_buttons' }, { guide: 'guide__style_loaders', code: 'code__style_loaders' }, { guide: 'guide__style_charts', code: 'code__style_charts' }, { guide: 'guide__style_checkbox', code: 'code__style_checkbox' }, { guide: 'guide__style_radio', code: 'code__style_radio' }, { guide: 'guide__style_tooltips', code: 'code__style_tooltips' }],
    typography: [{ guide: 'guide__style_headers', code: 'code__style_headers' }, { guide: 'guide__style_text', code: 'code__style_text' }],
    utitlities: [{ guide: 'guide__style_grid', code: 'code__style_grid' }, { guide: 'guide__style_display', code: 'code__style_display' }, { guide: 'guide__style_spacing', code: 'code__style_spacing' }, { guide: 'guide__style_backgrounds', code: 'code__style_backgrounds' }, { guide: 'guide__style_borders', code: 'code__style_borders' }],
    icons: [{ guide: 'guide__style_icons', code: 'code__style_icons' }, { guide: 'guide__style_icons_names', code: 'code__style_icons_names' }],
    tabs: [{ guide: 'guide__style_tables', code: 'code__style_tables' }]
  });
};'use strict';

Q.layouts.standard.controller = function (opts) {
  var self = this;

  self.init = function () {
    // $(window).on('resize', function() {
    //   $('.row.fill-width').each(function() {
    //     var arr = [],
    //         bars = $(this).find('.code-bar, .guide-bar');
    //
    //     bars.height('');
    //     $(this).children('.small-8').each(function() {
    //       arr.push($(this).height());
    //     });
    //
    //     bars.height(_.max(arr));
    //   });
    // });
    //
    // $(window).trigger('resize');
  };
};'use strict';

Q.layouts.standard.state = {};'use strict';

Q.layouts.standard.ui.container = {
  controller: function controller() {
    return new Q.layouts.standard.controller({
      init: true
    });
  },
  view: function view() {
    return m('div.row.fill-width.margin-reset', [m('div.column.small-8.padding-reset', [m('section.guide-bar', [
      // {{> UI.dynamic template=guide}}
    ])]), m('div.column.small-8.padding-reset', [m('section.code-bar', [
      // {{> UI.dynamic template=code}}
    ])])]);
  }
};'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('quartz'), '/', {
  /* dashboard */
  '/': Q.layouts.standard.ui.container,

  /* styles */
  '/styleguide/html': Q.layouts.standard.ui.container,
  '/styleguide/css': Q.layouts.standard.ui.container,
  '/styleguide/colors': Q.layouts.standard.ui.container,
  '/styleguide/typography': Q.layouts.standard.ui.container,
  '/styleguide/elements': Q.layouts.standard.ui.container,
  '/styleguide/utilties': Q.layouts.standard.ui.container,
  '/styleguide/examples': Q.layouts.standard.ui.container,
  '/styleguide/reading': Q.layouts.standard.ui.container,
  '/styleguide/icons': Q.layouts.standard.ui.container,
  '/styleguide/tables': Q.layouts.standard.ui.container,

  /* scripts */
  '/content': Q.layouts.standard.ui.container,
  '/javascript/conventions': Q.layouts.standard.ui.container,
  '/javascript/mithril': Q.layouts.standard.ui.container,
  '/javascript/components': Q.layouts.standard.ui.container,
  '/javascript/components/:id': Q.layouts.standard.ui.container,
  '/javascript/unit-testing': Q.layouts.standard.ui.container,
  '/javascript/buy': Q.layouts.standard.ui.container,
  '/javascript/reading': Q.layouts.standard.ui.container
});