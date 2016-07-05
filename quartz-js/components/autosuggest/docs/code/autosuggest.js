m.component(vhxm.components.shared.autosuggest.ui.container, {
  name: 'auto_suggest',
  placeholder: 'Enter name',
  data: m.prop(['This', 'That', 'Those', 'Some', 'More', 'Left', 'Right']),
  focusonready: true,
  reset: m.prop(false),
  onselect: function(selected) {
    // handle event
  }
});