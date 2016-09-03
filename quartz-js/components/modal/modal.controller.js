vhxm.components.shared.modal.controller = function(opts) {
  let self = this;

  self.setupStateType = function(type, opts) {
    if (type && opts[type]) {
      $.each(opts[type], function(key, item) {
        if (key.match(/Callback/)) {
          vhxm.components.shared.modal.state[type][key] = item;
        } else {
          vhxm.components.shared.modal.state[type][key](item);
        }
      });
    }
  };

  self.setupState = function(opts) {
    $.each(opts, function(key, item) {
      if (!key.match(/content|actions/)) {
        vhxm.components.shared.modal.state[key](item);
      }
    });

    self.setupStateType('actions', opts);
    self.setupStateType('content', opts);
  };
};