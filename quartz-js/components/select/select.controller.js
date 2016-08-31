vhxm.components.shared.select.controller = function(opts) {
  let self = this;

  self.init = function() {
    self.state = new vhxm.components.shared.select.state();
    self.model = new vhxm.components.shared.select.model();

    self.model.items = opts.items;
    self.state.selected(opts.selected);

    $(document).on('click', function(event) {
      let is_dropdown = $(event.target).closest('.c-select--container').length;

      if (!is_dropdown && self.state.isDropdownOpen()) {
        m.startComputation();
        self.state.isDropdownOpen(false);
        m.endComputation();
      }
    });
  };

  self.selectedLabel = function() {
    let is_default = true;

    self.model.items().map(function(item) {
      if (self.state.selected().value === item[opts.value_prop]) {
        self.state.selected({
          value: item[opts.value_prop],
          label: item[opts.label_prop]
        });
        is_default = false;
      }
    });

    if (is_default) {
      self.state.selected(opts.selected);
    }

    return self.state.selected().label;
  };


  self.handleKeydown = function(e) {
    let container = $(e.target).closest('.c-select--container').find('.c-select--options');

    // Down Arrow
    if (e.keyCode === 40) {
      self.setHighlightedState('down', container);
      e.preventDefault();
    }
    // Up Arrow
    else if (e.keyCode === 38) {
      self.setHighlightedState('up', container);
      e.preventDefault();
    }
    // Enter/Return
    else if (e.keyCode === 13 && self.state.isDropdownOpen()) {
      self.state.selected({
        value: self.model.items()[self.state.highlightIndex()][opts.value_prop],
        label: self.model.items()[self.state.highlightIndex()][opts.label_prop]
      });

      self.state.isDropdownOpen(false);
      e.preventDefault();
    }
  };

  self.handleClick = function(event) {
    event.preventDefault();
    let container = $(event.target).closest('.c-select--container').find('.c-select--options');

    self.state.isDropdownOpen(!self.state.isDropdownOpen());
    self.state.highlightIndex(-1);

    self.scrollOptionsList(container);
  };

  self.handleInput = function(event) {
    self.state.searchInputValue(event.target.value);

    self.state.isLoadingResults(true);
    self.state.highlightIndex(0);
  };

  self.searchCallback = function(data) {
    self.model.items(data);
    self.state.isLoadingResults(false);
  };

  self.setHighlightedState = function(direction, container) {
    if (direction === 'down') {
      self.state.highlightIndex(self.state.highlightIndex() + 1);
      if (self.state.highlightIndex() < self.model.items().length) {
        self.state.scrollIndex(self.state.scrollIndex() + 1);
      }
      else {
        self.state.highlightIndex(self.model.items().length - 1);
      }
    }
    else if (direction === 'up') {
      self.state.highlightIndex(self.state.highlightIndex() - 1);
      if (self.state.highlightIndex() > 0) {
        self.state.scrollIndex(self.state.scrollIndex() - 1);
      }
      else {
        self.state.highlightIndex(0);
      }
    }
    self.scrollOptionsList(container);
  };

  self.scrollOptionsList = function(container) {
    if (container.length) {
      container.eq(0).scrollTop(self.state.optionHeight() * self.state.highlightIndex());
    }
  };

  if (opts.init) {
    self.init();
  }
};
