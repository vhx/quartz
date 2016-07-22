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
          { name: 'toggleSidebar', type: 'function', description: 'Accepts two params- the first being "open" or "closed" and the next being the subsequent route.' },
          { name: 'setTemplate', type: 'function', description: 'Pass this a component, which is then rendered within the sidebar.' },
          { name: 'setModel', type: 'function', description: 'Pass this a model for your top-level component. If none is passed, a loader will be displayed.' },
          { name: 'onAnimateOut', type: 'function', description: 'Takes a callback function called once the sidebar has been opened.' },
          { name: 'onAnimatein', type: 'function', description: 'Takes a callback function called once the sidebar has been closed.' },
        ]
      })
    ]);
  }
};
