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
          { name: 'config', description: 'function, optional. Populates Mithril config attribute, which is called after element gets created.' },
          { name: 'placeholder', description: 'string, default \'Search\', optional. Sets input\'s placeholder to something other than Search' },
          { name: 'oninput', description: 'function, optional. Function that runs immediately on field input' },
          { name: 'search', description: 'function that handles endpoint and query submission (debounced at 300ms)' },
          { name: 'callback', description: 'function that runs once search function is complete' }
        ]
      })
    ]);
  }
};