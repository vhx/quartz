vhxm.components.shared.filter.controller = function(opts) {
  let self = this;

  self.init = function() {
    self.state = new vhxm.components.shared.filter.state();
    self.model = new vhxm.components.shared.filter.model();

    if (opts.api) {
      opts.api({
        state: self.state,
        model: self.model,
        removeFilter: self.removeFilter,
        addFilter: self.addFilter,
      });
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

  self.handleApplyClick = function(event) {
    event.preventDefault();

    let state = self.state.dropdown.isOpen() ? false : true;

    if (!state && self.state.selected().length) {
      self.applyFilter();
    }

    self.state.dropdown.isOpen(state);
  };

  self.handleFilterRemoveClick = function(filter) {
    self.removeFilter(filter, function() {
      self.applyFilter();
    });
  };

  self.applyFilter = function() {
    self.state.applied(true);
    if (opts.filterHandler) {
      opts.filterHandler(self.state.selected(), function() {});
    }
  };

  self.removeFilter = function(filter, callback) {
    self.state.selected().filter(function(item, index) {
      if (item.value === filter.value) {
        self.state.selected().splice(item, 1);
      }
    });

    if (callback) {
      callback();
    }
  };

  self.addFilter = function(filter, type) {
    self.state.selected().push({
      type: type,
      label: filter.label,
      value: filter.value
    });
  };

  if (opts && opts.init) {
    self.init();
  }
};