vhxm.components.shared.sidebar.controller = function() {
  var self = this;

  self.animatorIn = function(elem, isInit) {
    if (!isInit) {
      if (vhxm.components.shared.sidebar.state.isOpen()) {
        $(elem).velocity({
          right: 0,
        }, {
          duration: 500,
          easing: [ 0.19, 1, 0.22, 1 ],
          complete: function() {
            if (vhxm.components.shared.sidebar.state.animate_in_cb) {
              vhxm.components.shared.sidebar.state.onAnimateIn();
            }
          }
        });
      }
    }
  };

  self.animatorOut = function(elem, isInit) {
    if (!isInit) {
      elem.onclick = function(ev) {
        ev.preventDefault();
        vhxm.components.shared.sidebar.state.isOpen(false);

        $('.c-sidebar').velocity({
          right: '-470'
        }, {
          duration: 500,
          easing: [ 0.19, 1, 0.22, 1 ],
          complete: function() {
            if (vhxm.components.shared.sidebar.state.animate_out_cb) {
              vhxm.components.shared.sidebar.state.onAnimateOut();
            }
          }
        });
      }
    }
  };

};
