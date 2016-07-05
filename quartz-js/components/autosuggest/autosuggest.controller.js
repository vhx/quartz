vhxm.components.shared.autosuggest.controller = function(opts) {
  var self = this;

  self.timeout = null;

  self.init = function() {
    self.state = new vhxm.components.shared.autosuggest.state();
    self.model = new vhxm.components.shared.autosuggest.model();

    self.model.items(null);
    self.state.selected(null);

    if (opts.focusonready) {
      self.state.hasFocus(true);
    }

    if (opts.suggestonready) {
      self.fetchResults('');
    }

    $(document).on('click', function(event) {
      var is_list = $(event.target).closest('.c-autosuggest--container').length;

      if (!is_list && self.state.hasFocus()) {
        m.startComputation();
        self.state.hasFocus(false);
        self.model.items(null);
        m.endComputation();
      }
    });
  };

  self.isListOpen = function() {
    return self.model.items() && self.state.hasFocus();
  };

  self.fetchResults = function(query) {
    self.state.highlightIndex(0);

    m.startComputation();
    if (opts.data()) {
      var result = [];
      opts.data().map(function(item) {
        var query_clean = query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        if (item.toLowerCase().match(query_clean.toLowerCase())) {
          result.push(item);
        }
      });
      self.model.items(result.length ? result : null);
      m.endComputation();
      return;
    }

    if (opts.search) {
      opts.search(query, function(data) {
        self.model.items(data.length ? data : null);
        m.endComputation();
      });
    }
  };

  self.handleKeydown = function(e) {
    var container = $(e.target).closest('.c-select--container').find('.c-select--options');

    // Down Arrow
    if (e.keyCode === 40) {
      self.state.hasFocus(true);
      self.setHighlightedState('down', container);
      e.preventDefault();
    }
    // Up Arrow
    else if (e.keyCode === 38) {
      self.state.hasFocus(true);
      self.setHighlightedState('up', container);
      e.preventDefault();
    }
    // Enter/Return
    else if (e.keyCode === 13 && self.isListOpen()) {
      if (self.model.items()) {
        self.state.selected(self.model.items()[self.state.highlightIndex()]);
        opts.onselect(self.state.selected(), true);
      }

      self.state.hasFocus(false);
      self.model.items(null);
      e.preventDefault();
    }
  };

  self.handleClick = function(event) {
    event.preventDefault();
    self.state.hasFocus(true);
  };

  self.handleInput = function(event) {
    event.preventDefault();
    self.state.hasFocus(true);
    self.state.selected(event.target.value);
    opts.onselect(self.state.selected(), false);
    self.debounceSearch(event);
  };

  self.setHighlightedState = function(direction, container) {
    if (self.model.items()) {
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
    }
  };

  self.scrollOptionsList = function(container) {
    if (container.length) {
      container.eq(0).scrollTop(self.state.optionHeight() * self.state.highlightIndex());
    }
  };

  self.debounceSearch = function(event) {
    if (self.timeout) {
      clearTimeout(self.timeout);
    }

    self.timeout = setTimeout(function() {
      self.fetchResults(event.target.value);
      self.timeout = null;
    }, 300);
  };

  if (opts.init) {
    self.init();
  }
};
