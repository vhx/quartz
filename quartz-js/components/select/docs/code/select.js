// Example Select Component

m.component(vhxm.components.shared.select.ui.container, {
  search: mySearch(query, callback),
  selected: [
    {
      id: 1,
      title: 'Title'
    }
  ],
  items: vhxm.models.section.items,
  prop_map: {
    value: 'id',
    label: 'title',
    descriptor: 'details'
  },
  callback: function(obj) {
    vhxm.models.section.chosen_item = { id: obj.value };
  }
});

