'use strict';

Q.layouts.standard.ui.container = {
  controller: function() {
    return new Q.layouts.standard.controller({
      init: true
    });
  },
  view: function() {
    return m('div.fill-width.margin-reset', [
      Q.components.guide[m.route.param('type')].ui[m.route.param('guide')].items.map(function(item) {
        return m('div.row', [
          m('div.column.small-8.padding-reset', [
            m('section.guide-bar', [
              m.component(item.guide)
            ])
          ]),
          m('div.column.small-8.padding-reset', [
            m('section.code-bar', [
              m('pre.padding-medium', [
                m('code.' + item.code.language, {
                  config: function(el) {
                     hljs.highlightBlock(el);
                  }
                }, item.code.template)
              ])
            ])
          ])
        ]);
      })
    ]);
  }
};