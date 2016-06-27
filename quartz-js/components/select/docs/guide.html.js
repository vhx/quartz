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
          { name: 'search', description: 'boolean that toggles inclusion of search input' },
          { name: 'selected', description: 'object with the id and value of the chosen option' },
          { name: 'items', description: 'array of objects to populate options' },
          { name: 'value_prop', description: 'string of item key to use as option value' },
          { name: 'label_prop', description: 'string of item key to use as option label' },
          { name: 'descriptor_prop', description: 'string of supplemental item key to use within option UI (optional)' },
          { name: 'name', description: 'string key of input name' },
          { name: 'callback', description: 'function called after option is chosen' }
        ]
      })
    ]);
  }
};
