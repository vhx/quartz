vhxm.components.shared.tag.controller = function(opts) {
  let self = this;

  self.state = new vhxm.components.shared.tag.state();

  if (opts.onShow) {
    self.state.onShow = opts.onShow;
  }
  if (opts.onRemove) {
    self.state.onRemove = opts.onRemove;
  }
};