vhxm.components.shared.sidebar.toggleSidebar = function(state, route) {
  state = state === 'open' ? true : false;

  vhxm.components.shared.sidebar.state.isOpen(state);
  m.route(route);
};

vhxm.components.shared.sidebar.setTemplate = function(template) {
  vhxm.components.shared.sidebar.state.template(template);
  m.redraw();
};

vhxm.components.shared.sidebar.setModel = function(model) {
  vhxm.components.shared.sidebar.state.model(model);
  m.redraw();
};
