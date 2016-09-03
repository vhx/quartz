Q.components.guide.styleguide.ui.loaders = {};

Q.components.guide.styleguide.ui.loaders.container = {
  view: function(ctrl) {
    return m('section#guide--style-loaders', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Loaders'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Core Colors',
        component: {
          view: function() {
            return m('div', [
              m('.row', [
                m('.column.small-thirds', [
                  m('span.block.loader-slate', {
                    style: { height: '60px' }
                  })
                ]),
                m('.column.small-thirds', [
                  m('span.block.loader-teal', {
                    style: { height: '60px' }
                  })
                ]),
                m('.column.small-thirds.bg-grid-dark', [
                  m('span.block.loader-white', {
                    style: { height: '60px' }
                  })
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('.row', [
                m('.column.small-4', [
                  m('span.block.loader-slate.loader--small', {
                    style: { height: '100px' }
                  })
                ]),
                m('.column.small-4', [
                  m('span.block.loader-slate.loader--medium', {
                    style: { height: '100px' }
                  })
                ]),
                m('.column.small-4', [
                  m('span.block.loader-slate.loader--large', {
                    style: { height: '100px' }
                  })
                ]),
                m('.column.small-4', [
                  m('span.block.loader-slate.loader--xlarge', {
                    style: { height: '100px' }
                  })
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Cover Types',
        component: {
          view: function() {
            return m('div.row', [
              m('div.pull.border.loader--hide.loader-slate.is-processing', {
                style: {
                  width: '150px',
                  height: '150px'
                }
              }),
              m('div.pull.padding-small.margin-left-medium.border.loader--transparent.loader-slate.is-processing', {
                style: {
                  width: '150px',
                  height: '150px'
                }
              }, [
                m('p', 'All child elements will be transparent when in the container is in a loading state.')
              ])
            ]);
          }
        }
      })
    ]);
  }
};