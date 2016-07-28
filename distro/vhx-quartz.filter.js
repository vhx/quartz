'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

vhxm.components.shared.filter.constants = Object.freeze({
  date: {
    title: 'Date'
  },
  location: {
    title: 'Location'
  }
});
vhxm.components.shared.filter.controller = function (opts) {
  var self = this;
  var api = opts.api ? opts.api : m.prop(null);

  self.init = function () {
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
      opts.filters.map(function (item) {
        var name = void 0;

        if (typeof item === 'string' && vhxm.components.shared.filter.ui[item]) {
          name = item;
        }
        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
          name = item.type;
        }

        if (name) {
          self.state.dropdown.filtersOpen().push(name);
        }
      });
    }

    opts.beforeOpen = opts.beforeOpen ? opts.beforeOpen : function () {};
    opts.afterClose = opts.afterClose ? opts.afterClose : function () {};
  };

  self.handleFilterClick = function (event, name) {
    event.preventDefault();

    var state = self.state.dropdown.filtersOpen().indexOf(name);

    if (state === -1) {
      self.state.dropdown.filtersOpen().push(name);
    } else {
      self.state.dropdown.filtersOpen().splice(state, 1);
    }
  };

  self.handleApplyClick = function (event) {
    event.preventDefault();

    var state = self.state.dropdown.isOpen() ? false : true;

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

  self.handleFilterRemoveClick = function (filter) {
    self.removeFilter(filter, function () {
      self.applyFilter();
    });
  };

  self.applyFilter = function () {
    self.state.applied(true);
    if (opts.filterHandler) {
      opts.filterHandler(self.state.selected(), function () {});
    }
  };

  self.removeFilter = function (filter, callback) {
    self.state.selected().filter(function (item, index) {
      if (item.value === filter.value) {
        self.state.selected().splice(index, 1);
      }
    });

    if (callback) {
      callback();
    }
  };

  self.openFilter = function (item) {
    self.state.dropdown.filtersOpen().push(item.type);
    self.state.dropdown.isOpen(true);
  };

  self.addFilter = function (filter, type) {
    self.state.selected().map(function (item) {
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

  self.hasMultipleFilters = function () {
    return opts.filters.length > 1;
  };

  self.iconHelper = function (item) {
    if (self.hasMultipleFilters()) {
      return '.icon--right.icon-chevron-' + (self.state.dropdown.filtersOpen().indexOf(item) >= 0 ? 'up' : 'down') + '-navy.icon--xxsmall';
    }
    return '';
  };

  if (opts && opts.init) {
    self.init();
  }

  $(document).on('click', function (event) {
    if ($('.c-filter--container.is-open').length && !$(event.target).closest('.c-filter--container.is-open').length) {
      m.startComputation();
      self.state.dropdown.isOpen(false);
      m.endComputation();
    }
  });
};
vhxm.components.shared.filter.model = function () {};

vhxm.components.shared.filter.state = function () {
  this.selected = m.prop([]);
  this.applied = m.prop(false);
  this.available = m.prop(null);
  this.dropdown = {
    isOpen: m.prop(false),
    filtersOpen: m.prop([])
  };
};

vhxm.components.shared.filter.ui.container = {
  controller: function controller(opts) {
    opts.init = true;
    return new vhxm.components.shared.filter.controller(opts);
  },
  view: function view(ctrl, opts) {
    var ready_to_apply = ctrl.state.dropdown.isOpen() && ctrl.state.selected() && ctrl.state.selected().length && !opts.applyOnChange;

    return m('.c-filter--container.dropdown.dropdown--' + (opts.size ? opts.size : 'large') + (ctrl.state.dropdown.isOpen() ? '.is-open' : ''), [m('div.row', [m('.c-filter--trigger-container.small-' + (vhxm.components.shared.size.state.smallToMedium() ? '5' : '3') + '.column.pull.padding-reset', [m('a.c-filter--trigger.block.radius.head-5.text--gray' + (ready_to_apply ? '.text-center' : '.icon--right.icon-' + (ctrl.state.dropdown.isOpen() ? 'x-navy' : 'chevron-down-gray') + '.icon--xxsmall.margin-right-medium.fill-width'), {
      onclick: ctrl.handleApplyClick
    }, ready_to_apply ? 'Apply' : 'Filters'), m.component(vhxm.components.shared.filter.ui.dropdown, opts, ctrl)]), m('.c-filter--applied-container.small-' + (vhxm.components.shared.size.state.smallToMedium() ? '11' : '13') + '.column.pull.padding-reset', [m('.margin-left-small.padding-left-medium.border-left', [ctrl.state.applied() && ctrl.state.selected().length ? m.component(vhxm.components.shared.filter.ui.applied, opts, ctrl) : m('span.c-filter--label.text--gray', opts.label ? opts.label : m.trust('&nbsp;'))])])])]);
  }
};

vhxm.components.shared.filter.ui.applied = {
  controller: function controller(opts, parent_ctrl) {
    return parent_ctrl;
  },
  view: function view(ctrl) {
    return m('div', [ctrl.state.selected().map(function (item) {
      return m('span.c-filter--applied.inline', [m('a.text--navy', {
        href: '#',
        onclick: function onclick(event) {
          event.preventDefault();
          ctrl.openFilter(item);
        }
      }, item.label), m('a.icon--center.icon-x-navy.icon--xxsmall', {
        onclick: function onclick(event) {
          event.preventDefault();
          ctrl.handleFilterRemoveClick(item);
        }
      })]);
    })]);
  }
};

vhxm.components.shared.filter.ui.dropdown = {
  controller: function controller(opts, parent_ctrl) {
    return parent_ctrl;
  },
  view: function view(ctrl, opts) {
    return m('.c-filter--dropdown.dropdown-list', [m('ul.padding-reset', [opts.filters.map(function (item) {
      if (typeof item === 'string' && vhxm.components.shared.filter.ui[item]) {
        return m('li.border-bottom', [m((ctrl.hasMultipleFilters() ? 'a' : 'span') + '.c-filter--item.head-5.fill-width' + ctrl.iconHelper(item), {
          href: '#',
          onclick: function onclick(event) {
            if (ctrl.hasMultipleFilters()) {
              ctrl.handleFilterClick(event, item);
            }
          }
        }, vhxm.components.shared.filter.constants[item].title), m('div.c-filter--item-container' + (ctrl.state.dropdown.filtersOpen().indexOf(item) >= 0 ? '.is-active' : ''), [m.component(vhxm.components.shared.filter.ui[item])])]);
      }
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
        if (item.template) {
          return m.component(vhxm.components.shared.filter.ui.template, item, ctrl);
        } else if (item.data) {
          return m.component(vhxm.components.shared.filter.ui.data, item, ctrl);
        }
      }
    })])]);
  }
};

vhxm.components.shared.filter.ui.template = {
  controller: function controller(item, parent_ctrl) {
    return parent_ctrl;
  },
  view: function view(ctrl, item) {
    return m('li.border-bottom', [m((ctrl.hasMultipleFilters() ? 'a' : 'span') + '.c-filter--item.head-5.fill-width' + ctrl.iconHelper(item), {
      href: '#',
      onclick: function onclick(event) {
        if (ctrl.hasMultipleFilters()) {
          ctrl.handleFilterClick(event, item.type);
        }
      }
    }, item.title), m('div.c-filter--item-container' + (ctrl.state.dropdown.filtersOpen().indexOf(item.type) >= 0 ? '.is-active' : ''), [m.component(item.template)])]);
  }
};

vhxm.components.shared.filter.ui.data = {
  controller: function controller(opts, parent_ctrl) {
    return parent_ctrl;
  },
  view: function view(ctrl, item) {
    return m('li.border-bottom', [m((ctrl.hasMultipleFilters() ? 'a' : 'span') + '.c-filter--item.head-5.fill-width' + ctrl.iconHelper(item), {
      href: '#',
      onclick: function onclick(event) {
        if (ctrl.hasMultipleFilters()) {
          ctrl.handleFilterClick(event, item.type);
        }
      }
    }, item.title), m('div.c-filter--item-container' + (ctrl.state.dropdown.filtersOpen().indexOf(item.type) >= 0 ? '.is-active' : ''), [m('ul.form', [item.data().map(function (child, index) {
      return m('li', [m.component(vhxm.components.shared.checkbox.ui.container, {
        name: item.type + '-' + index,
        checked: child.checked,
        label: child.label,
        onchange: function onchange(event) {
          ctrl.removeFilter(child);
          if (event.target.checked) {
            ctrl.addFilter(child, item.type);
          }
        }
      })]);
    })])])]);
  }
};
