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
              m('button', {
                onclick: function(event) {
                  vhxm.components.shared.sidebar.state.model({hi: "hello"});
                  vhxm.components.shared.sidebar.toggleSidebar('open');
                }
              }, 'click me')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'toggleSidebar', type: 'function', required: true, description: 'Accepts two params- the first being "open" or "closed" and the next being the subsequent route.' },
          { name: 'setTemplate', type: 'function', required: true, description: 'Pass this a component, which is then rendered within the sidebar.' },
          { name: 'setModel', type: 'function', required: true, description: 'Pass this a model for your top-level component. If none is passed, a loader will be displayed.' },
          { name: 'onAnimateOut', type: 'function', required: true, description: 'Takes a callback function called once the sidebar has been opened.' },
          { name: 'onAnimatein', type: 'function', required: true, description: 'Takes a callback function called once the sidebar has been closed.' },
        ]
      })
    ]);
  }
};
