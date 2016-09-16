Q.api = m.prop();
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
                },
                placeholder: 'Nothing selected',
                selected: null,
                items: m.prop([
                  {
                    id: 1,
                    title: 'Media Item #1',
                    detail: 'Item detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 2,
                    title: 'Media Item #2',
                    detail: 'Item #2 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  }
                ]),
                api: Q.api,
                key_prop: 'title',
                value_prop: 'id',
                label_prop: 'title',
                descriptor_prop: 'detail',
                img_prop: 'img_src',
                item_type: 'media',
                footer_action: 'Create new Category',
                onCreate: function() {

                },
                onSelect: function(obj) {
                  console.log(obj);
                }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'key_prop', type: 'string', required: true, description: 'The unique identifier (key) for each item selected (the selected object) that is returned in the onSelected callback method.' },
          { name: 'onSelect', type: 'function', required: true, description: 'Callback function that is called after an option is chosen.' },
          { name: 'selected', type: 'object', required: true, description: 'Object with the id and value of the initial selected option.' },
          { name: 'items', type: 'array', required: true, description: m.trust('An array of objects to populate options. Each object must map to the defined <span class="text--bold text--navy text-4">label_prop</span> and <span class="text--bold text--navy text-4">value_prop</span>.') },
          { name: 'value_prop', type: 'string', required: true, description: 'Item key to look for in the provided items for the item value.' },
          { name: 'label_prop', type: 'string', required: true, description: 'Item key to look for in the provided items to display a label.' },
          { name: 'search', type: 'boolean', default_value: 'false', description: 'Toggles inclusion of search input' },
          { name: 'descriptor_prop', type: 'string', default_value: 'null', description: 'Supplemental item key to look for in the provided items to display a descriptor for each item.' },
          { name: 'item_type', type: 'string', default_value: 'standard', description: 'standard OR media - sets UI of item in dropdown list' },
          { name: 'footer_action', type: 'boolean', default_value: 'false', description: 'Currently for Collections - show a Create New Category action at the bottom of dropdown.' }
        ]
      })
    ]);
  }
};
