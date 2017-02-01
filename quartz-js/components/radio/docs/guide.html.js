Q.components.guide.js.ui.radio = {};
Q.components.guide.js.ui.radio.container = {
  view: function(ctrl) {
    return m('section#guide--component-radio', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Radio',
        intro: 'The Radio component is a stylized version of the the standard HTML form element. A stacked or horizontal (side-by-side) layout can be used.'
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
                    label: 'Option A',
                    value: 'a',
                    checked: true
                  },
                  {
                    label: 'Option B',
                    value: 'b'
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
                      label: 'Choice A',
                      value: 'a',
                      checked: true
                    },
                    {
                      label: 'Choice B',
                      value: 'b'
                    }
                  ]
                })
              ]),
              m('div.margin-vert-medium', [
                m.component(vhxm.components.shared.radio.ui.container, {
                  color: 'teal',
                  buttons: true,
                  name: 'stacked-button',
                  items: [
                    {
                      label: 'Choice A',
                      value: 'a',
                      checked: true
                    },
                    {
                      label: {
                        title: 'Choice B',
                        descriptor: 'Descriptor'
                      },
                      value: 'b'
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
          { name: 'name', required: true, type: 'string', description: m.trust('A unique name for the checkbox used for the input name as well as the id + for attr pairing to ensure the radio works properly.') },
          { name: 'items', type: 'array', required: true, description: m.trust('An array of objects for each radio item. Object must have a <span class="text--navy text--bold text-4">label</span> and <span class="text--navy text--bold text-4">value</span> properties. The <span class="text--navy text--bold text-4">checked</span> and <span class="text--navy text--bold text-4">template</span> properties are optional.') },
          { name: 'onchange', type: 'function', default_value: null, description: m.trust('Callback fired when the the radio value changes.') },
          { name: 'stacked', type: 'boolean', default_value: 'false', description: m.trust('Whether the radio elements are stacked vertically. Defaults to <span class="text--bold text--navy text-4">false</span> (horizontal layout).') },
          { name: 'color', type: 'string', default_value: 'teal', description: m.trust('The color of the radio buttons. Either <span class="text--navy text--bold text-4">teal</span> or <span class="text--navy text--bold text-4">gray</span>.') },
          { name: 'checkedByDefault', type: 'boolean', default_value: 'true', description: m.trust('Dictates whether a radio should be set as checked by default or not') },
          { name: 'api', type: 'Mithril prop', default_value: 'null', description: m.trust('When set, surfaces direct access to internal component state') },
        ]
      })
    ]);
  }
};
