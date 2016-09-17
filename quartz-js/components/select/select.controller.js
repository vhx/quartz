vhxm.components.shared.select.controller = function(opts) {
  let self = this;
  let api = opts.api ? opts.api : m.prop(null);

  self.init = function() {
    self.state = new vhxm.components.shared.select.state();
    self.model = new vhxm.components.shared.select.model();

    self.type = opts.type || 'standard';
    self.model.items = opts.items;

    if (opts.selected) {
      self.state.selected(opts.selected);
    }

    if (opts.onSelect) {
      self.state.onSelect = opts.onSelect;
    }

    if (opts.onAction) {
      self.state.onAction = opts.onAction;
    }

    $(document).on('click', function(event) {
      let is_dropdown = $(event.target).closest('.c-select--container').length;

      if (!is_dropdown && self.state.isDropdownOpen()) {
        m.startComputation();
        self.state.isDropdownOpen(false);
        m.endComputation();
      }
    });

    api(self);
  };

  self.selectedLabel = function() {
    let selected = opts.placeholder ? opts.placeholder : 'Select...';

    if (self.state.selected()) {
      self.model.items().map(function(item) {
        if (self.state.selected()[item[opts.prop_map.key]]) {
          selected = self.state.selected()[item[opts.prop_map.key]].label;
        }
      });
      if (Object.keys(self.state.selected()).length > 1) {
        selected = 'Multiple items selected';
      }
    }

    return selected;
  };

  self.handleKeydown = function(event) {
    let container = $(event.target).closest('.c-select--container');
    let options = container.find('.c-select--options');
    let input = container.find('.c-select--input-container input');

    // Down Arrow
    if (event.keyCode === 40) {
      event.preventDefault();
      self.setHighlightedState('down', options);
    }
    // Up Arrow
    else if (event.keyCode === 38) {
      event.preventDefault();
      self.setHighlightedState('up', options, input);
    }
    // Enter/Return
    else if (event.keyCode === 13 && self.state.isDropdownOpen()) {
      event.preventDefault();
      self.selectItem(self.model.items()[self.state.highlightIndex()]);
    }
  };

  self.handleClick = function(event) {
    event.preventDefault();
    let container = $(event.target).closest('.c-select--container').find('.c-select--options');

    if (!self.state.isDropdownOpen()) {
      self.state.focusInput(true);
    }

    self.state.isDropdownOpen(!self.state.isDropdownOpen());

    self.state.highlightIndex(-1);

    self.scrollOptionsList(container);
  };

  self.handleInput = function(event) {
    self.state.highlightIndex(-1);
    self.state.searchInputValue(event.target.value);
    self.state.isLoading(true);
  };

  self.selectItem = function(item) {
    let selected;
    if (!opts.multiselect) {
      self.state.selected({});
    }

    selected = self.state.selected() || self.state.selected({});

    if (selected[item[opts.prop_map.key]]) {
      delete selected[item[opts.prop_map.key]];
    }
    else {
      selected[item[opts.prop_map.key]] = {
        value: item[opts.prop_map.value],
        label: item[opts.prop_map.label]
      };
    }

    self.state.selected(selected);
    self.state.isDropdownOpen(opts.multiselect ? true : false);
    self.state.onSelect(self.state.selected());
    if (!opts.multiselect) {
      self.state.highlightIndex(-1);
      self.scrollOptionsList(0);
    }
  };

  self.handleAction = function(event) {
    event.preventDefault();
    m.startComputation();
      self.state.footerLoading(true);
    m.endComputation();

    self.state.onAction(function() {
      m.startComputation();
        self.state.searchInputValue('');
        self.state.footerLoading(false);
      m.endComputation();
    });
  };

  self.searchCallback = function(data) {
    m.startComputation();
    self.model.items(data);
    self.state.isLoading(false);
    m.endComputation();
  };

  self.setHighlightedState = function(direction, container, input) {
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
      else if (self.state.highlightIndex() < 0) {
        self.state.highlightIndex(-1);
        input.focus();
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
