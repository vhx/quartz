Q.components.guide.js.ui.radio = {};
Q.components.guide.js.ui.radio.container = {
  view: function(ctrl) {
    return m('section#guide--component-radio', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Radio',
        intro: 'The Radio Component can be used either stacked or side-by-side radio form elements.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div.form', [
              m.component(vhxm.components.shared.radio.ui.container, {
                color: 'gray',
                name: 'horz-gray',
                items: [
                  {
                    label: 'This',
                    value: 'this',
                    checked: true
                  },
                  {
                    label: 'That',
                    value: 'that'
                  }
                ]
              }),
              m('div.margin-vert-medium', [
                m.component(vhxm.components.shared.radio.ui.container, {
                  color: 'teal',
                  name: 'stacked-teal',
                  stacked: true,
                  items: [
                    {
                      label: 'Here',
                      value: 'here',
                      checked: true
                    },
                    {
                      label: 'There',
                      value: 'there'
                    }
                  ]
                })
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', description: 'A unique name for the checkbox used for the input name as well as the id + for attr pairing to ensure the radio works properly.' },
          { name: 'stacked', description: 'Whether the radio elements are stacked vertically. Defaults to false (horizontal layout).' },
          { name: 'color', description: m.trust('The color of the radio. Either <code class="text--yellow">teal</code> or <code class="text--yellow">gray</code>.') },
          { name: 'items', description: m.trust('An array of objects for each radio item. Object must have <code class="text--yellow">label</code> and <code class="text--yellow">value</code> properties. The <code class="text--yellow">checked</code> property is optional.') }
        ]
      })
    ]);
  }
};