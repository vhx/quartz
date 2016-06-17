'use strict';

Q.layouts.standard.ui.container = {
  controller: function() {
    return new Q.layouts.standard.controller({
      init: true
    });
  },
  view: function() {
    return m('div.fill-width.margin-reset', [
      Q.components.route[m.route.param('type')].ui[m.route.param('guide')].items.map(function(item) {
        return m('div.row', [
          m('div.column.small-8.padding-reset', [
            m('section.guide-bar', [
              m.component(item.guide)
            ])
          ]),
          m('div.column.small-8.padding-reset', [
            m('section.code-bar', [
              m('pre.padding-medium', [
                m('code.hljs.' + item.code.language, m.trust(item.code.template))
              ])
            ])
          ])
        ]);
      })
    ]);
  }
};