vhxm.components.shared.sidebar.toggle = function(state, route) {
  // state = state === 'open' ? true : false;
  console.log('yo');

  let done = function() {
    console.log('whatevs', state);
    // vhxm.components.shared.sidebar.state.isOpen(state);
    if (route) {
      return m.route(route);
    }

    m.redraw();
  };

  if (vhxm.components.shared.sidebar.state.isOpen() && !state || !vhxm.components.shared.sidebar.state.isOpen() && state) {
    if (!state) {
      vhxm.components.shared.sidebar.state.onBeforeClose(done);
    }
    else {
      done();
    }
  }
};

vhxm.components.shared.sidebar.setTemplate = function(template) {
  console.log('foo')
  vhxm.components.shared.sidebar.state.template(template);
};

vhxm.components.shared.sidebar.setLoadedState = function(obj) {
  console.log('bar');
  if (!!(obj && obj.constructor && obj.call && obj.apply)) {
    vhxm.components.shared.sidebar.state.isLoaded = obj;
  } else {
    throw 'Loaded State must be a Mithril prop.';
  }

  m.redraw();
};
