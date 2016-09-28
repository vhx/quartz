vhxm.components.shared.sidebar.state = {
  isOpen         : m.prop(false),
  isLoaded       : m.prop(false),
  skipTransition : m.prop(false),
  template       : m.prop(null),
  onBeforeClose  : function(done) { done(); },
  onClose        : function() {},
  onOpen         : function() {}
};
