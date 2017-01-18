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
            return m('div', [
              m('p.margin-bottom-medium', m.trust('Hide all content when showing the loader by using the <code class="text--yellow">loader--hide</code> class. The container must have a width and height, either explicitly or from having content.')),
              m('div.margin-bottom-large.border.loader--hide.loader-slate.is-processing', {
                style: {
                  width: '150px',
                  height: '150px'
                }
              }),
              m('p.margin-bottom-medium', m.trust('Make content transparent when showing the loader by using the <code class="text--yellow">loader--transparent</code>. Must have a width and height, either explicitly or from having content')),
              m('div.margin-bottom-large.padding-small.border.loader--transparent.loader-slate.is-processing', {
                style: {
                  width: '150px',
                  height: '150px'
                }
              }, [
                m('p', 'All child elements will be transparent when in the container is in a loading state.')
              ]),
              m('p.margin-bottom-medium', m.trust('By default, the loader will be positioned in the center of the container when using cover types. In some cases when you have a large container (that extends beyond the window size), you may want it positioned offset from the top, and can use <code class="text--yellow">loader--offset</code>. This will offset the loader 125px from the top.')),
              m('div.margin-bottom-large.padding-small.border.loader--offset.loader--hide.loader-slate.is-processing', {
                style: {
                  width: '350px',
                  height: '350px'
                }
              })
            ]);
          }
        }
      })
    ]);
  }
};