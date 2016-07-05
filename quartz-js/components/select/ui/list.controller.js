vhxm.components.shared.select.ui.list.controller = function(opts, parent) {
  let self = this;

  self.parent = new vhxm.components.shared.select.controller(opts);
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function() {
    return self.model.items() && self.model.items().length > 1;
  };

  self.handleItemClick = function(event, item) {
    self.state.selected({
      value: item[opts.value_prop],
      label: item[opts.label_prop]
    });
    self.state.isDropdownOpen(false);
    self.state.highlightIndex(-1);
    if (opts.callback) {
      opts.callback(self.state.selected());
    }
    self.parent.scrollOptionsList(0);
  };

};
