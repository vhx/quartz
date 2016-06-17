Q.components.guide.styleguide.ui.display = {};

Q.components.guide.styleguide.ui.display.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.guide.intro.ui.container, {
        title: 'Layout'
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Display',
        component: {
          view: function() {
            return m('.row.text-left', [
              m('span.text-center.margin-vert-medium.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'Block'),
              m('span.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block'),
              m('span.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block'),
              m('span.margin-vert-medium.padding-medium.inline.bg-gray-2 text-gray.text--small', 'Inline Block')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Lists',
        component: {
          view: function() {
            return m('div', [
              m('p.text--italic.margin-bottom-large', 'Note: Borders for demo purposes'),
              m('p.margin-bottom-medium', 'Inline list with floated elements and margins built in.'),
              m('ul.inline-list', [
                m('li.border', 'Item'),
                m('li.border', 'Item'),
                m('li.border', 'Item'),
              ]),
              m('p.margin-bottom-medium.margin-top-large', 'Inline list with inline-block elements with no padding or margins built-in.'),
              m('ul.inline-list.inline', [
                m('li.border', 'Item'),
                m('li.border', 'Item'),
                m('li.border', 'Item')
              ])
            ]);
          }
        }
      })
    ]);
  }
};