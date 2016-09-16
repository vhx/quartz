vhxm.components.shared.modal.open = function() {
  vhxm.components.shared.modal.state.onOpen()();
  vhxm.components.shared.modal.state.isOpen(true);
  m.redraw();
};

vhxm.components.shared.modal.close = function() {
  vhxm.components.shared.modal.state.isOpen(false);
  m.redraw();
  vhxm.components.shared.modal.state.onClose()();
};

vhxm.components.shared.modal.setTo = function(opts) {
  let ctrl = new vhxm.components.shared.modal.controller();
  m.startComputation();
  ctrl.setupState(opts);
  m.endComputation();
};

$(document).on('keyup', function(ev) {
  if (ev.keyCode === 27 && vhxm.components.shared.modal.state.isOpen()) {
    vhxm.components.shared.modal.close();
  }
});
