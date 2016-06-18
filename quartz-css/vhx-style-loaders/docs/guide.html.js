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
              m('span.loader-slate'),
              m('span.loader-teal'),
              m('span.bg-grid-dark.inline', [
                m('span.loader-white')
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
              m('span.loader-slate.loader--small'),
              m('span.loader-slate.loader--medium'),
              m('span.loader-slate.loader--large'),
              m('span.loader-slate.loader--xlarge')
            ]);
          }
        }
      })
    ]);
  }
};