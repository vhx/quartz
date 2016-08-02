Q.components.guide.js.ui.search_input = {};
Q.components.guide.js.ui.search_input.container = {
  view: function(ctrl) {
    return m('section#guide--search_input', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Search Input',
        intro: 'A text input for submitting a query and handling results. Initially created for usage within the select component.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div.form', [
              m.component(vhxm.components.shared.search_input.ui.container, {
                config: function(el) { },
                queryParam: true,
                callback: ctrl.searchCallback,
                search: function() { },
                placeholder: 'Search',
                oninput: function() { }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'search', type: 'function', required: true, description: m.trust('A request function for handling query submission (debounced at 300ms). Parameters available are <span class="text--bold text--navy text-4">query</span> and <span class="text--bold text--navy text-4">callback</span>.') },
          { name: 'config', type: 'function', default_value: 'null', description: 'Populates Mithril config attribute, which is called after element gets created.' },
          { name: 'placeholder', type: 'string', default_value: 'Search', description: 'Option to set the input\'s placeholder.' },
          { name: 'oninput', type: 'function', default_value: 'null', description: 'Event handler fired immediately on field input.' },
          { name: 'callback', type: 'function', default_value: 'null', description: 'A callback function that runs once fired from within the search request (above).' }
        ]
      })
    ]);
  }
};