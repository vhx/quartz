'use strict';

Q.layouts.standard.ui.container = {
  view: function() {
    let sidebar;
    if (m.route.param('type') === 'js' && m.route.param('guide') === 'components') {
      sidebar = m.component(vhxm.components.shared.sidebar.ui.container);
    }

    return m('div.fill-width.margin-reset.container', [
      sidebar ? sidebar : '',
      Q.components.route[m.route.param('type')].ui[m.route.param('guide')].items.map(function(item) {
        return m('div.row' + (item.hash ? '#' + item.hash : ''), [
          m('div.column.small-8.padding-reset', [
            m('section.guide-bar', [
              m.component(item.guide)
            ])
          ]),
          m('div.column.small-8.padding-reset', [
            m('section.code-bar', [
              item.code ?
              m('pre.padding-medium', [
                m('code.hljs.' + item.code.language, m.trust(item.code.template))
              ]) : ''
            ])
          ])
        ]);
      })
    ]);
  }
};
