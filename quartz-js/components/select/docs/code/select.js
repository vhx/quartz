// Example Select Component

m.component(vhxm.components.shared.select.ui.container, {
  search: mySearch(query, callback),
  selected: {
    value: null,
    label: 'Nothing Selected'
  },
  items: vhxm.models.section.items,
  value_prop: 'id',
  label_prop: 'title',
  descriptor_prop: 'details',
  name: 'selected_id',
  callback: function(obj) {
    vhxm.models.section.chosen_item = { id: obj.value };
  }
});

