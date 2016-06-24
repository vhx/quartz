vhxm.components.shared.filter.controller = function(opts) {
  let self = this;

  self.init = function() {
    self.state = new vhxm.components.shared.filter.state();
    self.model = new vhxm.components.shared.filter.model();

    self.state.applied = m.prop(false);

    if (opts.api) {
      opts.api = {
        state: self.state,
        model: self.model
      };
    }
  };

  self.handleFilterClick = function(event, name) {
    event.preventDefault();

    let state = self.state.dropdown.filtersOpen().indexOf(name);

    if (state === -1) {
      self.state.dropdown.filtersOpen().push(name);
    }
    else {
      self.state.dropdown.filtersOpen().splice(state, 1);
    }
  };

  self.handleClick = function(event) {
    event.preventDefault();

    let state = self.state.dropdown.isOpen() ? false : true;
    self.state.dropdown.isOpen(state);
  };

  self.applyFilter = function(filter) {
    // apply the filter
    self.state.applied(filter);
  };

  if (opts && opts.init) {
    self.init();
  }
};