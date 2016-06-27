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
          { name: 'data', description: m.trust('A mithril prop (<code class="text--yellow">m.prop()</code>) containing an array of autosuggest items (words, phrases, etc).') },
          { name: 'focusonready', description: m.trust('If the input field should be focused on first render (e.g. say when the auto-suggest field is in a modal)') },
          { name: 'reset', description: m.trust('A mithril prop (<code class="text--yellow">m.prop()</code>) that forces a reset of the selected value on the next render. ') },
          { name: 'onselect', description: m.trust('An event handler that fires when an auto-suggest item is selected. The handler returns one property, the <code class="text--yellow">name</code> of the selected item.') },
          { name: 'name', description: m.trust('The name of the input field') },
          { name: 'placeholder', description: m.trust('Input placeholder text to display.') }
        ]
      })
    ]);
  }
};