vhxm.components.shared.select.controller = function(opts) {
  let self = this;
  let api = opts.api ? opts.api : m.prop(null);

  self.init = function() {
    self.state = new vhxm.components.shared.select.state();
    self.model = new vhxm.components.shared.select.model();

    self.type = opts.type || 'standard';
    self.multiselect = opts.multiselect || false;
    self.caret = opts.caret || 'right';
    self.position = opts.position || m.prop('bottom');
    self.model.items = opts.items;

    if (opts.selected) {
      opts.selected.map(function(item) {
        self.selectItem(item, true);
      });
    }

    self.state.focusInput(opts.focusOnOpen || true);

    if (opts.isProcessing) {
      self.state.isProcessing = opts.isProcessing;
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
      if (Object.keys(self.state.selected()).length > 1) {
        selected = 'Multiple items selected';
      } else {
        let key = Object.keys(self.state.selected())[0];
        selected = self.state.selected()[key].label;
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
    self.scrollOptionsList(container);
  };

  self.handleInput = function(event) {
    self.state.highlightIndex(-1);
    self.state.searchInputValue(event.target.value);
    self.state.isLoading(true);
  };

  self.selectItem = function(item, isInit) {
    let selected;
    let obj = {
      value: item[opts.prop_map.value],
      label: item[opts.prop_map.label]
    };

    if (!self.multiselect) {
      self.state.selected({});
    }

    selected = self.state.selected() || self.state.selected({});

    if (selected[item[opts.prop_map.key]]) {
      delete selected[item[opts.prop_map.key]];
      self.state.onSelect(obj, self.state.selected(), 'removed');
    }
    else {
      selected[item[opts.prop_map.key]] = obj;
      self.state.onSelect(obj, self.state.selected(), 'added');
    }

    self.state.selected(selected);

    if (!isInit) {
      self.state.isDropdownOpen(self.multiselect ? true : false);
    }

    if (self.multiselect) {
      self.state.highlightIndex(-1);
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
        self.state.isDropdownOpen(false);
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
      if (self.state.highlightIndex() < self.model.items().length - 1) {
        self.state.highlightIndex(self.state.highlightIndex() + 1);
      }
      else {
        self.state.highlightIndex(self.model.items().length - 1);
      }
    }
    else if (direction === 'up') {
      if (self.state.highlightIndex() > 0) {
        self.state.highlightIndex(self.state.highlightIndex() - 1);
      }
      else if (self.state.highlightIndex() <= 0) {
        self.state.highlightIndex(-1);
        input.focus();
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
