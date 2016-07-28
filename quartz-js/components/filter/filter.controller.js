vhxm.components.shared.filter.controller = function(opts) {
  let self = this;
  let api = opts.api ? opts.api : m.prop(null);
  
  self.init = function() {
    if (api() && api().state) {
      self.state = api().state;
      self.model = api().model;
    } else {
      self.state = new vhxm.components.shared.filter.state();
      self.model = new vhxm.components.shared.filter.model();
    }

    api({
      state: self.state,
      model: self.model,
      applyFilter: self.applyFilter,
      removeFilter: self.removeFilter,
      addFilter: self.addFilter
    });

    if (opts.filtersStartOpen) {
      opts.filters.map(function(item) {
        let name;

        if (typeof(item) === 'string' && vhxm.components.shared.filter.ui[item]) {
          name = item;
        }
        if (typeof(item) === 'object') {
          name = item.type;
        }

        if (name) {
          self.state.dropdown.filtersOpen().push(name);
        }
      });
    }

    opts.beforeOpen = opts.beforeOpen ? opts.beforeOpen : function() {};
    opts.afterClose = opts.afterClose ? opts.afterClose : function() {};
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

    if (!state && self.state.selected().length && !opts.applyOnChange) {
      self.applyFilter();
    }

    self.state.dropdown.isOpen(state);

    if (state) {
      return opts.beforeOpen();
    } else {
      return opts.afterClose();
    }
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
        self.state.selected().splice(index, 1);
      }
    });

    if (callback) {
      callback();
    }
  };

  self.openFilter = function(item) {
    self.state.dropdown.filtersOpen().push(item.type);
    self.state.dropdown.isOpen(true);
  };

  self.addFilter = function(filter, type) {
    self.state.selected().map(function(item) {
      if (item.type === type) {
        self.removeFilter(item);
      }
    });
    self.state.selected().push({
      type: type,
      label: filter.label,
      value: filter.value
    });
  };

  self.hasMultipleFilters = function() {
    return opts.filters.length > 1;
  };

  self.iconHelper = function(item) {
    if (self.hasMultipleFilters()) {
      return '.icon--right.icon-chevron-' + (self.state.dropdown.filtersOpen().indexOf(item) >= 0 ? 'up' : 'down') + '-navy.icon--xxsmall';
    }
    return '';
  };

  if (opts && opts.init) {
    self.init();
  }

  $(document).on('click', function(event) {
   if ($('.c-filter--container.is-open').length && !$(event.target).closest('.c-filter--container.is-open').length) {
     m.startComputation();
     self.state.dropdown.isOpen(false);
     m.endComputation();
   }
 });
};