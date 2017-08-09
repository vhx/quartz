Q.components.guide.styleguide.ui.display = {};

Q.components.guide.styleguide.ui.display.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Layout'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Display',
        component: {
          view: function() {
            return m('.row.text-left', [
              m('span.text-center.margin-vert-medium.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'Block'),
              m('span.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block'),
              m('span.radius.margin-vert-medium.padding-medium.block.bg-gray-2.text-gray.text--small', 'Rounded corners (3px radius)'),
              m('span.shadow--gray.margin-vert-medium.padding-medium.block.bg-gray-2.text-gray.text--small', 'Box shadow'),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Alignment',
        component: {
          view: function() {
            return m('.row.text-left', [
              m('div.text-left', [
                m('div.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block Left'),
              ]),
              m('div.text-center', [
                m('div.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block Center'),
              ]),
              m('div.text-right', [
                m('div.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block Right'),
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Arrows',
        component: {
          view: function() {
            return m('div', [
              m('p.margin-bottom-small', 'Colors can be set via the background class, which includes:'),
              m('p.margin-bottom-medium', m.trust(
              '<code class="block text--yellow">bg-navy</code>' +
              '<code class="block text--yellow">bg-white</code>' +
              '<code class="block text--yellow">bg-gray-1</code>' +
              '<code class="block text--yellow">bg-gray-2</code>' +
              '<code class="block text--yellow">bg-red</code>' +
              '<code class="block text--yellow">bg-teal-1</code>',
              '<code class="block text--yellow">bg-teal-2</code>')),
              m('div.row', [
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-top-left.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Top left')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-top-middle.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Top middle')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-top-right.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Top right')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-right-top.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Right top')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-right-middle.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Right middle')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-right-bottom.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Right bottom')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-bottom-left.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Bottom left')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-bottom-middle.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Bottom middle')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-bottom-right.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Bottom right')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-left-top.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Left top')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-left-middle.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Left middle')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-left-bottom.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Left bottom')
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
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
              ]),
              m('p.margin-bottom-medium.margin-top-large', 'Inline list striped rows.'),
              m('ul.striped', [
                m('li', 'Item'),
                m('li', 'Item'),
                m('li', 'Item'),
              ]),
            ]);
          }
        }
      })
    ]);
  }
};