vhxm.components.shared.modal.state = {
  isOpen: m.prop(false),
  size: m.prop('medium'),
  hasActions: m.prop(2),
  onOpen: m.prop(function() {}),
  onClose: m.prop(function() {}),
  content: {
    title: m.prop(null),
    body: m.prop(null)
  },
  actions: {
    left: m.prop('Cancel'),
    right: m.prop('OK'),
    single: m.prop('OK'),
    template: m.prop(null),
    leftCallback: vhxm.components.shared.modal.close,
    rightCallback: function() {},
    singleCallback: vhxm.components.shared.modal.close
  }
};