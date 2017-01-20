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

  self.formatLabelString = function(opts) {
    if (opts.label && opts.label_length && (opts.label.length > opts.label_length)) {
      return opts.label.substr(0, opts.label_length).trim() + '...';
    }

    return opts.label;
  };

};
