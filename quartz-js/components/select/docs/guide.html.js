Q.components.guide.js.ui.select = {};
Q.components.guide.js.ui.select.container = {
  view: function(ctrl) {
    return m('section#guide--component-filter', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Select',
        intro: 'A select dropdown with an option for built-in ajax search.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                search: function(query, callback) {
                  callback([
                    { id: 345, title: 'What is this', desc: 'Greatness'}
                  ]);
                }, // format is function(query, callback)
                selected: {
                  value: null,
                  label: 'Nothing Selected'
                },
                items: m.prop([{
                  id: 123,
                  title: 'Thing',
                  desc: 'Extra'
                }]),
                value_prop: 'id',
                label_prop: 'title',
                descriptor_prop: 'desc',
                name: 'select_id',
                callback: function(obj) {
                }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', type: 'string', required: true, description: m.trust('A unique key for the input name attribute.') },
          { name: 'callback', type: 'function', required: true, description: 'Callback function that is called after an option is chosen.' },
          { name: 'selected', type: 'object', required: true, description: 'Object with the id and value of the initial selected option.' },
          { name: 'items', type: 'array', required: true, description: m.trust('An array of objects to populate options. Each object must map to the defined <span class="text--bold text--navy text-4">label_prop</span> and <span class="text--bold text--navy text-4">value_prop</span>.') },
          { name: 'value_prop', type: 'string', required: true, description: 'Item key to look for in the provided items for the item value.' },
          { name: 'label_prop', type: 'string', required: true, description: 'Item key to look for in the provided items to display a label.' },
          { name: 'search', type: 'boolean', default_value: 'false', description: 'Toggles inclusion of search input' },
          { name: 'descriptor_prop', type: 'string', default_value: 'null', description: 'Supplemental item key to look for in the provided items to display a descriptor for each item.' }
        ]
      })
    ]);
  }
};
