// Example Select Component

m.component(vhxm.components.shared.select.ui.container, {
  search: mySearch(query, callback),
  selected: {
    value: null,
    label: 'Nothing Selected'
  },
  items: vhxm.models.section.items,
  value_prop: 'id',
  label_prop: 'title',
  descriptor_prop: 'details',
  name: 'selected_id',
  callback: function(obj) {
    vhxm.models.section.chosen_item = { id: obj.value };
  }
});



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

  self.handleInput = function() {
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

vhxm.components.shared.select.model = function() {
  this.items = m.prop(null);
};

vhxm.components.shared.select.state = function() {
  this.selected = m.prop({});
  this.highlighted = m.prop({});
  this.isDropdownOpen = m.prop(false);
  this.highlightIndex = m.prop(null);
  this.scrollIndex = m.prop(0);
  this.optionHeight = m.prop(0);
  this.optionsHeight = m.prop(0);
  this.isLoadingResults = m.prop(false);
};

vhxm.components.shared.select.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.select.controller(opts);
  },
  view: function(ctrl, opts) {
    return m('.c-select--container.form' + (opts.search ? '.has-search' : '') + (opts.inline ? '.inline' : ''), {
        onkeydown: ctrl.handleKeydown
      }, [
      m('a.c-select--trigger.btn-dropdown-' + (opts.color ? opts.color : 'gray') + '.btn--fill' + (ctrl.state.isDropdownOpen() ? '.is-active' : ''), {
        href: '#',
        onclick: ctrl.handleClick
      }, ctrl.selectedLabel()),
      m('.c-select--dropdown' + (ctrl.state.isDropdownOpen() ? '.is-open' : ''), [
        opts.search ?
        // if search is enabled
        m('.c-select--input-container.padding-medium', [
          m.component(vhxm.components.shared.search_input.ui.container, {
            config: function(el) {
              if (ctrl.state.isDropdownOpen()) {
                setTimeout(function() {
                  el.focus();
                }, 10);
              }
            },
            callback: ctrl.searchCallback,
            search: opts.search,
            placeholder: 'Search',
            oninput: ctrl.handleInput
          })
        ]) : '',
        m.component(vhxm.components.shared.select.ui.list.container, opts, ctrl),
        m('input', {
          type: 'hidden',
          name: opts.name,
          value: ctrl.state.selected().value
        })
      ])
    ]);
  }
};

vhxm.components.shared.select.ui.list.controller = function(opts, parent) {
  let self = this;

  self.parent = new vhxm.components.shared.select.controller(opts);
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function() {
    return self.model.items() && self.model.items().length > 1;
  };

  self.handleItemClick = function(event, item) {
    self.state.selected({
      value: item[opts.value_prop],
      label: item[opts.label_prop]
    });
    self.state.isDropdownOpen(false);
    self.state.highlightIndex(-1);
    if (opts.callback) {
      opts.callback(self.state.selected());
    }
    self.parent.scrollOptionsList(0);
  };

};

/* ................................................
  Select List Component
.................................................*/
vhxm.components.shared.select.ui.list.container = {
  controller: function(opts, parent) {
    return new vhxm.components.shared.select.ui.list.controller(opts, parent);
  },
  view: function(ctrl, opts) {
    return m('ul.c-select--options.margin-left-reset' + (ctrl.state.isLoadingResults() ? '.is-loading.padding-bottom-medium' : ''), {
      config: function(el) {
        ctrl.state.optionsHeight($(el).outerHeight());
      }
    }, [
      ctrl.hasItems() ?
        ctrl.model.items().map(function(item, index) {
          return m('li.c-select--option.padding-horizontal-large.padding-vertical-small' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
            config: function(el) {
              ctrl.state.optionHeight($(el).outerHeight());
            },
            onmouseover: function() {
              ctrl.state.highlightIndex(index);
            },
            onclick: function(event) {
              ctrl.handleItemClick(event, item);
            }
          }, [
            m('span.c-select--item-label', item[opts.label_prop]), item[opts.descriptor_prop] ? m('span.right.text.primary', item[opts.descriptor_prop]) : '' ]);
        })
      : m.component(vhxm.components.shared.select.ui.list.empty, opts)
    ]);
  }
};

/* List Empty
.................................................*/
vhxm.components.shared.select.ui.list.empty = {
  view: function() {
    return m('li.c-select--option.padding-horizontal-large.padding-top-small.padding-bottom-medium.text.primary', 'No results');
  }
};
