Q.components.guide.js.ui.checkbox = {};
Q.components.guide.js.ui.checkbox.container = {
  view: function(ctrl) {
    return m('section#guide--component-checkbox', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Checkbox',
        intro: 'The Checkbox Component can be used for either the standard checkbox or toggle style checkbox.'
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'size', description: m.trust('The size of the checkbox. Can be <code class="text--yellow">small</code>, <code class="text--yellow">medium</code>, <code class="text--yellow">large</code> for type=standard and <code class="text--yellow">small</code> and <code class="text--yellow">medium</code> for type=toggle.') },
          { name: 'type', description: m.trust('The type of the checkbox style. Either <code class="text--yellow">standard</code> (the default style if type is not provided), or <code class="text--yellow">toggle</code>.') },
          { name: 'checked', description: 'The starting state of the checkbox, either checked (true) or unchecked (false).' },
          { name: 'name', description: 'A unique name for the checkbox used for the input name as well as the id + for attr pairing to ensure the checkbox works properly.' }
        ]
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div.form', [
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'standard',
                checked: true,
                size: 'medium'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'toggle',
                type: 'toggle',
                checked: true,
                size: 'medium'
              })
            ]);
          }
        }
      })
    ]);
  }
};