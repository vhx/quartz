Q.components.guide.styleguide.ui.grid = {};

Q.components.guide.styleguide.ui.grid.container = {
  view: function(ctrl) {
    return m('section#guide--style-grid', [
      m.component(Q.components.shared.guide.intro.ui.container, {
        title: 'Grid'
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Basic Setup',
        component: {
          controller: function() {
            this.items = [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16];
          },
          view: function(ctrl) {
            return m('div.row.text-center', [
              ctrl.items.map(function(item) {
                return m('div.column.small-1', [
                  m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', item)
                ]);
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Responsive',
        component: {
          view: function() {
            return m('div.row.text-center', [
              m('.column.medium-6.large-4', [
                m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 1)
              ]),
              m('.column.medium-6.large-4', [
                m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 2)
              ]),
              m('.column.medium-4.large-4', [
                m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 3)
              ]),
              m('.column.show-for-large-up.large-4', [
                m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 4)
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Offsets',
        component: {
          view: function() {
            return m('div', [
              m('p.text--italic', 'You can use any of the following classes:'),
              m('ul', [
                m('li', [
                  m('code.text--yellow', '[size]-centered')
                ]),
                m('li', [
                  m('code.text--yellow', '[size]-offset-[columns]')
                ])
              ]),
              m('div.margin-vert-medium', [
                m('div.row text-center', [
                  m('div.column small-centered small-12', [
                    m('div.column small-16 medium-6', [
                      m('span.padding-vert-large block bg-gray-2 text-gray text--small', 1)
                    ]),
                    m('div.column small-16 medium-6', [
                      m('span.padding-vert-large block bg-gray-2 text-gray text--small', 2)
                    ]),
                    m('div.column small-16 medium-4', [
                      m('span.padding-vert-large block bg-gray-2 text-gray text--small', 3)
                    ])
                  ])
                ])
              ]),
              m('div.margin-vert-medium', [
                m('div.row text-center', [
                  m('div.column small-16 medium-offset-4 medium-8', [
                    m('span.padding-vert-large block bg-gray-2 text-gray text--small', 1)
                  ]),
                  m('div.column small-16 medium-4', [
                    m('span.padding-vert-large block bg-gray-2 text-gray text--small', 2)
                  ])
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Hide and Show',
        component: {
          view: function() {
            return m('div', [
              m('p.text--italic', 'You can use any of the following classes:'),
              m('ul', [
                m('li', [
                  m('code.text--yellow', 'show-for-[size]')
                ]),
                m('li', [
                  m('code.text--yellow', 'hide-for-[size]')
                ]),
                m('li', [
                  m('code.text--yellow', 'show-for-[size]-only')
                ]),
                m('li', [
                  m('code.text--yellow', 'hide-for-[size]-only')
                ]),
                m('li', [
                  m('code.text--yellow', 'show-for-[size]-up')
                ]),
                m('li', [
                  m('code.text--yellow', 'hide-for-[size]-down')
                ]),
                m('li', [
                  m('code.text--yellow', 'show-for-touch')
                ]),
                m('li', [
                  m('code.text--yellow', 'hide-for-touch')
                ])
              ]),
              m('div.margin-vert-medium', [
                m('div.row.text-center', [
                  m('div.column.small-16.show-for-small-only', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for small')
                  ]),
                  m('div.column medium-16 show-for-medium-only', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for medium')
                  ]),
                  m('div.column.large-16.show-for-large-only', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for large')
                  ])
                ])
              ]),
              m('div.margin-vert-medium', [
                m('div.row.text-center', [
                  m('div.column.hide-for-small-only.medium-4', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for medium up')
                  ]),
                  m('div.column small-16 medium-4', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for all')
                  ]),
                  m('div.column small-16 medium-8 large-4', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for all')
                  ]),
                  m('div.column.large-4.show-for-large-up', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for large up')
                  ])
                ])
              ])
            ]);
          }
        }
      })
    ]);
  }
};