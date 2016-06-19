//--Layouts--

// an empty layout with an empty div
vhxm.layouts.index = {
  view: function() {
    return m('div');
  }
};

// a layout that includes child components
vhxm.layouts.index = {
  view: function() {
    return m('div', [
      m.component(vhxm.components.table.container),
      m.component(vhxm.components.sidebar.container)
    ]);
  }
};