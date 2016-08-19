vhxm.components.shared.radio.controller = function(opts) {
  let self = this;

  self.state = new vhxm.components.shared.radio.state();

  opts.items.map(function(item){
    if (item.checked) {
      self.state.isChecked(item.value);
    }
  });

  if (!self.state.isChecked()) {
    self.state.isChecked(opts.items[0].value);
  }
};
