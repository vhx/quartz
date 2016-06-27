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
                  {
                    type: 'location',
                    title: 'Location',
                    data: m.prop([
                      { value: 'US', label: 'United States', checked: false },
                      { value: 'AF', label: 'Afghanistan', checked: false },
                      { value: 'AX', label: 'Aland Islands', checked: false },
                      { value: 'AL', label: 'Albania', checked: false },
                      { value: 'DZ', label: 'Algeria', checked: false },
                      { value: 'AS', label: 'American Samoa', checked: false },
                      { value: 'AD', label: 'Andorra', checked: false },
                      { value: 'AO', label: 'Angola', checked: false },
                      { value: 'AI', label: 'Anguilla', checked: false },
                      { value: 'AQ', label: 'Antarctica', checked: false },
                      { value: 'AG', label: 'Antigua and Barbuda', checked: false },
                      { value: 'AR', label: 'Argentina', checked: false },
                      { value: 'AM', label: 'Armenia', checked: false },
                      { value: 'AW', label: 'Aruba', checked: false },
                      { value: 'AU', label: 'Australia', checked: false },
                      { value: 'AT', label: 'Austria', checked: false },
                      { value: 'AZ', label: 'Azerbaijan', checked: false }
                    ])
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
          { name: 'filters', description: m.trust('An array of filters to include. Each filter must be of a different type. Strings for predefined filters (<code class="text--yellow">date</code>) or objecsts (with the properties <code class="text--yellow">title</code>, <code class="text--yellow">type</code>, and either <code class="text--yellow">template</code> (a view function) or <code class="text--yellow">data</code> (an array)) for customer filters.') },
          { name: 'api', description: 'A reference variable that will make available the state and model of the component.' }
        ]
      })
    ]);
  }
};