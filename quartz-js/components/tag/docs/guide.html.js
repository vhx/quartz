Q.components.guide.js.ui.tag = {};
Q.components.guide.js.ui.tag.container = {
  view: function(ctrl) {
    return m('section#guide--component-tag', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Tags',
        intro: 'Tags or applied filters, having the appearance of a button but give you a hover state with a remove action.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.tag.ui.container, {
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [

        ]
      })
    ]);
  }
};
