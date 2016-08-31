vhxm.components.shared.modal.open = function() {
  vhxm.components.shared.modal.state.isOpen(true);
  m.redraw();
};

vhxm.components.shared.modal.close = function() {
  vhxm.components.shared.modal.state.isOpen(false);
  m.redraw();
};

vhxm.components.shared.modal.setTo = function(opts) {
  if (opts.isOpen && opts.isOpen.toString()) {
    vhxm.components.shared.modal.state.isOpen(opts.isOpen);
  }

  if (opts.single_action && opts.single_action.toString()) {
    vhxm.components.shared.modal.state.single_action(opts.single_action);
  }

  if (opts.has_actions && opts.has_actions.toString()) {
    vhxm.components.shared.modal.state.has_actions(opts.has_actions);
  }

  vhxm.components.shared.modal.state.size(opts.size || vhxm.components.shared.modal.state.size());
  vhxm.components.shared.modal.state.content.header(opts.header || vhxm.components.shared.modal.state.content.header());
  vhxm.components.shared.modal.state.content.body(opts.body || vhxm.components.shared.modal.state.content.body());

  if (opts.actions) {
    vhxm.components.shared.modal.state.content.actions().left = opts.actions.left || vhxm.components.shared.modal.state.content.actions().left;
    vhxm.components.shared.modal.state.content.actions().right = opts.actions.right || vhxm.components.shared.modal.state.content.actions().right;
    vhxm.components.shared.modal.state.content.actions().single = opts.actions.single || vhxm.components.shared.modal.state.content.actions().single;
    vhxm.components.shared.modal.state.content.actions().template = opts.actions.template || vhxm.components.shared.modal.state.content.actions().template;
    vhxm.components.shared.modal.state.content.actions().single_callback = opts.actions.single_callback || vhxm.components.shared.modal.state.content.actions().single_callback;
    vhxm.components.shared.modal.state.content.actions().right_callback = opts.actions.right_callback || vhxm.components.shared.modal.state.content.actions().right_callback;
    vhxm.components.shared.modal.state.content.actions().left_callback = opts.actions.left_callback || vhxm.components.shared.modal.state.content.actions().left_callback;
  }
};

$(document).on('keyup', function(ev) {
  if (ev.keyCode === 27 && vhxm.components.shared.modal.state.isOpen()) {
    vhxm.components.shared.modal.close();
  }
});

$(document).on('click', '.modal-bg', function() {
  vhxm.components.shared.modal.close();
});

$(window).on('resize', vhxm.utils.throttle(function() {
  var height = $(window).outerHeight();

  if (height <= 420 && height >= 260) {
    $('.modal').css('bottom', '10%');
  } else if (height <= 260) {
    $('.modal').css('bottom', '0');
  } else {
    $('.modal').css('bottom', '50%');
  }
}, 10));
