'use strict';

_.max = function (array) {
  return Math.max.apply(Math, array);
};'use strict';

// window.Q = {
//   models: {
//     data: {},
//   },
//   components: {
//     shared: {
//       guide: {
//         intro: { ui: {} },
//         block: { ui: {} },
//       }
//     },
//     guide: {
//       styleguide: {
//         ui: {}
//       }
//     }
//   },
//   layouts: {
//     standard: {
//       ui: {}
//     }
//   }
// };Q.models.data.scripts = m.prop(null);

Q.models.getScriptDocs = function () {
  Q.models.data.scripts({
    mithril: [{ guide: 'guide__js_mithril_intro', code: 'code__js_mithril_intro' }, { guide: 'guide__js_mithril_folders', code: 'code__js_mithril_folders' }, { guide: 'guide__js_mithril_order', code: 'code__js_mithril_order' }, { guide: 'guide__js_mithril_namespace', code: 'code__js_mithril_namespace' }, { guide: 'guide__js_mithril_layouts', code: 'code__js_mithril_layouts' }, { guide: 'guide__js_mithril_components', code: 'code__js_mithril_components' }, { guide: 'guide__js_mithril_models', code: 'code__js_mithril_models' }, { guide: 'guide__js_mithril_requests', code: 'code__js_mithril_requests' }, { guide: 'guide__js_mithril_api', code: 'code__js_mithril_api' }]
  });
};Q.models.data = {
  guide: m.prop(null),
  code: m.prop(null)
};

Q.models.getStyleDoc = function (name) {
  Q.models.data.guide(DATA['vhx-style-' + name].guide);
  Q.models.data.code(DATA['vhx-style-' + name].code);

  // Q.models.data.styles({
  //   colors: DATA['vhx-style-colors'],
  //   elements: [
  //     { guide: 'guide__style_buttons', code:'code__style_buttons' },
  //     { guide: 'guide__style_loaders', code:'code__style_loaders' },
  //     { guide: 'guide__style_charts', code:'code__style_charts' },
  //     { guide: 'guide__style_checkbox', code:'code__style_checkbox' },
  //     { guide: 'guide__style_radio', code:'code__style_radio' },
  //     { guide: 'guide__style_tooltips', code:'code__style_tooltips' }
  //   ],
  //   typography: [
  //     { guide: 'guide__style_headers', code:'code__style_headers' },
  //     { guide: 'guide__style_text', code:'code__style_text' }
  //   ],
  //   utitlities: [
  //     { guide: 'guide__style_grid', code:'code__style_grid' },
  //     { guide: 'guide__style_display', code:'code__style_display' },
  //     { guide: 'guide__style_spacing', code:'code__style_spacing' },
  //     { guide: 'guide__style_backgrounds', code:'code__style_backgrounds' },
  //     { guide: 'guide__style_borders', code:'code__style_borders' }
  //   ],
  //   icons: [
  //     { guide: 'guide__style_icons', code:'code__style_icons' },
  //     { guide: 'guide__style_icons_names', code:'code__style_icons_names' },
  //   ],
  //   tabs: [
  //     { guide: 'guide__style_tables', code:'code__style_tables' },
  //   ]
  // });
};'use strict';

Q.layouts.standard.controller = function (opts) {
  var self = this;

  self.init = function () {
    if (m.route.param('style')) {}
    // Q.models.getStyleDoc(m.route.param('style'));

    // if (m.route.param('js')) {
    //   Q.models.getScriptDoc(m.route.param('js'));
    // }
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

  if (opts.init) {
    self.init();
  }
};'use strict';

Q.layouts.standard.state = {};'use strict';

Q.layouts.standard.ui.container = {
  controller: function controller() {
    return new Q.layouts.standard.controller({
      init: true
    });
  },
  view: function view() {
    return m('div.fill-width.margin-reset', [Q.components.route[m.route.param('type')].ui[m.route.param('guide')].items.map(function (item) {
      return m('div.row', [m('div.column.small-8.padding-reset', [m('section.guide-bar', [m.component(item.guide)])]), m('div.column.small-8.padding-reset', [m('section.code-bar', [m('pre.padding-medium', [m('code.hljs.' + item.code.language, m.trust(item.code.template))])])])]);
    })]);
  }
};'use strict';

Q.components.shared.guide.block.ui.container = {
  controller: function controller(opts) {},
  view: function view(ctrl, opts) {
    return m('div.margin-vert-large', [m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', opts.title), opts.description ? m('div.text-contain.text-2', [m('p', opts.description)]) : '', opts.component ? m.component(opts.component) : '']);
  }
};'use strict';

Q.components.shared.guide.intro.ui.container = {
  controller: function controller(opts) {},
  view: function view(ctrl, opts) {
    return m('header', [opts.title ? m('h3.head-3.head--navy.text--bold', opts.title) : '', opts.intro ? m('div.margin-vert-large', [m('.margin-bottom-medium.text-2', m.trust(opts.intro))]) : '']);
  }
};Q.components.route.styleguide.ui.buttons = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.buttons.container),
    code: Q.components.code.buttons
  }]
};Q.components.route.styleguide.ui.elements = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.checkbox.container),
    code: Q.components.code.checkbox
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.radio.container),
    code: Q.components.code.radio
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.loaders.container),
    code: Q.components.code.loaders
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.tooltips.container),
    code: Q.components.code.tooltips
  }]
};Q.components.route.styleguide.ui.utilities = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.display.container),
    code: Q.components.code.display
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.grid.container),
    code: Q.components.code.grid
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.spacing_sizes.container),
    code: Q.components.code['spacing-sizes']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.spacing_positions.container),
    code: Q.components.code['spacing-positions']
  }]
};Q.components.route.styleguide.ui.colors = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.colors_core.container),
    code: Q.components.code['colors-core']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_brand.container),
    code: Q.components.code['colors-brand']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_external.container),
    code: Q.components.code['colors-external']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_tools.container),
    code: Q.components.code['colors-tools']
  }]
};Q.components.route.styleguide.ui.typography = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.text.container),
    code: Q.components.code.text
  }]
};'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('quartz'), '/', {
  '/:type/:guide': Q.layouts.standard.ui.container
});