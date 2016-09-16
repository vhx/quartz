vhxm.components.shared.select.ui.list.controller = function(opts, parent) {
  let self = this;

  self.parent = new vhxm.components.shared.select.controller(opts);
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function() {
    return self.model.items() && self.model.items().length > 1;
  };

  self.handleItemClick = function(event, item) {
    let selected = self.state.selected() || self.state.selected({});
    if (selected[item[opts.key_prop]]) {
      delete selected[item[opts.key_prop]];
    }
    else {
      selected[item[opts.key_prop]] = {
        value: item[opts.value_prop],
        label: item[opts.label_prop]
      };
    }

    self.state.selected(selected);
    self.state.isDropdownOpen(true);
    self.state.highlightIndex(-1);
    self.state.onSelect(self.state.selected());
    self.parent.scrollOptionsList(0);
  };

};
