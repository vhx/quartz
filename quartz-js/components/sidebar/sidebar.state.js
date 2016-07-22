vhxm.components.shared.sidebar.state = {
  isOpen         : m.prop(false),
  isLoaded       : m.prop(false),
  skipTransition : m.prop(false),
  template       : m.prop(null),
  onClose        : m.prop(function() {}),
  onOpen         : m.prop(function() {})
};
