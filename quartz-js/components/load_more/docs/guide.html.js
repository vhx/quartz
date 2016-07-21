Q.components.guide.js.ui.load_more = {};
Q.components.guide.js.ui.load_more.container = {
  view: function(ctrl) {
    return m('section#guide--search_input', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Load More',
        intro: 'An element mainly for paginated data. When scrolled into viewport, or clicked on, triggers a user-defined function.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function(ctrl, opts) {
            return m('div', [
              m.component(vhxm.components.shared.load_more.ui.container, {
                onscroll: false,
                action: function(callback) {
                  alert('Load More!');
                  setTimeout(function() {
                    callback();
                    m.redraw();
                  }, 1000);
                }
              })
            ]);
          }
        }
      })
    ]);
  }
};