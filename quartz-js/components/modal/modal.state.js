vhxm.components.shared.modal.state = {
  isOpen: m.prop(false),
  single_action: m.prop(false),
  size: m.prop(''),
  has_actions: m.prop(true),
  content: {
    header: m.prop(null),
    body: m.prop(null),
    actions: m.prop({
      left: null,
      right: null,
      single: null,
      template: m.prop(null),
      left_callback: null,
      right_callback: null,
      single_callback: null
    })
  }
};
