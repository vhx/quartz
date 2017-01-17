Q.components.guide.styleguide.ui.checkbox = {};

Q.components.guide.styleguide.ui.checkbox.container = {
  view: function(ctrl) {
    return m('section#guide--style-checkbox', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Checkbox'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Standard Checkbox',
        component: {
          view: function() {
            return m('form.form', [
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'small',
                name: 'small-standard',
                checked: true
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'medium',
                checked: true,
                name: 'medium-standard'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'large',
                checked: true,
                name: 'large-standard'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Toggle Checkbox',
        component: {
          view: function() {
            return m('form.form', [
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'small',
                type: 'toggle',
                checked: true,
                name: 'small-toggle'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'medium',
                type: 'toggle',
                checked: true,
                name: 'medium-toggle'
              })
            ]);
          }
        }
      })
    ]);
  }
};

