'use strict';

Q.layouts.standard.ui.container = {
  controller: function() {
    return new Q.layouts.standard.controller({
      init: true
    });
  },
  view: function() {
    return m('div.row.fill-width.margin-reset', [
      m('div.column.small-8.padding-reset', [
        m('section.guide-bar', [
          // {{> UI.dynamic template=guide}}
        ])
      ]),
      m('div.column.small-8.padding-reset', [
        m('section.code-bar', [
        // {{> UI.dynamic template=code}}
        ])
      ])
    ]);
  }
};