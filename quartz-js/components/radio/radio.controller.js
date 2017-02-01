vhxm.components.shared.radio.controller = function(opts) {
  let self = this;
  opts = opts || {};

  if (typeof opts.checkedByDefault === 'undefined') {
    opts.checkedByDefault = true;
  }
  self.state = new vhxm.components.shared.radio.state();

  opts.items.map(function(item){
    if (item.checked) {
      self.state.isChecked(item.value);
    }
  });

  if (opts.checkedByDefault && !self.state.isChecked()) {
    self.state.isChecked(opts.items[0].value);
  }

  if (opts.api) {
    opts.api(self);
  }
};
