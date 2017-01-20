vhxm.components.shared.tag.controller = function(opts) {
  let self = this;

  self.state = new vhxm.components.shared.tag.state();

  if (opts.isProcessing) {
    self.state.isProcessing = opts.isProcessing;
  }
  if (opts.onShow) {
    self.state.onShow = opts.onShow;
  }
  if (opts.onRemove) {
    self.state.onRemove = opts.onRemove;
  }

  self.formatLabelString = function(opts) {
    if (opts.label && opts.label_length && (opts.label.length > opts.label_length)) {
      return opts.label.substr(0, opts.label_length).trim() + '...';
    }

    return opts.label;
  };
};
