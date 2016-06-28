Q.components.guide.js.ui.autosuggest = {};
Q.components.guide.js.ui.autosuggest.container = {
  view: function(ctrl) {
    return m('section#guide--component-autosuggest', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Auto-suggest',
        intro: ''
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.autosuggest.ui.container, {
                data: m.prop(['This', 'That', 'Those', 'Some', 'More', 'Left', 'Right']),
                focusonready: false,
                reset: m.prop(false),
                onselect: function(selected) {},
                name: 'auto_suggest',
                placeholder: 'Enter name'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', type: 'string', required: true, description: m.trust('A unique key used as the name of the input field') },
          { name: 'data', type: 'm.prop', required: true, description: m.trust('A mithril prop (<span class="text--navy text--bold text-4">m.prop()</span>) containing an array of autosuggest items (words, phrases, etc).') },
          { name: 'focusonready', type: 'boolean', default_value: 'false', description: m.trust('If the input field should be focused on first render (e.g. say when the auto-suggest field is in a modal)') },
          { name: 'reset', type: 'm.prop', default_value: 'null', description: m.trust('A mithril prop (<span class="text--navy text--bold text-4">m.prop()</span>) that forces a reset of the selected value on the next render.') },
          { name: 'onselect', type: 'function', default_value: 'null', description: m.trust('An event handler that fires when an auto-suggest item is selected. The handler returns one argument, the <span class="text--navy text--bold text-4">name</span> of the selected item.') },
          { name: 'placeholder', type: 'string', default_value: 'null', description: m.trust('Input placeholder text to display.') }
        ]
      })
    ]);
  }
};