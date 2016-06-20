//--sidebar.state.js--

vhxm.components.sidebar.state = {
  isOpen: m.prop(false),
  isSaving: m.prop(false)
};

//--sidebar.constants.js--

vhxm.components.sidebar.constants = {
  label: 'Title'
};

//--sidebar.controller.js--


vhxm.components.sidebar.controller = function() {
  var self = this;

  this.helpers = {
    handleEvent: function() {
      // handle event (arbitrary example)
      vhxm.models.collections.saveDoc();
    }
  };
};

//--sidebar.ui.js--


vhxm.components.sidebar.ui = {
  // sidebar parent component
  container: {
    controller: vhxm.components.sidebar.controller,
    view: function(ctrl) {
      return m('div', [
        m.component(vhxm.components.sidebar.ui.sub_component, { helpers: ctrl.helpers }),
        m('a', {
          onclick: ctrl.handleEvent
        }, 'Save')
      ]);
    }
  },
  // sidebar sub-component
  sub_component: {
    view: function(ctrl, c) {
      // c.helpers is available in any subcomponent
      return m('input', { name: 'title' }, vhxm.components.sidebar.constants.label);
    }
  }
};