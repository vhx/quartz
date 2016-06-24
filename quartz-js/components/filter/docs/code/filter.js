// Example Filter Component

m.component(vhxm.components.shared.filter.container, {
  label: 'Customize this table',
  api: vhxm.component.name.state.filterApi,
  filters: [
    'date',
    'location',
    {
      type: 'test',
      title: 'Test',
      template: {
        view: function() {
          // custom filter template
        }
      }
    }
  ]
});