Q.components.guide.js.ui.filter = {};
Q.components.guide.js.ui.filter.container = {
  view: function(ctrl) {
    return m('section#guide--component-filter', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Filter',
        intro: 'The Filter component can be use for sections that require ways to request smaller subsets of content for a given resource. An example is our Customers section where we have a table of customers. You may want to only see customers from a specific location, or who purchased a specific product.'
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
          { name: 'filters', type: 'array', required: true, description: m.trust('An array of filters to include. Each filter must be of a different type. Strings for predefined filters (<span class="text--bold text--navy text-4">date</span>) or objects for custom filters. Custom filters must have the properties <span class="text--bold text--navy text-4">title</span>, <span class="text--bold text--navy text-4">type</span>, and either <span class="text--bold text--navy text-4">template</span> (a Mithril view function) or <span class="text--bold text--navy text-4">data</span> (an array of objects). Each item in a <span class="text--bold text--navy text-4">data</span> array custom filter, must have a <span class="text-4 text--bold text--navy">label</span>, <span class="text-4 text--bold text--navy">value</span>, and optional <span class="text-4 text--bold text--navy">checked</span> property.') },
          { name: 'label', type: 'string', default_value: 'null', description: 'A label to appear to the right of the filter, that shows when no filters are selected.' },
          { name: 'api', type: 'variable', default_value: 'null', description: m.trust('A reference variable that will make available the reactive <span class="text--bold text--navy text-4">state</span> and <span class="text--bold text--navy text-4">model</span> of the component. This will be required if you are passing any custom filters.') }
        ]
      })
    ]);
  }
};