Q.components.guide.js.ui.filter = {};
Q.components.guide.js.ui.filter.container = {
  view: function(ctrl) {
    return m('section#guide--component-filter', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Filter',
        intro: 'The Filter Component can be use for sections that require ways to request smaller subsets of content from a given resource. An example, is our Customers section where we have a table of customers. You may want to only see customers from a specific location, or who purchased a specific product.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.filter.ui.container, {
                label: 'Customize this table',
                // api: m.prop(),
                filters: [
                  'date',
                  'location',
                  {
                    type: 'test',
                    title: 'Test',
                    template: {
                      view: function() {
                        return m('div');
                      }
                    }
                  }
                ]
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'label', description: 'A label to appear to the right of the filter, that shows when no filters are selected.' },
          { name: 'filters', description: m.trust('An array of filters to include. Strings for predefined filters (<code class="text--yellow">date</code>, <code class="text--yellow">location</code>) or objecsts (with the properties <code class="text--yellow">title</code>, <code class="text--yellow">template</code>, <code class="text--yellow">type</code>) for customer filters.') },
          { name: 'api', description: 'A reference variable that will make available the state and model of the component.' }
        ]
      })
    ]);
  }
};