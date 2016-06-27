vhxm.components.shared.autosuggest.ui.list.controller = function(opts, parent) {
  var self = this;

  self.parent = new vhxm.components.shared.autosuggest.controller(opts);
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function() {
    return self.model.items() && self.model.items().length > 1;
  };

  self.handleItemClick = function(event, item) {
    self.state.selected(item);
    self.state.highlightIndex(-1);

    if (opts.onselect) {
      opts.onselect(self.state.selected(), true);
    }
    self.state.hasFocus(false);
    self.model.items(null);
    self.parent.scrollOptionsList(0);
  };

};
