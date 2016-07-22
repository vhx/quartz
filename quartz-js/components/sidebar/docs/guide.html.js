Q.components.guide.js.ui.sidebar = {};
Q.components.guide.js.ui.sidebar.container = {
  view: function(ctrl) {
    return m('section#guide--component-sidebar', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Sidebar',
        intro: 'A sidebar which slides out and contains content.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m('button.block.margin-bottom-medium.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.sidebar.setTemplate({
                    view: function() {
                      return m('h5.text-center.padding-medium.head-4', 'Sidebar');
                    }
                  });
                  vhxm.components.shared.sidebar.setLoadedState(m.prop(false));
                  vhxm.components.shared.sidebar.toggle('open');
                }
              }, 'Open sidebar (loading)'),
              m('button.block.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.sidebar.setTemplate({
                    view: function() {
                      return m('h5.text-center.padding-medium.head-4', 'Sidebar');
                    }
                  });
                  vhxm.components.shared.sidebar.setLoadedState(m.prop(true));
                  vhxm.components.shared.sidebar.toggle('open');
                }
              }, 'Open sidebar (loaded)')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'loadedState', type: 'function', description: 'Pass this a mithril prop (e.g. a model) that tracks the loaded state of the sidebar. If none is passed, a loader will be displayed.' },
          { name: 'template', type: 'function', description: 'Pass this a component, which is then rendered within the sidebar.' },
          { name: 'onOpen', type: 'function', description: 'Takes a callback function called once the sidebar has been opened.' },
          { name: 'onClose', type: 'function', description: 'Takes a callback function called once the sidebar has been closed.' },
          { name: 'toggle', type: 'api method', description: m.trust('Call directly on sidebar object <span class="text--bold text--navy text-4">vhxm.components.shared.sidebar.toggle()</span>. Accepts two params- the first being "open" or "closed" and the next being the subsequent route.') },
        ]
      })
    ]);
  }
};
