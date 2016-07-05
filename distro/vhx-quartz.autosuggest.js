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

vhxm.components.shared.autosuggest.model = function() {
  this.items = m.prop([]);
};

vhxm.components.shared.autosuggest.state = function() {
  this.selected = m.prop({});
  this.highlighted = m.prop({});
  this.highlightIndex = m.prop(null);
  this.scrollIndex = m.prop(0);
  this.optionHeight = m.prop(0);
  this.optionsHeight = m.prop(0);
  this.hasFocus = m.prop(false);
};

vhxm.components.shared.autosuggest.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.autosuggest.controller(opts);
  },
  view: function(ctrl, opts) {
    if (opts.reset()) {
      ctrl.state.selected(null);
      opts.reset(false);
    }
    return m('.c-autosuggest--container.form', {
        onkeydown: ctrl.handleKeydown,
        onclick: ctrl.handleClick,
      }, [
      m('.c-autosuggest--input-container', [
        m('input.c-autosuggest--search', {
          config: function(el) {
            if (ctrl.state.hasFocus()) {
              setTimeout(function() {
                el.focus();
              }, 10);
            }
          },
          autocomplete: 'off',
          name: opts.name ? opts.name : null,
          type: 'text',
          value: ctrl.state.selected(),
          placeholder: opts.placeholder ? opts.placeholder : '',
          oninput: ctrl.handleInput
        })
      ]),
      m('.c-autosuggest--list' + (ctrl.isListOpen() ? '.is-open' : ''), [
        m.component(vhxm.components.shared.autosuggest.ui.list.container, opts, ctrl),
      ])
    ]);
  }
};

vhxm.components.shared.autosuggest.ui.list.controller = function(opts, parent) {
  let self = this;

  self.parent = new vhxm.components.shared.autosuggest.controller(opts);
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function() {
    return self.model.items() && self.model.items().length > 1;
  };

  self.handleItemClick = function(event, item) {
    self.state.selected(item);
    self.state.highlightIndex(-1);

    if (opts.onselect) {
      opts.onselect(self.state.selected(), true);
    }
    self.state.hasFocus(false);
    self.model.items(null);
    self.parent.scrollOptionsList(0);
  };

};

/* ................................................
  Select List Component
.................................................*/
vhxm.components.shared.autosuggest.ui.list.container = {
  controller: function(opts, parent) {
    return new vhxm.components.shared.autosuggest.ui.list.controller(opts, parent);
  },
  view: function(ctrl) {
    return m('ul.c-autosuggest--options.margin-left-reset', {
      config: function(el) {
        ctrl.state.optionsHeight($(el).outerHeight());
      }
    }, [
      ctrl.model.items() ?
        ctrl.model.items().map(function(item, index) {
          return m('li.c-autosuggest--option.padding-horizontal-medium.padding-horz-medium.padding-vert-small.padding-vertical-small' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
            config: function(el) {
              ctrl.state.optionHeight($(el).outerHeight());
            },
            onmouseover: function() {
              ctrl.state.highlightIndex(index);
            },
            onclick: function(event) {
              ctrl.handleItemClick(event, item);
            }
          }, item);
        })
      : ''
    ]);
  }
};
