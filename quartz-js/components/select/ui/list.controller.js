vhxm.components.shared.select.ui.list.controller = function(opts, parent) {
  let self = this;

  self.parent = parent;
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function() {
    return self.model.items() && self.model.items().length > 0;
  };

  self.handleItemClick = function(event, item) {
    self.parent.selectItem(item);
  };
};
