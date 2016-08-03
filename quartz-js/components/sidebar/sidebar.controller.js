vhxm.components.shared.sidebar.controller = function(opts) {
  let self = this;
  self.opts = opts;

  if (self.opts) {
    if (self.opts.onInit) {
      self.opts.onInit();
    }
    if (self.opts.loadedState) {
      vhxm.components.shared.sidebar.setLoadedState(self.opts.loadedState);
    }
    if (opts.template) {
      vhxm.components.shared.sidebar.setTemplate(self.opts.template);
    }
    if (opts.onOpen) {
      vhxm.components.shared.sidebar.state.onOpen = self.opts.onOpen;
    }
    if (opts.onClose) {
      vhxm.components.shared.sidebar.state.onClose = self.opts.onClose;
    }
  }

  self.documentClickHandler = function(event) {

    let is_sidebar = !$(event.target).closest('body').length ||
                      $(event.target).hasClass('c-sidebar') ||
                      $(event.target).closest('[data-flash], tr.is-clickable, .c-sidebar' + (self.opts && self.opts.clickBlackList ? ', ' + self.opts.clickBlackList : '')).length;

    if (!is_sidebar && vhxm.components.shared.sidebar.state.isOpen()) {
      vhxm.components.shared.sidebar.toggle('close');
    }
  };

  self.animatorIn = function(elem, isInit) {
    let callback = function() {
      $(document).on('keyup', self.esc);
      $(document).on('click', self.documentClickHandler);
      vhxm.components.shared.sidebar.state.onOpen();
      vhxm.components.shared.sidebar.state.skipTransition(true);
    };

    if (vhxm.components.shared.sidebar.state.isOpen()) {
      if (vhxm.components.shared.sidebar.state.skipTransition()) {
        elem.style.right = '0px';
        callback();
      } else {
        $(elem).velocity({
          right: 0
        }, {
          duration: vhxm.components.shared.sidebar.state.skipTransition() ? 0 : 500,
          easing: [0.19, 1, 0.22, 1],
          complete: callback
        });
      }
    }
  };

  self.animatorOut = function(elem, isInit) {
    $(elem).velocity({
      right: '-470'
    }, {
      duration: 500,
      easing: [0.19, 1, 0.22, 1],
      complete: function() {
        vhxm.components.shared.sidebar.state.onClose();
        $(document).off('keyup', self.esc);
        $(document).off('click', self.documentClickHandler);
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