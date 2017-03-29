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
                placeholder: 'Select Option...',
                selected: null,
                position: m.prop('top'),
                caret: 'center',
                items: m.prop([
                  {
                    id: 1,
                    title: 'Item #1'
                  },
                  {
                    id: 2,
                    title: 'Item #2'
                  }
                ]),
                remove: 'Remove Trailer',
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id'
                },
                onSelect: function(data) {}
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example (w/ search)',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                search: function(query, callback) {
                  callback([
                    {
                      id: 3,
                      title: 'Item #3',
                      detail: 'Descriptor',
                    }
                  ]);
                },
                placeholder: 'Nothing selected',
                selected: null,
                caret: 'right',
                items: m.prop([
                  {
                    id: 1,
                    title: 'Item #1',
                    detail: 'Descriptor',
                  },
                  {
                    id: 2,
                    title: 'Item #2',
                    detail: 'Descriptor',
                  }
                ]),
                api: m.prop(),
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id',
                  descriptor: 'detail'
                },
                onSelect: function(data) {}
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example (w/ search, custom trigger, multi-select & media)',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                trigger: m('a', { href: '#', }, '+ Add Video'),
                search: function(query, callback) {
                  callback([
                    {
                      id: 3,
                      title: 'Media Item #3',
                      detail: 'Search Reesult',
                      img_src: 'https://placekitten.com/g/300/200'
                    }
                  ]);
                },
                caret: 'left',
                multiselect: true,
                type: 'media',
                placeholder: 'Nothing selected',
                selected: null,
                action: 'Create new category',
                label_length: 40,
                items: m.prop([
                  {
                    id: 1,
                    title: 'Media Item #1: The First Media Item Listed',
                    detail: 'Item detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 2,
                    title: 'Media Item #2: Numero Dos',
                    detail: 'Item #2 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 3,
                    title: 'Media Item #3',
                    detail: 'Item #3 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 4,
                    title: 'Media Item #4',
                    detail: 'Item #4 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 5,
                    title: 'Media Item #5',
                    detail: 'Item #5 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 6,
                    title: 'Media Item #6',
                    detail: 'Item #6 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  }
                ]),
                api: m.prop(),
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id',
                  descriptor: 'detail',
                  image: 'img_src'
                },
                caret_position: 'left',
                onAction: function(done) {
                  setTimeout(function() {
                    window.alert('Create callback');
                    done();
                  }, 1000);
                },
                onSelect: function() {}
              }),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'items', type: 'array', required: true, description: m.trust('A mithril prop (m.prop()) containing an array of objects to populate options. Each object must map to the defined <span class="text--bold text--navy text-4">prop_map.label</span> and <span class="text--bold text--navy text-4">prop_map.value</span>.') },
          { name: 'type', type: 'string', default_value: 'standard', description: m.trust('Sets UI of the items in the dropdown list. Either <span class="text--bold text--navy text-4">standard</span> OR <span class="text--bold text--navy text-4">media</span>. The default is <span class="text--bold text--navy text-4">standard</span>.') },
          { name: 'multiselect', type: 'boolean', required: false, default_value: 'false', description: 'Set whether the dropdown allows for selected multiple values.' },
          { name: 'action', type: 'boolean', default_value: 'false', description: 'Whether to show an action button or not, at the bottom of the dropdown. If turned on, it will appear upon typing a value in the search input.' },
          { name: 'trigger', type: 'mithril element', default_value: 'null', required: false, description: 'Trigger element that will replace default button dropdown' },
          { name: 'onSelect', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called after an option is chosen.' },
          { name: 'onAction', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called after the action button is clicked.' },
          { name: 'onClose', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called when the select dropdown closes.' },
          { name: 'isProcessing', type: 'prop', required: false, default_value: '[]', description: 'An array of values for any items that are in a processing state. Add or remove values to trigger the processing state of an item.' },
          { name: 'selected', type: 'object', required: false, default_value: 'null', description: 'Object with selected values for initializing the dropdown pre-selected. Each value is an object with a label and value.' },
          { name: 'placeholder', type: 'string', required: false, default_value: 'Select...', description: 'Text displayed in dropdown when no option is selected' },
          { name: 'caret', type: 'string', default_value: 'right', description: m.trust('Specify the position of the caret. Either <span class="text--bold text--navy text-4">left</span>, <span class="text--bold text--navy text-4">center</span>, or <span class="text--bold text--navy text-4">right</span>.') },
          { name: 'offset', type: 'integer', default_value: '40', description: m.trust('Specify the offset of the dropdown from the trigger.') },
          { name: 'position', type: 'prop', default_value: 'bottom', description: m.trust('Specify the position of the dropdown. Either <span class="text--bold text--navy text-4">top</span> or <span class="text--bold text--navy text-4">bottom</span>.') },
          { name: 'label_length', type: 'integer', default_value: '0 (unlimited)', description: m.trust('(Media Item only) Length of string to truncate after.') },
          { name: 'prop_map.key', type: 'string', required: true, description: 'The unique identifier (key) for each item selected (the selected object). The selected object will be returned in the onSelect callback method.' },
          { name: 'prop_map.value', type: 'string', required: true, description: 'Item key to look for in the provided items for the item value.' },
          { name: 'prop_map.label', type: 'string', required: true, description: 'Item key to look for in the provided items to display a label.' },
          { name: 'prop_map.search', type: 'boolean', default_value: 'false', description: 'Toggles inclusion of search input.' },
          { name: 'prop_map.image', type: 'string', default_value: 'null', description: m.trust('Item key to display an image for each item when using type <span class="text--bold text--navy text-4">media</span>.') },
          { name: 'prop_map.descriptor', type: 'string', default_value: 'null', description: 'Item key to display a descriptor for each item.' },
        ]
      })
    ]);
  }
};
