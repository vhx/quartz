Q.components.guide.js.ui.checkbox = {};
Q.components.guide.js.ui.checkbox.container = {
  view: function(ctrl) {
    return m('section#guide--component-checkbox', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Checkbox',
        intro: 'The Checkbox component can be used for either a standard checkbox or toggle style checkbox in various sizes.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div.form', [
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'standard',
                checked: true,
                size: 'medium'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'standard',
                checked: true,
                size: 'large'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'toggle-large',
                type: 'toggle',
                checked: true,
                size: 'small'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'toggle-medium',
                type: 'toggle',
                checked: true,
                size: 'medium'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', type: 'string', required: true, description: m.trust('A unique name for the checkbox used for the input name as well as the id + for attr pairing to ensure the checkbox works properly.') },
          { name: 'type', type: 'string', default_value: 'standard', description: m.trust('The type of the checkbox style. Either <span class="text--bold text--navy text-4">standard</span> (the default style if type is not provided), or <span class="text--bold text--navy text-4">toggle</span>.') },
          { name: 'checked', type: 'boolean', default_value: 'false', description: m.trust('The starting state of the checkbox, either checked (<span class="text--bold text--navy text-4">true</span>) or unchecked (<span class="text--bold text--navy text-4">false</span>).') },
          { name: 'size', type: 'string', default_value: 'medium', description: m.trust('The size of the checkbox. Can be <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">medium</span>, <span class="text--bold text--navy text-4">large</span> for <span class="text-4">type=standard</span> and <span class="text--bold text--navy text-4">small</span> and <span class="text--bold text--navy text-4">medium</span> for <span class="text-4">type=toggle</span>.') }
        ]
      })
    ]);
  }
};