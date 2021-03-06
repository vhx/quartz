Q.fun = m.prop(false);
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
              m('.margin-right-medium.left',
                m.component(vhxm.components.shared.tag.ui.container, {
                  label: 'My Series: Complete Series Package',
                  label_length: 20,
                  isProcessing: Q.fun,
                  onShow: function() {
                    window.alert('show something');
                  },
                  onRemove: function() {
                    window.alert('remove something');
                  }
                })
              ),
              m.component(vhxm.components.shared.tag.ui.container, {
                label: 'Episode 1',
                isProcessing: Q.fun,
                onShow: function() {
                  window.alert('show something');
                },
                onRemove: function() {
                  window.alert('remove something');
                }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'label', type: 'string', default_value: 'Tag', description: m.trust('Text label of tag.') },
          { name: 'label_length', type: 'integer', default_value: '0 (unlimited)', description: m.trust('Length of string to truncate after.') },
          { name: 'isProcessing', type: 'prop', required: false, default_value: 'false', description: 'Whether or not in a processing state. Requires redraw upon changing.' },
          { name: 'onShow', type: 'function', default_value: 'null', description: m.trust('Fired when the tag is clicked.') },
          { name: 'onRemove', type: 'function', default_value: 'null', description: m.trust('Fired when the remove action is clicked.') },
        ]
      })
    ]);
  }
};
