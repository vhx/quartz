vhxm.components.shared.select.ui.list.controller = function(opts, parent) {
  let self = this;

  self.parent = new vhxm.components.shared.select.controller(opts);
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function() {
    return self.model.items() && self.model.items().length > 0;
  };

  self.handleItemClick = function(event, item) {
    let selected = self.state.selected() || self.state.selected({});
    if (selected[item[opts.prop_map.key]]) {
      delete selected[item[opts.prop_map.key]];
    }
    else {
      selected[item[opts.prop_map.key]] = {
        value: item[opts.prop_map.value],
        label: item[opts.prop_map.label]
      };
    }

    self.state.selected(selected);
    self.state.isDropdownOpen(true);
    self.state.highlightIndex(-1);
    self.state.onSelect(self.state.selected());
    self.parent.scrollOptionsList(0);
  };
};
