vhxm.components.shared.sidebar.controller = function(opts) {
  let self = this;

  if (opts) {
    if (opts.onInit) {
      opts.onInit();
    }
    if (opts.loadedState) {
      vhxm.components.shared.sidebar.setLoadedState(opts.loadedState);
    }
    if (opts.template) {
      vhxm.components.shared.sidebar.setTemplate(opts.template);
    }
    if (opts.onOpen) {
      vhxm.components.shared.sidebar.state.onOpen = opts.onOpen;
    }
    if (opts.onClose) {
      vhxm.components.shared.sidebar.state.onClose = opts.onClose;
    }
  }

  self.animatorIn = function(elem, isInit) {
    if (vhxm.components.shared.sidebar.state.isOpen()) {
      $(elem).velocity({
        right: 0
      }, {
        duration: vhxm.components.shared.sidebar.state.skipTransition() ? 0 : 500,
        easing: [0.19, 1, 0.22, 1],
        complete: function complete() {
          $(document).on('keyup', self.esc);
          vhxm.components.shared.sidebar.state.onOpen();
          vhxm.components.shared.sidebar.state.skipTransition(true);
        }
      });
    }
  };

  self.animatorOut = function(elem, isInit) {
    $(elem).velocity({
      right: '-470'
    }, {
      duration: 500,
      easing: [0.19, 1, 0.22, 1],
      complete: function complete() {
        vhxm.components.shared.sidebar.state.onClose();
        $(document).off('keyup', self.esc);
        vhxm.components.shared.sidebar.state.skipTransition(false);
      }
    });
  };

  self.esc = function(event) {
    if (event.keyCode === 27) {
      m.startComputation();
      vhxm.components.shared.sidebar.toggle('close');
      m.endComputation();
    }
  };
};