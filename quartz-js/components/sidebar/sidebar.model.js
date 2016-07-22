vhxm.components.shared.sidebar.toggle = function(state, route) {
  state = state === 'open' ? true : false;

  if (vhxm.components.shared.sidebar.state.isOpen() && !state || !vhxm.components.shared.sidebar.state.isOpen() && state) {
    vhxm.components.shared.sidebar.state.isOpen(state);
    if (route) {
      return m.route(route);
    }

    m.redraw();
  }
};

vhxm.components.shared.sidebar.setTemplate = function(template) {
  vhxm.components.shared.sidebar.state.template(template);
};

vhxm.components.shared.sidebar.setLoadedState = function(obj) {
  if (!!(obj && obj.constructor && obj.call && obj.apply)) {
    vhxm.components.shared.sidebar.state.isLoaded = obj;
  } else {
    throw 'Loaded State must be a Mithril prop.';
  }

  m.redraw();
};
