'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var vhxm = {
  layouts: {},
  models: {},
  components: {}
};if (typeof vhxm !== 'undefined') {
  vhxm.components.shared = {
    modal: {
      ui: {}
    },
    radio: {
      ui: {}
    },
    checkbox: {
      ui: {}
    },
    filter: {
      location: {},
      date: {},
      ui: {}
    },
    select: {
      ui: {
        list: {},
        media_item: {}
      }
    },
    autosuggest: {
      ui: {
        list: {}
      }
    },
    search_input: {
      ui: {}
    },
    header: {
      ui: {}
    },
    load_more: {
      ui: {}
    },
    sidebar: {
      ui: {}
    },
    avatar: {},
    size: {},
    tag: {
      ui: {}
    }
  };
}
vhxm.components.shared.autosuggest.controller = function (opts) {
  var self = this;

  self.timeout = null;

  self.init = function () {
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

    $(document).on('click', function (event) {
      var is_list = $(event.target).closest('.c-autosuggest--container').length;

      if (!is_list && self.state.hasFocus()) {
        m.startComputation();
        self.state.hasFocus(false);
        self.model.items(null);
        m.endComputation();
      }
    });
  };

  self.isListOpen = function () {
    return self.model.items() && self.state.hasFocus();
  };

  self.fetchResults = function (query) {
    self.state.highlightIndex(0);

    m.startComputation();
    if (opts.data()) {
      var result = [];
      opts.data().map(function (item) {
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
      opts.search(query, function (data) {
        self.model.items(data.length ? data : null);
        m.endComputation();
      });
    }
  };

  self.handleKeydown = function (e) {
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

  self.handleClick = function (event) {
    event.preventDefault();
    self.state.hasFocus(true);
  };

  self.handleInput = function (event) {
    event.preventDefault();
    self.state.hasFocus(true);
    self.state.selected(event.target.value);
    opts.onselect(self.state.selected(), false);
    self.debounceSearch(event);
  };

  self.setHighlightedState = function (direction, container) {
    if (self.model.items()) {
      if (direction === 'down') {
        self.state.highlightIndex(self.state.highlightIndex() + 1);
        if (self.state.highlightIndex() < self.model.items().length) {
          self.state.scrollIndex(self.state.scrollIndex() + 1);
        } else {
          self.state.highlightIndex(self.model.items().length - 1);
        }
      } else if (direction === 'up') {
        self.state.highlightIndex(self.state.highlightIndex() - 1);
        if (self.state.highlightIndex() > 0) {
          self.state.scrollIndex(self.state.scrollIndex() - 1);
        } else {
          self.state.highlightIndex(0);
        }
      }
      self.scrollOptionsList(container);
    }
  };

  self.scrollOptionsList = function (container) {
    if (container.length) {
      container.eq(0).scrollTop(self.state.optionHeight() * self.state.highlightIndex());
    }
  };

  self.debounceSearch = function (event) {
    if (self.timeout) {
      clearTimeout(self.timeout);
    }

    self.timeout = setTimeout(function () {
      self.fetchResults(event.target.value);
      self.timeout = null;
    }, 300);
  };

  if (opts.init) {
    self.init();
  }
};
vhxm.components.shared.autosuggest.model = function () {
  this.items = m.prop([]);
};
vhxm.components.shared.autosuggest.state = function () {
  this.selected = m.prop({});
  this.highlighted = m.prop({});
  this.highlightIndex = m.prop(null);
  this.scrollIndex = m.prop(0);
  this.optionHeight = m.prop(0);
  this.optionsHeight = m.prop(0);
  this.hasFocus = m.prop(false);
};
vhxm.components.shared.autosuggest.ui.container = {
  controller: function controller(opts) {
    opts.init = true;
    return new vhxm.components.shared.autosuggest.controller(opts);
  },
  view: function view(ctrl, opts) {
    if (opts.reset()) {
      ctrl.state.selected(null);
      opts.reset(false);
    }
    return m('.c-autosuggest--container.form', {
      onkeydown: ctrl.handleKeydown,
      onclick: ctrl.handleClick
    }, [m('.c-autosuggest--input-container', [m('input.c-autosuggest--search', {
      config: function config(el) {
        if (ctrl.state.hasFocus()) {
          setTimeout(function () {
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
    })]), m('.c-autosuggest--list' + (ctrl.isListOpen() ? '.is-open' : ''), [m.component(vhxm.components.shared.autosuggest.ui.list.container, opts, ctrl)])]);
  }
};
vhxm.components.shared.avatar.ui = {
  view: function view(ctrl, opts) {
    return m('span.avatar.color-teal.avatar--' + (opts.size ? opts.size : 'medium'), [m('span.avatar-user.user-avatar', {
      style: {
        backgroundImage: 'url(' + opts.image + ')'
      }
    })]);
  }
};vhxm.components.shared.checkbox.ui.container = {
  view: function view(ctrl, opts) {
    return m('fieldset.checkbox.' + (opts.size ? opts.size : 'medium') + (opts.type === 'toggle' ? '.alt' : ''), [m('input[type=checkbox]', {
      checked: opts.checked,
      name: opts.name,
      value: opts.value,
      onchange: opts.onchange,
      id: opts.name
    }), m('label', {
      for: opts.name
    }, [opts.type === 'toggle' ? m('span.checkbox--contain', [m('span.checkbox--icon'), m('span.checkbox--circle', [m('i.circle-top', m.trust('<span></span>')), m('i.circle-bottom', m.trust('<span></span>'))]), m('span.checkbox--label')]) : m('span.checkbox--contain', [m('span.checkbox--icon', [m('span.checkbox-animate')]), opts.label ? m('span.checkbox--label', opts.label) : ''])])]);
  }
};
vhxm.components.shared.filter.constants = Object.freeze({
  date: {
    title: 'Date'
  },
  location: {
    title: 'Location'
  }
});vhxm.components.shared.filter.controller = function (opts) {
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
    if ($('.c-filter--container.is-open').length && !$(event.target).closest('.c-filter--applied').length && !$(event.target).closest('.c-filter--trigger-container').length) {
      m.startComputation();
      self.state.dropdown.isOpen(false);
      m.endComputation();
    }
  });
};vhxm.components.shared.filter.model = function () {};
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

    return m('.c-filter--container.dropdown.dropdown--' + (opts.size ? opts.size : 'large') + (ctrl.state.dropdown.isOpen() ? '.is-open' : ''), [m('div.row', [m('.c-filter--trigger-container.small-' + (vhxm.components.shared.size.state.smallToMedium() ? '5' : '3') + '.column.pull.padding-reset', [m('a.c-filter--trigger.block.radius.head-5.text--gray' + (ready_to_apply ? '.text-center' : '.icon--right.icon-' + (ctrl.state.dropdown.isOpen() ? 'chevron-up-navy' : 'chevron-down-gray') + '.icon--xxsmall.margin-right-medium.fill-width'), {
      onclick: ctrl.handleApplyClick
    }, ready_to_apply ? 'Apply' : 'Filters'), m.component(vhxm.components.shared.filter.ui.dropdown, opts, ctrl)]), m('.c-filter--applied-container.small-' + (vhxm.components.shared.size.state.smallToMedium() ? '11' : '13') + '.column.pull.padding-reset', [m('.margin-left-small.padding-left-medium.border-left', [ctrl.state.applied() && ctrl.state.selected().length ? m.component(vhxm.components.shared.filter.ui.applied, opts, ctrl) : m('span.c-filter--label.text--gray', opts.label ? opts.label : m.trust('&nbsp;'))])])])]);
  }
};

vhxm.components.shared.filter.ui.applied = {
  controller: function controller(opts, parent_ctrl) {
    return parent_ctrl;
  },
  view: function view(ctrl) {
    var isSingle = ctrl.state.selected().length <= 1;

    return m('div', [ctrl.state.selected().map(function (item) {
      return m('span.c-filter--applied.inline', [m('a.text--navy' + (isSingle ? '.margin-right-small' : ''), {
        href: '#',
        onclick: function onclick(event) {
          event.preventDefault();
          ctrl.openFilter(item);
        }
      }, item.label), isSingle ? '' : m('a.icon--center.icon-x-navy.icon--xxsmall', {
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
};vhxm.components.shared.header.ui.container = {
  view: function view(ctrl, opts) {
    var has_border = opts.border === false ? false : true;

    return m('header.row.padding-bottom-medium' + (has_border ? '.border-bottom' : ''), [m('.column.small-16.medium-8.large-10', [m('.media', [m('.media-unit.text-top', [m('i.icon.icon--large.icon-' + opts.icon)]), m('.media-unit.media-fill.padding-left-medium', [m('h2.head-3', opts.title), m('p.text.text--gray.small-margin-bottom-small', opts.description ? opts.description : '')])])]), m('.column.small-16.medium-8.large-6.text-right', opts.buttons ? opts.buttons : '')]);
  }
};

vhxm.components.shared.load_more.controller = function (opts) {
  var self = this;

  self.state = new vhxm.components.shared.load_more.state();
  self.action = opts.action ? opts.action : function () {};

  self.loadMore = function () {
    self.state.is_loading(true);
    self.action(function () {
      self.state.is_loading(false);
    });
  };

  self.isElementInViewport = function (el, isInit, ctx) {
    if (!isInit) {
      var rect = el.getBoundingClientRect();
      window.addEventListener('scroll', function () {
        if (el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().top > 0 && !self.state.in_view()) {
          m.startComputation();
          self.state.is_loading(true);
          m.endComputation();
          self.loadMore();
          self.state.in_view(true);
          return true;
        } else if (el.getBoundingClientRect().bottom < 0 && self.state.in_view()) {
          self.state.in_view(false);
          return false;
        } else if (el.getBoundingClientRect().top > window.innerHeight && self.state.in_view()) {
          self.state.in_view(false);
          return false;
        }
      });
    }
  };
};
vhxm.components.shared.load_more.state = function () {
  this.in_view = m.prop(false);
  this.is_loading = m.prop(false);
};
vhxm.components.shared.load_more.ui.container = {
  controller: function controller(opts) {
    return new vhxm.components.shared.load_more.controller(opts);
  },
  view: function view(ctrl, opts) {
    var self = this;
    return m('a..btn.btn-vimeo-secondary-outline' + (ctrl.state.is_loading() ? '.is-loading' : ''), {
      config: opts.onscroll ? ctrl.isElementInViewport : '',
      onclick: !opts.onscroll ? function (e) {
        e.preventDefault();
        ctrl.loadMore();
      } : '',
      href: '#'
    }, opts.label ? opts.label : 'Show More');
  }

};
vhxm.components.shared.modal.controller = function (opts) {
  var self = this;

  self.setupStateType = function (type, opts) {
    if (type && opts[type]) {
      $.each(opts[type], function (key, item) {
        if (key.match(/Callback/)) {
          vhxm.components.shared.modal.state[type][key] = item;
        } else {
          vhxm.components.shared.modal.state[type][key](item);
        }
      });
    }
  };

  self.setupState = function (opts) {
    $.each(opts, function (key, item) {
      if (!key.match(/content|actions/)) {
        vhxm.components.shared.modal.state[key](item);
      }
    });

    self.setupStateType('actions', opts);
    self.setupStateType('content', opts);
  };
};vhxm.components.shared.modal.open = function () {
  vhxm.components.shared.modal.state.onOpen()();
  vhxm.components.shared.modal.state.isOpen(true);
  m.redraw();
};

vhxm.components.shared.modal.close = function () {
  vhxm.components.shared.modal.state.isOpen(false);
  m.redraw();
  vhxm.components.shared.modal.state.onClose()();
};

vhxm.components.shared.modal.setTo = function (opts) {
  var ctrl = new vhxm.components.shared.modal.controller();
  m.startComputation();
  ctrl.setupState(opts);
  m.endComputation();
};

$(document).on('keyup', function (ev) {
  if (ev.keyCode === 27 && vhxm.components.shared.modal.state.isOpen()) {
    vhxm.components.shared.modal.close();
  }
});
vhxm.components.shared.modal.state = {
  isOpen: m.prop(false),
  size: m.prop('medium'),
  hasActions: m.prop(2),
  onOpen: m.prop(function () {}),
  onClose: m.prop(function () {}),
  content: {
    title: m.prop(null),
    body: m.prop(null)
  },
  actions: {
    left: m.prop('Cancel'),
    right: m.prop('OK'),
    single: m.prop('OK'),
    template: m.prop(null),
    leftCallback: vhxm.components.shared.modal.close,
    rightCallback: function rightCallback() {},
    singleCallback: vhxm.components.shared.modal.close
  }
};vhxm.components.shared.modal.ui.container = {
  controller: function controller(opts) {
    var ctrl = new vhxm.components.shared.modal.controller();
    ctrl.setupState(opts);
  },
  view: function view(ctrl, opts) {
    var size = '.c-modal--' + vhxm.components.shared.modal.state.size();

    return m('.c-modal' + (vhxm.components.shared.modal.state.isOpen() ? '.is-open' : ''), [m('.c-modal-container' + (vhxm.components.shared.modal.state.hasActions() ? '.c-modal--has-actions' : '') + size, {
      config: function config(el) {
        var margin = -$(el).outerHeight() / 2;
        $(el).css('marginBottom', margin + 'px');
      }
    }, [vhxm.components.shared.modal.state.content.title() ? m.component(vhxm.components.shared.modal.ui.header) : '', vhxm.components.shared.modal.state.content.body() ? m.component(vhxm.components.shared.modal.ui.body) : '', vhxm.components.shared.modal.state.hasActions() ? m.component(vhxm.components.shared.modal.ui.actions) : '', m.component(vhxm.components.shared.modal.ui.close)]), vhxm.components.shared.modal.state.isOpen() ? m('.c-modal-bg', {
      onclick: vhxm.components.shared.modal.close
    }) : '']);
  }
};

vhxm.components.shared.modal.ui.close = {
  view: function view() {
    return m('.c-modal--close' + (vhxm.components.shared.size.state.smallOnly() ? '.is-hidden' : ''), {
      onclick: vhxm.components.shared.modal.close
    }, [m('i.icon.icon--xsmall.icon-x-white')]);
  }
};

vhxm.components.shared.modal.ui.header = {
  view: function view() {
    return m('.c-modal--header.padding-medium', [m('span', [m('.h2.head-4.head.secondary.text-left', vhxm.components.shared.modal.state.content.title())])]);
  }
};

vhxm.components.shared.modal.ui.body = {
  view: function view() {
    return m('.c-modal--body.padding-medium', [m.component(vhxm.components.shared.modal.state.content.body())]);
  }
};

vhxm.components.shared.modal.ui.actions = {
  view: function view() {
    var singleAction = parseInt(vhxm.components.shared.modal.state.hasActions(), 10) === 1;
    if (vhxm.components.shared.modal.state.actions.template()) {
      return m('.c-modal--actions', [m.component(vhxm.components.shared.modal.state.actions.template())]);
    } else {
      return m('.c-modal--actions', [m('.padding-small.text-center', [!singleAction ? m('.btn.btn--' + (singleAction ? 'fill' : 'half') + '.btn-gray', {
        onclick: vhxm.components.shared.modal.state.actions.leftCallback
      }, vhxm.components.shared.modal.state.actions.left()) : '', m('.btn.btn--' + (singleAction ? 'fill' : 'half') + '.btn-teal', {
        onclick: vhxm.components.shared.modal.state.actions[singleAction ? 'singleCallback' : 'rightCallback']
      }, vhxm.components.shared.modal.state.actions[singleAction ? 'single' : 'right']())])]);
    }
  }
};
vhxm.components.shared.radio.controller = function (opts) {
  var self = this;
  opts = opts || {};

  if (typeof opts.checkedByDefault === 'undefined') {
    opts.checkedByDefault = true;
  }
  self.state = new vhxm.components.shared.radio.state();

  opts.items.map(function (item) {
    if (item.checked) {
      self.state.isChecked(item.value);
    }
  });

  if (opts.checkedByDefault && !self.state.isChecked()) {
    self.state.isChecked(opts.items[0].value);
  }

  if (opts.api) {
    opts.api(self);
  }
};
vhxm.components.shared.radio.state = function () {
  this.isChecked = m.prop(null);
};vhxm.components.shared.radio.ui.container = {
  controller: vhxm.components.shared.radio.controller,
  view: function view(ctrl, opts) {
    return m('form.form', [m('ul.radio-' + (opts.color ? opts.color : 'teal') + (opts.stacked ? '.radio--stacked' : opts.buttons ? '.radio--buttons' : ''), [opts.items.map(function (item, index) {
      var is_checked = ctrl.state.isChecked() === item.value;
      return m('li', [m('input', {
        id: opts.name + '-' + index,
        type: 'radio',
        onchange: function onchange(event) {
          ctrl.state.isChecked(item.value);
          if (opts.onchange) {
            opts.onchange(event);
          }
        },
        name: opts.name,
        value: item.value,
        checked: is_checked
      }), m('label' + (opts.buttons ? '.btn-' + (is_checked ? 'teal' : 'gray') + '.btn--fill.btn-radio.margin-bottom-medium' : ''), {
        for: opts.name + '-' + index
      }, [m.component(vhxm.components.shared.radio.ui.icon), m('span.radio--label.text-left' + (opts.buttons ? '.padding-left-small' : '') + (opts.stacked ? '.truncate.truncate--xlarge' : ''), {
        style: {
          marginTop: !opts.buttons || opts.buttons && item.label.title ? '0px' : '8px'
        }
      }, opts.buttons ? [m('strong.text-2' + (is_checked ? '.text--white' : '.text--navy'), item.label.title ? item.label.title : item.label), item.label.descriptor ? m('p.text-4' + (is_checked ? '.text--white' : ''), item.label.descriptor) : ''] : item.label)]), item.template ? m('div.clear.padding-top-xsmall', [item.template]) : '']);
    })])]);
  }
};

vhxm.components.shared.radio.ui.icon = {
  view: function view() {
    return m('span.radio--icon', [m('i.circle-top', [m('span')]), m('i.circle-bottom', [m('span')])]);
  }
};
vhxm.components.shared.search_input.controller = function (opts) {
  var self = this;

  self.timeout = null;
  self.state = new vhxm.components.shared.search_input.state();
  self.state.value(opts.value ? opts.value : null);

  self.debounceSearch = function (event) {
    if (self.timeout) {
      clearTimeout(self.timeout);
    }

    self.timeout = setTimeout(function () {
      self.fetchResults(event.target.value);
      self.timeout = null;
    }, 300);
  };

  self.handleInput = function (event) {
    self.debounceSearch(event);
  };

  self.fetchResults = function (query) {
    opts.search(query, function (data) {
      opts.callback(data);
    });
  };

  self.updateQueryParam = function (query) {
    var loc = window.location;
    var search = void 0;
    var href = loc.pathname;

    if (query.length && window.history && window.history.replaceState) {
      search = loc.search.length && loc.search.match(/\?/) ? loc.search : '?';
      href += search.match(/q\=/) ? search.replace(/q\=[^&]*/, 'q=' + query) : search + '&q=' + query;
      history.replaceState({}, '', href);
    } else {
      search = loc.search.replace(/q\=[^&]*/, '');
      href += search.length === 1 ? '' : search;
      history.replaceState({}, '', href);
    }
  };
};vhxm.components.shared.search_input.state = function () {
  this.value = m.prop(null);
};
vhxm.components.shared.search_input.ui.container = {
  controller: function controller(opts) {
    return new vhxm.components.shared.search_input.controller(opts);
  },
  view: function view(ctrl, opts) {
    return m('input.c-select--search.padding-right-large.icon-search-black.icon--xsmall', {
      config: opts.config ? opts.config : '',
      type: 'text',
      value: ctrl.state.value(),
      placeholder: opts.placeholder ? opts.placeholder : 'Search',
      onkeydown: function oninput(event) {
        if (parseInt(event.which, 10) === 13 || parseInt(event.keyCode, 10) === 13) {
          ctrl.fetchResults(event.target.value);
          ctrl.timeout = null;
        }
      },
      oninput: function oninput(event) {
        ctrl.state.value(event.target.value);
        if (opts.queryParam) {
          ctrl.updateQueryParam(event.target.value);
        }
        if (opts.oninput) {
          opts.oninput(event);
        }
        ctrl.handleInput(event);
      }
    });
  }
};
vhxm.components.shared.select.controller = function (opts) {
  var self = this;
  var api = opts.api ? opts.api : m.prop(null);

  self.init = function () {
    self.state = new vhxm.components.shared.select.state();
    self.model = new vhxm.components.shared.select.model();

    self.type = opts.type || 'standard';
    self.multiselect = opts.multiselect || false;
    self.caret = opts.caret || 'right';
    self.position = opts.position || m.prop('bottom');
    self.model.items = opts.items;

    if (opts.selected) {
      opts.selected.map(function (item) {
        self.selectItem(item, true);
      });
    }

    self.state.focusInput(opts.focusOnOpen ? opts.focusOnOpen : true);

    if (opts.isProcessing) {
      self.state.isProcessing = opts.isProcessing;
    }
    if (opts.onSelect) {
      self.state.onSelect = opts.onSelect;
    }
    if (opts.onAction) {
      self.state.onAction = opts.onAction;
    }
    if (opts.onClose) {
      self.state.onClose = opts.onClose;
    }

    $(document).on('click', function (event) {
      var is_dropdown = $(event.target).closest('.c-select--container').length;

      if (!is_dropdown && self.state.isDropdownOpen()) {
        m.startComputation();
        self.state.isDropdownOpen(false);
        self.state.onClose();
        m.endComputation();
      }
    });

    api(self);

    $(window).on('quartz:select:open', function () {
      self.state.isDropdownOpen(false);
    });
  };

  self.selectedLabel = function () {
    var selected = opts.placeholder ? opts.placeholder : 'Select...';

    if (self.state.selected()) {
      if (Object.keys(self.state.selected()).length > 1) {
        selected = 'Multiple items selected';
      } else {
        var key = Object.keys(self.state.selected())[0];
        selected = self.state.selected()[key].label;
      }
    }

    return selected;
  };

  self.handleKeydown = function (event) {
    var container = $(event.target).closest('.c-select--container');
    var options = container.find('.c-select--options');
    var input = container.find('.c-select--input-container input');

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
          if (self.state.highlightIndex() >= 0) {
            self.selectItem(self.model.items()[self.state.highlightIndex()]);
          }
        }
  };

  self.handleClick = function (event) {
    event.preventDefault();
    var container = $(event.target).closest('.c-select--container').find('.c-select--options');

    if (!self.state.isDropdownOpen()) {
      self.state.focusInput(opts.focusOnOpen ? opts.focusOnOpen : true);
      $(window).trigger('quartz:select:open');
    }

    self.state.isDropdownOpen(!self.state.isDropdownOpen());
    if (!self.state.isDropdownOpen()) {
      self.state.onClose();
    }
    self.scrollOptionsList(container);
  };

  self.handleInput = function (event) {
    self.state.highlightIndex(-1);
    self.state.searchInputValue(event.target.value);
    self.state.isLoading(true);
  };

  self.selectItem = function (item, isInit) {
    var selected = void 0;
    var obj = {
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
    } else {
      selected[item[opts.prop_map.key]] = obj;
      self.state.onSelect(obj, self.state.selected(), 'added');
    }

    self.state.selected(selected);

    if (!isInit) {
      self.state.isDropdownOpen(self.multiselect ? true : false);
      if (!self.multiselect) {
        self.state.onClose();
      }
    }

    if (self.multiselect) {
      self.state.highlightIndex(-1);
    }
  };

  self.handleAction = function (event) {
    event.preventDefault();
    m.startComputation();
    self.state.footerLoading(true);
    m.endComputation();

    self.state.onAction(function () {
      m.startComputation();
      self.state.searchInputValue('');
      self.state.footerLoading(false);
      self.state.isDropdownOpen(false);
      self.state.onClose();
      m.endComputation();
    });
  };

  self.searchCallback = function (data) {
    m.startComputation();
    self.model.items(data);
    self.state.isLoading(false);
    m.endComputation();
  };

  self.setHighlightedState = function (direction, container, input) {
    if (direction === 'down') {
      if (self.state.highlightIndex() < self.model.items().length - 1) {
        self.state.highlightIndex(self.state.highlightIndex() + 1);
      } else {
        self.state.highlightIndex(self.model.items().length - 1);
      }
    } else if (direction === 'up') {
      if (self.state.highlightIndex() > 0) {
        self.state.highlightIndex(self.state.highlightIndex() - 1);
      } else if (self.state.highlightIndex() <= 0) {
        self.state.highlightIndex(-1);
        input.focus();
      }
    }
    self.scrollOptionsList(container);
  };

  self.scrollOptionsList = function (container) {
    if (container.length) {
      container.eq(0).scrollTop(self.state.optionHeight() * self.state.highlightIndex());
    }
  };

  if (opts.init) {
    self.init();
  }
};
vhxm.components.shared.select.model = function () {
  this.items = m.prop(null);
};
vhxm.components.shared.select.state = function () {
  this.selected = m.prop(null);
  this.highlighted = m.prop({});
  this.isDropdownOpen = m.prop(false);
  this.highlightIndex = m.prop(-1);
  this.optionHeight = m.prop(0);
  this.isLoading = m.prop(false);
  this.searchInputValue = m.prop('');
  this.footerLoading = m.prop(false);
  this.focusInput = m.prop(true);
  this.isProcessing = m.prop([]);
  this.onSelect = function () {};
  this.onClose = function () {};
  this.onAction = function (done) {
    done();
  };
};
vhxm.components.shared.select.ui.container = {
  controller: function controller(opts) {
    opts.init = true;
    return new vhxm.components.shared.select.controller(opts);
  },
  view: function view(ctrl, opts) {
    var options = opts.search ? '.has-search' : '';
    options += opts.trigger ? '.has-trigger' : '';
    options += opts.action ? '.has-action' : '';
    options += opts.type === 'media' ? '.has-media' : '';
    options += opts.inline ? '.inline' : '';
    options += '.caret--' + (ctrl.position() === 'top' ? 'bottom' : 'top') + '-' + ctrl.caret;

    if (opts.trigger) {
      opts.trigger.attrs.onclick = ctrl.handleClick;
      opts.trigger.attrs.className = opts.trigger.attrs.className ? opts.trigger.attrs.className + ' c-select--trigger' : 'c-select--trigger';
    }

    return m('.c-select--container.relative.form' + options, {
      onmouseleave: function onmouseleave() {
        ctrl.state.highlightIndex(-1);
      },
      onkeydown: ctrl.handleKeydown
    }, [opts.trigger ? opts.trigger : m('a.c-select--trigger.truncate.btn-dropdown-' + (opts.color ? opts.color : 'gray') + '.btn--fill' + (ctrl.state.isDropdownOpen() ? '.is-active' : ''), {
      href: '#',
      onclick: ctrl.handleClick
    }, ctrl.selectedLabel()), m('.c-select--dropdown.bg-white.border.radius.fill-width' + (ctrl.state.isDropdownOpen() ? '.is-open' : ''), {
      style: {
        top: opts.offset ? opts.offset + 'px' : '40px'
      },
      config: function config(el) {
        if (ctrl.position() === 'top') {
          el.style.top = -(el.offsetHeight + 10) + 'px';
        }
      }
    }, [opts.search ?
    // if search is enabled
    m('.c-select--input-container.padding-medium.absolute.bg-white.fill-width.radius', [m.component(vhxm.components.shared.search_input.ui.container, {
      config: function config(el, init) {
        if (ctrl.state.focusInput()) {
          setTimeout(function () {
            el.focus();
            ctrl.state.focusInput(false);
          }, 10);
        }
      },
      callback: ctrl.searchCallback,
      search: function search(query, callback) {
        if (ctrl.state.highlightIndex() === -1) {
          opts.search(query, callback);
        }
      },
      placeholder: 'Search',
      oninput: ctrl.handleInput
    })]) : '', m.component(vhxm.components.shared.select.ui.list.container, opts, ctrl), opts.action && ctrl.state.searchInputValue().length ?
    // show Create New Category dropdown footer action
    m('.c-select--footer.border-top', [m('a.btn-teal.btn--fill' + (ctrl.state.footerLoading() ? '.is-loading' : ''), {
      onclick: ctrl.handleAction,
      href: '#'
    }, opts.action + (ctrl.state.searchInputValue().length ? ' \'' + ctrl.state.searchInputValue() + '\'' : ''))]) : ''])]);
  }
};
vhxm.components.shared.sidebar.controller = function (opts) {
  var self = this;
  self.opts = opts;

  if (self.opts) {
    if (self.opts.onInit) {
      self.opts.onInit();
    }
    if (self.opts.loadedState) {
      vhxm.components.shared.sidebar.setLoadedState(self.opts.loadedState);
    }
    if (opts.template) {
      vhxm.components.shared.sidebar.setTemplate(self.opts.template);
    }
    if (opts.onOpen) {
      vhxm.components.shared.sidebar.state.onOpen = self.opts.onOpen;
    }
    if (opts.onClose) {
      vhxm.components.shared.sidebar.state.onClose = self.opts.onClose;
    }
    if (opts.onBeforeClose) {
      vhxm.components.shared.sidebar.state.onBeforeClose = self.opts.onBeforeClose;
    }
  }

  self.documentClickHandler = function (event) {

    var is_sidebar = !$(event.target).closest('body').length || $(event.target).hasClass('c-sidebar') || $(event.target).closest('[data-flash], tr.is-clickable, .c-sidebar' + (self.opts && self.opts.clickBlackList ? ', ' + self.opts.clickBlackList : '')).length;

    if (!is_sidebar && vhxm.components.shared.sidebar.state.isOpen()) {
      vhxm.components.shared.sidebar.toggle('close');
    }
  };

  self.animatorIn = function (elem, isInit) {
    if (!isInit) {
      $(elem).velocity('stop', true);
      var callback = function callback() {
        $(document).on('keyup', self.esc);
        $(document).on('click', self.documentClickHandler);
        vhxm.components.shared.sidebar.state.onOpen();
        vhxm.components.shared.sidebar.state.skipTransition(true);
      };

      if (vhxm.components.shared.sidebar.state.isOpen()) {
        if (vhxm.components.shared.sidebar.state.skipTransition()) {
          elem.style.right = '0px';
          callback();
        } else {
          $(elem).velocity({
            right: 0
          }, {
            duration: vhxm.components.shared.sidebar.state.skipTransition() ? 0 : 500,
            easing: [0.19, 1, 0.22, 1],
            complete: callback
          });
        }
      }
    }
  };

  self.animatorOut = function (elem, isInit) {
    $(elem).velocity('stop', true);
    $(elem).velocity({
      right: '-470'
    }, {
      duration: 500,
      easing: [0.19, 1, 0.22, 1],
      complete: function complete() {
        vhxm.components.shared.sidebar.state.onClose();
        $(document).off('keyup', self.esc);
        $(document).off('click', self.documentClickHandler);
        vhxm.components.shared.sidebar.state.skipTransition(false);
      }
    });
  };

  self.esc = function (event) {
    if (event.keyCode === 27) {
      vhxm.components.shared.sidebar.toggle('close');
    }
  };
};vhxm.components.shared.sidebar.toggle = function (state, route) {
  state = state === 'open' ? true : false;

  var done = function done() {
    vhxm.components.shared.sidebar.state.isOpen(state);
    if (route) {
      return m.route(route);
    }

    m.redraw();
  };

  if (vhxm.components.shared.sidebar.state.isOpen() && !state || !vhxm.components.shared.sidebar.state.isOpen() && state) {
    if (!state) {
      vhxm.components.shared.sidebar.state.onBeforeClose(done);
    } else {
      done();
    }
  }
};

vhxm.components.shared.sidebar.setTemplate = function (template) {
  vhxm.components.shared.sidebar.state.template(template);
};

vhxm.components.shared.sidebar.setLoadedState = function (obj) {
  if (!!(obj && obj.constructor && obj.call && obj.apply)) {
    vhxm.components.shared.sidebar.state.isLoaded = obj;
  } else {
    throw 'Loaded State must be a Mithril prop.';
  }

  m.redraw();
};
vhxm.components.shared.sidebar.state = {
  isOpen: m.prop(false),
  isLoaded: m.prop(false),
  skipTransition: m.prop(false),
  template: m.prop(null),
  onBeforeClose: function onBeforeClose(done) {
    done();
  },
  onClose: function onClose() {},
  onOpen: function onOpen() {}
};
vhxm.components.shared.sidebar.ui.container = {
  controller: vhxm.components.shared.sidebar.controller,
  view: function view(ctrl) {
    return m('.c-sidebar.bg-white.shadow--gray' + (vhxm.components.shared.sidebar.state.isLoaded() ? '' : '.loader-slate.loader--cover-hide.loader--large.is-loading'), {
      config: vhxm.components.shared.sidebar.state.isOpen() ? ctrl.animatorIn : ctrl.animatorOut
    }, vhxm.components.shared.sidebar.state.isLoaded() ? [m('a.c-sidebar--close.icon-circle.icon-x-navy.icon--xsmall', {
      onclick: function onclick() {
        setTimeout(function () {
          vhxm.components.shared.sidebar.toggle('close');
        }, 0);
      }
    }), m('div', {
      style: { opacity: 0 },
      config: function config(elem) {
        $(elem).velocity({ opacity: '1' }, { duration: 400 });
      }
    }, [m.component(vhxm.components.shared.sidebar.state.template())])] : '');
  }
};
vhxm.components.shared.size.state = {
  media: m.prop(null),
  mediumUp: m.prop(null),
  largeUp: m.prop(null),
  smallOnly: m.prop(null),
  smallToMedium: m.prop(null),
  mediumOnly: m.prop(null),
  smediumOnly: m.prop(null),
  largeOnly: m.prop(null)
};

$(window).on('resize', function () {
  m.startComputation();
  var size = window.getComputedStyle(document.body, ':after').getPropertyValue('content').replace(/['"]/g, '');
  vhxm.components.shared.size.state.media(size);
  vhxm.components.shared.size.state.mediumUp(!!size.match(/medium|large/));
  vhxm.components.shared.size.state.smallToMedium(!!size.match(/small|smedium|medium/));
  vhxm.components.shared.size.state.largeUp(!!size.match(/large|xlarge/));
  vhxm.components.shared.size.state.smallOnly(size === 'small');
  vhxm.components.shared.size.state.mediumOnly(size === 'medium');
  vhxm.components.shared.size.state.smediumOnly(size === 'smedium');
  vhxm.components.shared.size.state.largeOnly(!!size.match(/large/));
  m.endComputation();
});

$(window).trigger('resize');
vhxm.components.shared.tag.controller = function (opts) {
  var self = this;

  self.state = new vhxm.components.shared.tag.state();

  if (opts.isProcessing) {
    self.state.isProcessing = opts.isProcessing;
  }
  if (opts.onShow) {
    self.state.onShow = opts.onShow;
  }
  if (opts.onRemove) {
    self.state.onRemove = opts.onRemove;
  }

  self.formatLabelString = function (opts) {
    if (opts.label && opts.label_length && opts.label.length > opts.label_length) {
      return opts.label.substr(0, opts.label_length).trim() + '...';
    }

    return opts.label;
  };
};
vhxm.components.shared.tag.state = function () {
  this.isHover = m.prop(false);
  this.isRemoveHover = m.prop(false);
  this.isProcessing = m.prop(false);
  this.onShow = function () {};
  this.onRemove = function () {};
};
vhxm.components.shared.tag.ui.container = {
  controller: vhxm.components.shared.tag.controller,
  view: function view(ctrl, opts) {
    return m('span.inline.relative.c-tag' + (ctrl.state.isHover() ? '.is-hover' : ''), {
      onmouseover: function onmouseover() {
        ctrl.state.isHover(true);
      },
      onmouseout: function onmouseout() {
        ctrl.state.isHover(false);
      }
    }, [m('button.c-tag--button' + (ctrl.state.isHover() ? '.btn-teal.is-hover' : '.btn-gray') + (ctrl.state.isProcessing() ? '.is-processing' : ''), {
      onclick: function onclick(event) {
        event.preventDefault();
        ctrl.state.onShow(event);
      }
    }, opts.label ? ctrl.formatLabelString(opts) : 'Tag'), m('a.c-tag--remove.icon--center.icon-x-white.icon--xxsmall' + (ctrl.state.isRemoveHover() ? '.btn-red' : '.btn-teal'), {
      onclick: function onclick(event) {
        event.preventDefault();
        ctrl.state.onRemove(event);
      },
      onmouseover: function onmouseover() {
        ctrl.state.isRemoveHover(true);
      },
      onmouseout: function onmouseout() {
        ctrl.state.isRemoveHover(false);
      }
    })]);
  }
};vhxm.components.shared.autosuggest.ui.list.controller = function (opts, parent) {
  var self = this;

  self.parent = new vhxm.components.shared.autosuggest.controller(opts);
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function () {
    return self.model.items() && self.model.items().length > 1;
  };

  self.handleItemClick = function (event, item) {
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
  controller: function controller(opts, parent) {
    return new vhxm.components.shared.autosuggest.ui.list.controller(opts, parent);
  },
  view: function view(ctrl) {
    return m('ul.c-autosuggest--options.margin-left-reset', {
      config: function config(el) {
        ctrl.state.optionsHeight($(el).outerHeight());
      }
    }, [ctrl.model.items() ? ctrl.model.items().map(function (item, index) {
      return m('li.c-autosuggest--option.padding-horizontal-medium.padding-horz-medium.padding-vert-small.padding-vertical-small' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
        config: function config(el) {
          ctrl.state.optionHeight($(el).outerHeight());
        },
        onmouseover: function onmouseover() {
          ctrl.state.highlightIndex(index);
        },
        onclick: function onclick(event) {
          ctrl.handleItemClick(event, item);
        }
      }, item);
    }) : '']);
  }
};
/* ................................................
  Media Item Component
.................................................*/
vhxm.components.shared.select.ui.item_media = {
  view: function view(c, params) {
    var item = params.item;
    var index = params.index;
    var ctrl = params.ctrl;
    var opts = params.opts;

    return m('.c-media-item--container.padding-horz-medium.padding-vert-small.clearfix' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
      config: function config(el) {
        ctrl.state.optionHeight($(el).outerHeight());
      },
      onmouseover: function onmouseover() {
        ctrl.state.highlightIndex(index);
      },
      onclick: function onclick(event) {
        ctrl.handleItemClick(event, item);
      }
    }, [m('.c-media-item--image-container.left', [m('div.c-media-item--image.radius.margin-right-medium.img', {
      style: {
        width: '70px',
        height: '40px',
        backgroundImage: 'url(' + item[opts.prop_map.image] + ')'
      }
    })]), m('.c-media-item--content.clearfix.left', [m('p.text--navy.line-medium.truncate.block', ctrl.formatLabelString({
      label: item[opts.prop_map.label],
      label_length: opts.label_length
    })), m('p.text--gray.line-medium.truncate.block', item[opts.prop_map.descriptor])]), ctrl.parent.multiselect ? m('.c-media-item--action.clearfix.right', [ctrl.state.isProcessing().indexOf(item[opts.prop_map.value]) >= 0 ? m('.c-item-toggle.loader-white.loader--small') : m('.c-item-toggle.icon--xsmall.icon-check-navy.border' + (ctrl.state.selected() && ctrl.state.selected()[item[opts.prop_map.key]] ? '.is-selected.icon-check-navy' : '.icon-plus-thin-white'))]) : '']);
  }
};
/* ................................................
  Standard Item Component
.................................................*/
vhxm.components.shared.select.ui.item_standard = {
  view: function view(c, params) {
    var item = params.item;
    var index = params.index;
    var ctrl = params.ctrl;
    var opts = params.opts;

    return m('li.c-select--option.padding-horz-medium' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
      config: function config(el) {
        ctrl.state.optionHeight($(el).outerHeight());
      },
      onmouseover: function onmouseover() {
        ctrl.state.highlightIndex(index);
      },
      onclick: function onclick(event) {
        ctrl.handleItemClick(event, item);
      }
    }, [m('i.icon.icon--xsmall.right.margin-top-xsmall.margin-left-small' + (ctrl.state.selected() && ctrl.state.selected()[item[opts.prop_map.key]] ? '.is-selected.icon-check-navy' : '')), m('span.c-select--item-label.text--navy', item[opts.prop_map.label]), item[opts.prop_map.descriptor] ? m('span.right.text--gray', item[opts.prop_map.descriptor]) : '']);
  }
};
vhxm.components.shared.select.ui.list.controller = function (opts, parent) {
  var self = this;

  self.parent = parent;
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function () {
    return self.model.items() && self.model.items().length > 0;
  };

  self.handleItemClick = function (event, item) {
    self.parent.selectItem(item);
  };

  self.formatLabelString = function (opts) {
    if (opts.label && opts.label_length && opts.label.length > opts.label_length) {
      return opts.label.substr(0, opts.label_length).trim() + '...';
    }

    return opts.label;
  };
};
/* ................................................
  Select List Component
.................................................*/
vhxm.components.shared.select.ui.list.container = {
  controller: function controller(opts, parent) {
    return new vhxm.components.shared.select.ui.list.controller(opts, parent);
  },
  view: function view(ctrl, opts) {
    return m('ul.c-select--options.margin-left-reset.loader-slate.loader--transparent' + (ctrl.state.isLoading() ? '.is-loading' : ''), [ctrl.hasItems() ? ctrl.model.items().map(function (item, index) {
      return m.component(vhxm.components.shared.select.ui['item_' + ctrl.parent.type], {
        item: item,
        index: index,
        ctrl: ctrl,
        opts: opts
      });
    }) : m.component(vhxm.components.shared.select.ui.list.empty, opts)]);
  }
};

/* List Empty
.................................................*/
vhxm.components.shared.select.ui.list.empty = {
  view: function view() {
    return m('li.padding-horz-large.padding-top-small.padding-bottom-medium.text--gray.text-center', 'No results');
  }
};
vhxm.components.shared.autosuggest.controller = function (opts) {
  var self = this;

  self.timeout = null;

  self.init = function () {
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

    $(document).on('click', function (event) {
      var is_list = $(event.target).closest('.c-autosuggest--container').length;

      if (!is_list && self.state.hasFocus()) {
        m.startComputation();
        self.state.hasFocus(false);
        self.model.items(null);
        m.endComputation();
      }
    });
  };

  self.isListOpen = function () {
    return self.model.items() && self.state.hasFocus();
  };

  self.fetchResults = function (query) {
    self.state.highlightIndex(0);

    m.startComputation();
    if (opts.data()) {
      var result = [];
      opts.data().map(function (item) {
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
      opts.search(query, function (data) {
        self.model.items(data.length ? data : null);
        m.endComputation();
      });
    }
  };

  self.handleKeydown = function (e) {
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

  self.handleClick = function (event) {
    event.preventDefault();
    self.state.hasFocus(true);
  };

  self.handleInput = function (event) {
    event.preventDefault();
    self.state.hasFocus(true);
    self.state.selected(event.target.value);
    opts.onselect(self.state.selected(), false);
    self.debounceSearch(event);
  };

  self.setHighlightedState = function (direction, container) {
    if (self.model.items()) {
      if (direction === 'down') {
        self.state.highlightIndex(self.state.highlightIndex() + 1);
        if (self.state.highlightIndex() < self.model.items().length) {
          self.state.scrollIndex(self.state.scrollIndex() + 1);
        } else {
          self.state.highlightIndex(self.model.items().length - 1);
        }
      } else if (direction === 'up') {
        self.state.highlightIndex(self.state.highlightIndex() - 1);
        if (self.state.highlightIndex() > 0) {
          self.state.scrollIndex(self.state.scrollIndex() - 1);
        } else {
          self.state.highlightIndex(0);
        }
      }
      self.scrollOptionsList(container);
    }
  };

  self.scrollOptionsList = function (container) {
    if (container.length) {
      container.eq(0).scrollTop(self.state.optionHeight() * self.state.highlightIndex());
    }
  };

  self.debounceSearch = function (event) {
    if (self.timeout) {
      clearTimeout(self.timeout);
    }

    self.timeout = setTimeout(function () {
      self.fetchResults(event.target.value);
      self.timeout = null;
    }, 300);
  };

  if (opts.init) {
    self.init();
  }
};
vhxm.components.shared.autosuggest.model = function () {
  this.items = m.prop([]);
};
vhxm.components.shared.autosuggest.state = function () {
  this.selected = m.prop({});
  this.highlighted = m.prop({});
  this.highlightIndex = m.prop(null);
  this.scrollIndex = m.prop(0);
  this.optionHeight = m.prop(0);
  this.optionsHeight = m.prop(0);
  this.hasFocus = m.prop(false);
};
vhxm.components.shared.autosuggest.ui.container = {
  controller: function controller(opts) {
    opts.init = true;
    return new vhxm.components.shared.autosuggest.controller(opts);
  },
  view: function view(ctrl, opts) {
    if (opts.reset()) {
      ctrl.state.selected(null);
      opts.reset(false);
    }
    return m('.c-autosuggest--container.form', {
      onkeydown: ctrl.handleKeydown,
      onclick: ctrl.handleClick
    }, [m('.c-autosuggest--input-container', [m('input.c-autosuggest--search', {
      config: function config(el) {
        if (ctrl.state.hasFocus()) {
          setTimeout(function () {
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
    })]), m('.c-autosuggest--list' + (ctrl.isListOpen() ? '.is-open' : ''), [m.component(vhxm.components.shared.autosuggest.ui.list.container, opts, ctrl)])]);
  }
};
vhxm.components.shared.avatar.ui = {
  view: function view(ctrl, opts) {
    return m('span.avatar.color-teal.avatar--' + (opts.size ? opts.size : 'medium'), [m('span.avatar-user.user-avatar', {
      style: {
        backgroundImage: 'url(' + opts.image + ')'
      }
    })]);
  }
};vhxm.components.shared.checkbox.ui.container = {
  view: function view(ctrl, opts) {
    return m('fieldset.checkbox.' + (opts.size ? opts.size : 'medium') + (opts.type === 'toggle' ? '.alt' : ''), [m('input[type=checkbox]', {
      checked: opts.checked,
      name: opts.name,
      value: opts.value,
      onchange: opts.onchange,
      id: opts.name
    }), m('label', {
      for: opts.name
    }, [opts.type === 'toggle' ? m('span.checkbox--contain', [m('span.checkbox--icon'), m('span.checkbox--circle', [m('i.circle-top', m.trust('<span></span>')), m('i.circle-bottom', m.trust('<span></span>'))]), m('span.checkbox--label')]) : m('span.checkbox--contain', [m('span.checkbox--icon', [m('span.checkbox-animate')]), opts.label ? m('span.checkbox--label', opts.label) : ''])])]);
  }
};
vhxm.components.shared.filter.constants = Object.freeze({
  date: {
    title: 'Date'
  },
  location: {
    title: 'Location'
  }
});vhxm.components.shared.filter.controller = function (opts) {
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
    if ($('.c-filter--container.is-open').length && !$(event.target).closest('.c-filter--applied').length && !$(event.target).closest('.c-filter--trigger-container').length) {
      m.startComputation();
      self.state.dropdown.isOpen(false);
      m.endComputation();
    }
  });
};vhxm.components.shared.filter.model = function () {};
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

    return m('.c-filter--container.dropdown.dropdown--' + (opts.size ? opts.size : 'large') + (ctrl.state.dropdown.isOpen() ? '.is-open' : ''), [m('div.row', [m('.c-filter--trigger-container.small-' + (vhxm.components.shared.size.state.smallToMedium() ? '5' : '3') + '.column.pull.padding-reset', [m('a.c-filter--trigger.block.radius.head-5.text--gray' + (ready_to_apply ? '.text-center' : '.icon--right.icon-' + (ctrl.state.dropdown.isOpen() ? 'chevron-up-navy' : 'chevron-down-gray') + '.icon--xxsmall.margin-right-medium.fill-width'), {
      onclick: ctrl.handleApplyClick
    }, ready_to_apply ? 'Apply' : 'Filters'), m.component(vhxm.components.shared.filter.ui.dropdown, opts, ctrl)]), m('.c-filter--applied-container.small-' + (vhxm.components.shared.size.state.smallToMedium() ? '11' : '13') + '.column.pull.padding-reset', [m('.margin-left-small.padding-left-medium.border-left', [ctrl.state.applied() && ctrl.state.selected().length ? m.component(vhxm.components.shared.filter.ui.applied, opts, ctrl) : m('span.c-filter--label.text--gray', opts.label ? opts.label : m.trust('&nbsp;'))])])])]);
  }
};

vhxm.components.shared.filter.ui.applied = {
  controller: function controller(opts, parent_ctrl) {
    return parent_ctrl;
  },
  view: function view(ctrl) {
    var isSingle = ctrl.state.selected().length <= 1;

    return m('div', [ctrl.state.selected().map(function (item) {
      return m('span.c-filter--applied.inline', [m('a.text--navy' + (isSingle ? '.margin-right-small' : ''), {
        href: '#',
        onclick: function onclick(event) {
          event.preventDefault();
          ctrl.openFilter(item);
        }
      }, item.label), isSingle ? '' : m('a.icon--center.icon-x-navy.icon--xxsmall', {
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
};vhxm.components.shared.header.ui.container = {
  view: function view(ctrl, opts) {
    var has_border = opts.border === false ? false : true;

    return m('header.row.padding-bottom-medium' + (has_border ? '.border-bottom' : ''), [m('.column.small-16.medium-8.large-10', [m('.media', [m('.media-unit.text-top', [m('i.icon.icon--large.icon-' + opts.icon)]), m('.media-unit.media-fill.padding-left-medium', [m('h2.head-3', opts.title), m('p.text.text--gray.small-margin-bottom-small', opts.description ? opts.description : '')])])]), m('.column.small-16.medium-8.large-6.text-right', opts.buttons ? opts.buttons : '')]);
  }
};

vhxm.components.shared.load_more.controller = function (opts) {
  var self = this;

  self.state = new vhxm.components.shared.load_more.state();
  self.action = opts.action ? opts.action : function () {};

  self.loadMore = function () {
    self.state.is_loading(true);
    self.action(function () {
      self.state.is_loading(false);
    });
  };

  self.isElementInViewport = function (el, isInit, ctx) {
    if (!isInit) {
      var rect = el.getBoundingClientRect();
      window.addEventListener('scroll', function () {
        if (el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().top > 0 && !self.state.in_view()) {
          m.startComputation();
          self.state.is_loading(true);
          m.endComputation();
          self.loadMore();
          self.state.in_view(true);
          return true;
        } else if (el.getBoundingClientRect().bottom < 0 && self.state.in_view()) {
          self.state.in_view(false);
          return false;
        } else if (el.getBoundingClientRect().top > window.innerHeight && self.state.in_view()) {
          self.state.in_view(false);
          return false;
        }
      });
    }
  };
};
vhxm.components.shared.load_more.state = function () {
  this.in_view = m.prop(false);
  this.is_loading = m.prop(false);
};
vhxm.components.shared.load_more.ui.container = {
  controller: function controller(opts) {
    return new vhxm.components.shared.load_more.controller(opts);
  },
  view: function view(ctrl, opts) {
    var self = this;
    return m('a..btn.btn-vimeo-secondary-outline' + (ctrl.state.is_loading() ? '.is-loading' : ''), {
      config: opts.onscroll ? ctrl.isElementInViewport : '',
      onclick: !opts.onscroll ? function (e) {
        e.preventDefault();
        ctrl.loadMore();
      } : '',
      href: '#'
    }, opts.label ? opts.label : 'Show More');
  }

};
vhxm.components.shared.modal.controller = function (opts) {
  var self = this;

  self.setupStateType = function (type, opts) {
    if (type && opts[type]) {
      $.each(opts[type], function (key, item) {
        if (key.match(/Callback/)) {
          vhxm.components.shared.modal.state[type][key] = item;
        } else {
          vhxm.components.shared.modal.state[type][key](item);
        }
      });
    }
  };

  self.setupState = function (opts) {
    $.each(opts, function (key, item) {
      if (!key.match(/content|actions/)) {
        vhxm.components.shared.modal.state[key](item);
      }
    });

    self.setupStateType('actions', opts);
    self.setupStateType('content', opts);
  };
};vhxm.components.shared.modal.open = function () {
  vhxm.components.shared.modal.state.onOpen()();
  vhxm.components.shared.modal.state.isOpen(true);
  m.redraw();
};

vhxm.components.shared.modal.close = function () {
  vhxm.components.shared.modal.state.isOpen(false);
  m.redraw();
  vhxm.components.shared.modal.state.onClose()();
};

vhxm.components.shared.modal.setTo = function (opts) {
  var ctrl = new vhxm.components.shared.modal.controller();
  m.startComputation();
  ctrl.setupState(opts);
  m.endComputation();
};

$(document).on('keyup', function (ev) {
  if (ev.keyCode === 27 && vhxm.components.shared.modal.state.isOpen()) {
    vhxm.components.shared.modal.close();
  }
});
vhxm.components.shared.modal.state = {
  isOpen: m.prop(false),
  size: m.prop('medium'),
  hasActions: m.prop(2),
  onOpen: m.prop(function () {}),
  onClose: m.prop(function () {}),
  content: {
    title: m.prop(null),
    body: m.prop(null)
  },
  actions: {
    left: m.prop('Cancel'),
    right: m.prop('OK'),
    single: m.prop('OK'),
    template: m.prop(null),
    leftCallback: vhxm.components.shared.modal.close,
    rightCallback: function rightCallback() {},
    singleCallback: vhxm.components.shared.modal.close
  }
};vhxm.components.shared.modal.ui.container = {
  controller: function controller(opts) {
    var ctrl = new vhxm.components.shared.modal.controller();
    ctrl.setupState(opts);
  },
  view: function view(ctrl, opts) {
    var size = '.c-modal--' + vhxm.components.shared.modal.state.size();

    return m('.c-modal' + (vhxm.components.shared.modal.state.isOpen() ? '.is-open' : ''), [m('.c-modal-container' + (vhxm.components.shared.modal.state.hasActions() ? '.c-modal--has-actions' : '') + size, {
      config: function config(el) {
        var margin = -$(el).outerHeight() / 2;
        $(el).css('marginBottom', margin + 'px');
      }
    }, [vhxm.components.shared.modal.state.content.title() ? m.component(vhxm.components.shared.modal.ui.header) : '', vhxm.components.shared.modal.state.content.body() ? m.component(vhxm.components.shared.modal.ui.body) : '', vhxm.components.shared.modal.state.hasActions() ? m.component(vhxm.components.shared.modal.ui.actions) : '', m.component(vhxm.components.shared.modal.ui.close)]), vhxm.components.shared.modal.state.isOpen() ? m('.c-modal-bg', {
      onclick: vhxm.components.shared.modal.close
    }) : '']);
  }
};

vhxm.components.shared.modal.ui.close = {
  view: function view() {
    return m('.c-modal--close' + (vhxm.components.shared.size.state.smallOnly() ? '.is-hidden' : ''), {
      onclick: vhxm.components.shared.modal.close
    }, [m('i.icon.icon--xsmall.icon-x-white')]);
  }
};

vhxm.components.shared.modal.ui.header = {
  view: function view() {
    return m('.c-modal--header.padding-medium', [m('span', [m('.h2.head-4.head.secondary.text-left', vhxm.components.shared.modal.state.content.title())])]);
  }
};

vhxm.components.shared.modal.ui.body = {
  view: function view() {
    return m('.c-modal--body.padding-medium', [m.component(vhxm.components.shared.modal.state.content.body())]);
  }
};

vhxm.components.shared.modal.ui.actions = {
  view: function view() {
    var singleAction = parseInt(vhxm.components.shared.modal.state.hasActions(), 10) === 1;
    if (vhxm.components.shared.modal.state.actions.template()) {
      return m('.c-modal--actions', [m.component(vhxm.components.shared.modal.state.actions.template())]);
    } else {
      return m('.c-modal--actions', [m('.padding-small.text-center', [!singleAction ? m('.btn.btn--' + (singleAction ? 'fill' : 'half') + '.btn-gray', {
        onclick: vhxm.components.shared.modal.state.actions.leftCallback
      }, vhxm.components.shared.modal.state.actions.left()) : '', m('.btn.btn--' + (singleAction ? 'fill' : 'half') + '.btn-teal', {
        onclick: vhxm.components.shared.modal.state.actions[singleAction ? 'singleCallback' : 'rightCallback']
      }, vhxm.components.shared.modal.state.actions[singleAction ? 'single' : 'right']())])]);
    }
  }
};
vhxm.components.shared.radio.controller = function (opts) {
  var self = this;
  opts = opts || {};

  if (typeof opts.checkedByDefault === 'undefined') {
    opts.checkedByDefault = true;
  }
  self.state = new vhxm.components.shared.radio.state();

  opts.items.map(function (item) {
    if (item.checked) {
      self.state.isChecked(item.value);
    }
  });

  if (opts.checkedByDefault && !self.state.isChecked()) {
    self.state.isChecked(opts.items[0].value);
  }

  if (opts.api) {
    opts.api(self);
  }
};
vhxm.components.shared.radio.state = function () {
  this.isChecked = m.prop(null);
};vhxm.components.shared.radio.ui.container = {
  controller: vhxm.components.shared.radio.controller,
  view: function view(ctrl, opts) {
    return m('form.form', [m('ul.radio-' + (opts.color ? opts.color : 'teal') + (opts.stacked ? '.radio--stacked' : opts.buttons ? '.radio--buttons' : ''), [opts.items.map(function (item, index) {
      var is_checked = ctrl.state.isChecked() === item.value;
      return m('li', [m('input', {
        id: opts.name + '-' + index,
        type: 'radio',
        onchange: function onchange(event) {
          ctrl.state.isChecked(item.value);
          if (opts.onchange) {
            opts.onchange(event);
          }
        },
        name: opts.name,
        value: item.value,
        checked: is_checked
      }), m('label' + (opts.buttons ? '.btn-' + (is_checked ? 'teal' : 'gray') + '.btn--fill.btn-radio.margin-bottom-medium' : ''), {
        for: opts.name + '-' + index
      }, [m.component(vhxm.components.shared.radio.ui.icon), m('span.radio--label.text-left' + (opts.buttons ? '.padding-left-small' : '') + (opts.stacked ? '.truncate.truncate--xlarge' : ''), {
        style: {
          marginTop: !opts.buttons || opts.buttons && item.label.title ? '0px' : '8px'
        }
      }, opts.buttons ? [m('strong.text-2' + (is_checked ? '.text--white' : '.text--navy'), item.label.title ? item.label.title : item.label), item.label.descriptor ? m('p.text-4' + (is_checked ? '.text--white' : ''), item.label.descriptor) : ''] : item.label)]), item.template ? m('div.clear.padding-top-xsmall', [item.template]) : '']);
    })])]);
  }
};

vhxm.components.shared.radio.ui.icon = {
  view: function view() {
    return m('span.radio--icon', [m('i.circle-top', [m('span')]), m('i.circle-bottom', [m('span')])]);
  }
};
vhxm.components.shared.search_input.controller = function (opts) {
  var self = this;

  self.timeout = null;
  self.state = new vhxm.components.shared.search_input.state();
  self.state.value(opts.value ? opts.value : null);

  self.debounceSearch = function (event) {
    if (self.timeout) {
      clearTimeout(self.timeout);
    }

    self.timeout = setTimeout(function () {
      self.fetchResults(event.target.value);
      self.timeout = null;
    }, 300);
  };

  self.handleInput = function (event) {
    self.debounceSearch(event);
  };

  self.fetchResults = function (query) {
    opts.search(query, function (data) {
      opts.callback(data);
    });
  };

  self.updateQueryParam = function (query) {
    var loc = window.location;
    var search = void 0;
    var href = loc.pathname;

    if (query.length && window.history && window.history.replaceState) {
      search = loc.search.length && loc.search.match(/\?/) ? loc.search : '?';
      href += search.match(/q\=/) ? search.replace(/q\=[^&]*/, 'q=' + query) : search + '&q=' + query;
      history.replaceState({}, '', href);
    } else {
      search = loc.search.replace(/q\=[^&]*/, '');
      href += search.length === 1 ? '' : search;
      history.replaceState({}, '', href);
    }
  };
};vhxm.components.shared.search_input.state = function () {
  this.value = m.prop(null);
};
vhxm.components.shared.search_input.ui.container = {
  controller: function controller(opts) {
    return new vhxm.components.shared.search_input.controller(opts);
  },
  view: function view(ctrl, opts) {
    return m('input.c-select--search.padding-right-large.icon-search-black.icon--xsmall', {
      config: opts.config ? opts.config : '',
      type: 'text',
      value: ctrl.state.value(),
      placeholder: opts.placeholder ? opts.placeholder : 'Search',
      onkeydown: function oninput(event) {
        if (parseInt(event.which, 10) === 13 || parseInt(event.keyCode, 10) === 13) {
          ctrl.fetchResults(event.target.value);
          ctrl.timeout = null;
        }
      },
      oninput: function oninput(event) {
        ctrl.state.value(event.target.value);
        if (opts.queryParam) {
          ctrl.updateQueryParam(event.target.value);
        }
        if (opts.oninput) {
          opts.oninput(event);
        }
        ctrl.handleInput(event);
      }
    });
  }
};
vhxm.components.shared.select.controller = function (opts) {
  var self = this;
  var api = opts.api ? opts.api : m.prop(null);

  self.init = function () {
    self.state = new vhxm.components.shared.select.state();
    self.model = new vhxm.components.shared.select.model();

    self.type = opts.type || 'standard';
    self.multiselect = opts.multiselect || false;
    self.caret = opts.caret || 'right';
    self.position = opts.position || m.prop('bottom');
    self.model.items = opts.items;

    if (opts.selected) {
      opts.selected.map(function (item) {
        self.selectItem(item, true);
      });
    }

    self.state.focusInput(opts.focusOnOpen ? opts.focusOnOpen : true);

    if (opts.isProcessing) {
      self.state.isProcessing = opts.isProcessing;
    }
    if (opts.onSelect) {
      self.state.onSelect = opts.onSelect;
    }
    if (opts.onAction) {
      self.state.onAction = opts.onAction;
    }
    if (opts.onClose) {
      self.state.onClose = opts.onClose;
    }

    $(document).on('click', function (event) {
      var is_dropdown = $(event.target).closest('.c-select--container').length;

      if (!is_dropdown && self.state.isDropdownOpen()) {
        m.startComputation();
        self.state.isDropdownOpen(false);
        self.state.onClose();
        m.endComputation();
      }
    });

    api(self);

    $(window).on('quartz:select:open', function () {
      self.state.isDropdownOpen(false);
    });
  };

  self.selectedLabel = function () {
    var selected = opts.placeholder ? opts.placeholder : 'Select...';

    if (self.state.selected()) {
      if (Object.keys(self.state.selected()).length > 1) {
        selected = 'Multiple items selected';
      } else {
        var key = Object.keys(self.state.selected())[0];
        selected = self.state.selected()[key].label;
      }
    }

    return selected;
  };

  self.handleKeydown = function (event) {
    var container = $(event.target).closest('.c-select--container');
    var options = container.find('.c-select--options');
    var input = container.find('.c-select--input-container input');

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
          if (self.state.highlightIndex() >= 0) {
            self.selectItem(self.model.items()[self.state.highlightIndex()]);
          }
        }
  };

  self.handleClick = function (event) {
    event.preventDefault();
    var container = $(event.target).closest('.c-select--container').find('.c-select--options');

    if (!self.state.isDropdownOpen()) {
      self.state.focusInput(opts.focusOnOpen ? opts.focusOnOpen : true);
      $(window).trigger('quartz:select:open');
    }

    self.state.isDropdownOpen(!self.state.isDropdownOpen());
    if (!self.state.isDropdownOpen()) {
      self.state.onClose();
    }
    self.scrollOptionsList(container);
  };

  self.handleInput = function (event) {
    self.state.highlightIndex(-1);
    self.state.searchInputValue(event.target.value);
    self.state.isLoading(true);
  };

  self.selectItem = function (item, isInit) {
    var selected = void 0;
    var obj = {
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
    } else {
      selected[item[opts.prop_map.key]] = obj;
      self.state.onSelect(obj, self.state.selected(), 'added');
    }

    self.state.selected(selected);

    if (!isInit) {
      self.state.isDropdownOpen(self.multiselect ? true : false);
      if (!self.multiselect) {
        self.state.onClose();
      }
    }

    if (self.multiselect) {
      self.state.highlightIndex(-1);
    }
  };

  self.handleAction = function (event) {
    event.preventDefault();
    m.startComputation();
    self.state.footerLoading(true);
    m.endComputation();

    self.state.onAction(function () {
      m.startComputation();
      self.state.searchInputValue('');
      self.state.footerLoading(false);
      self.state.isDropdownOpen(false);
      self.state.onClose();
      m.endComputation();
    });
  };

  self.searchCallback = function (data) {
    m.startComputation();
    self.model.items(data);
    self.state.isLoading(false);
    m.endComputation();
  };

  self.setHighlightedState = function (direction, container, input) {
    if (direction === 'down') {
      if (self.state.highlightIndex() < self.model.items().length - 1) {
        self.state.highlightIndex(self.state.highlightIndex() + 1);
      } else {
        self.state.highlightIndex(self.model.items().length - 1);
      }
    } else if (direction === 'up') {
      if (self.state.highlightIndex() > 0) {
        self.state.highlightIndex(self.state.highlightIndex() - 1);
      } else if (self.state.highlightIndex() <= 0) {
        self.state.highlightIndex(-1);
        input.focus();
      }
    }
    self.scrollOptionsList(container);
  };

  self.scrollOptionsList = function (container) {
    if (container.length) {
      container.eq(0).scrollTop(self.state.optionHeight() * self.state.highlightIndex());
    }
  };

  if (opts.init) {
    self.init();
  }
};
vhxm.components.shared.select.model = function () {
  this.items = m.prop(null);
};
vhxm.components.shared.select.state = function () {
  this.selected = m.prop(null);
  this.highlighted = m.prop({});
  this.isDropdownOpen = m.prop(false);
  this.highlightIndex = m.prop(-1);
  this.optionHeight = m.prop(0);
  this.isLoading = m.prop(false);
  this.searchInputValue = m.prop('');
  this.footerLoading = m.prop(false);
  this.focusInput = m.prop(true);
  this.isProcessing = m.prop([]);
  this.onSelect = function () {};
  this.onClose = function () {};
  this.onAction = function (done) {
    done();
  };
};
vhxm.components.shared.select.ui.container = {
  controller: function controller(opts) {
    opts.init = true;
    return new vhxm.components.shared.select.controller(opts);
  },
  view: function view(ctrl, opts) {
    var options = opts.search ? '.has-search' : '';
    options += opts.trigger ? '.has-trigger' : '';
    options += opts.action ? '.has-action' : '';
    options += opts.type === 'media' ? '.has-media' : '';
    options += opts.inline ? '.inline' : '';
    options += '.caret--' + (ctrl.position() === 'top' ? 'bottom' : 'top') + '-' + ctrl.caret;

    if (opts.trigger) {
      opts.trigger.attrs.onclick = ctrl.handleClick;
      opts.trigger.attrs.className = opts.trigger.attrs.className ? opts.trigger.attrs.className + ' c-select--trigger' : 'c-select--trigger';
    }

    return m('.c-select--container.relative.form' + options, {
      onmouseleave: function onmouseleave() {
        ctrl.state.highlightIndex(-1);
      },
      onkeydown: ctrl.handleKeydown
    }, [opts.trigger ? opts.trigger : m('a.c-select--trigger.truncate.btn-dropdown-' + (opts.color ? opts.color : 'gray') + '.btn--fill' + (ctrl.state.isDropdownOpen() ? '.is-active' : ''), {
      href: '#',
      onclick: ctrl.handleClick
    }, ctrl.selectedLabel()), m('.c-select--dropdown.bg-white.border.radius.fill-width' + (ctrl.state.isDropdownOpen() ? '.is-open' : ''), {
      style: {
        top: opts.offset ? opts.offset + 'px' : '40px'
      },
      config: function config(el) {
        if (ctrl.position() === 'top') {
          el.style.top = -(el.offsetHeight + 10) + 'px';
        }
      }
    }, [opts.search ?
    // if search is enabled
    m('.c-select--input-container.padding-medium.absolute.bg-white.fill-width.radius', [m.component(vhxm.components.shared.search_input.ui.container, {
      config: function config(el, init) {
        if (ctrl.state.focusInput()) {
          setTimeout(function () {
            el.focus();
            ctrl.state.focusInput(false);
          }, 10);
        }
      },
      callback: ctrl.searchCallback,
      search: function search(query, callback) {
        if (ctrl.state.highlightIndex() === -1) {
          opts.search(query, callback);
        }
      },
      placeholder: 'Search',
      oninput: ctrl.handleInput
    })]) : '', m.component(vhxm.components.shared.select.ui.list.container, opts, ctrl), opts.action && ctrl.state.searchInputValue().length ?
    // show Create New Category dropdown footer action
    m('.c-select--footer.border-top', [m('a.btn-teal.btn--fill' + (ctrl.state.footerLoading() ? '.is-loading' : ''), {
      onclick: ctrl.handleAction,
      href: '#'
    }, opts.action + (ctrl.state.searchInputValue().length ? ' \'' + ctrl.state.searchInputValue() + '\'' : ''))]) : ''])]);
  }
};
vhxm.components.shared.sidebar.controller = function (opts) {
  var self = this;
  self.opts = opts;

  if (self.opts) {
    if (self.opts.onInit) {
      self.opts.onInit();
    }
    if (self.opts.loadedState) {
      vhxm.components.shared.sidebar.setLoadedState(self.opts.loadedState);
    }
    if (opts.template) {
      vhxm.components.shared.sidebar.setTemplate(self.opts.template);
    }
    if (opts.onOpen) {
      vhxm.components.shared.sidebar.state.onOpen = self.opts.onOpen;
    }
    if (opts.onClose) {
      vhxm.components.shared.sidebar.state.onClose = self.opts.onClose;
    }
    if (opts.onBeforeClose) {
      vhxm.components.shared.sidebar.state.onBeforeClose = self.opts.onBeforeClose;
    }
  }

  self.documentClickHandler = function (event) {

    var is_sidebar = !$(event.target).closest('body').length || $(event.target).hasClass('c-sidebar') || $(event.target).closest('[data-flash], tr.is-clickable, .c-sidebar' + (self.opts && self.opts.clickBlackList ? ', ' + self.opts.clickBlackList : '')).length;

    if (!is_sidebar && vhxm.components.shared.sidebar.state.isOpen()) {
      vhxm.components.shared.sidebar.toggle('close');
    }
  };

  self.animatorIn = function (elem, isInit) {
    if (!isInit) {
      $(elem).velocity('stop', true);
      var callback = function callback() {
        $(document).on('keyup', self.esc);
        $(document).on('click', self.documentClickHandler);
        vhxm.components.shared.sidebar.state.onOpen();
        vhxm.components.shared.sidebar.state.skipTransition(true);
      };

      if (vhxm.components.shared.sidebar.state.isOpen()) {
        if (vhxm.components.shared.sidebar.state.skipTransition()) {
          elem.style.right = '0px';
          callback();
        } else {
          $(elem).velocity({
            right: 0
          }, {
            duration: vhxm.components.shared.sidebar.state.skipTransition() ? 0 : 500,
            easing: [0.19, 1, 0.22, 1],
            complete: callback
          });
        }
      }
    }
  };

  self.animatorOut = function (elem, isInit) {
    $(elem).velocity('stop', true);
    $(elem).velocity({
      right: '-470'
    }, {
      duration: 500,
      easing: [0.19, 1, 0.22, 1],
      complete: function complete() {
        vhxm.components.shared.sidebar.state.onClose();
        $(document).off('keyup', self.esc);
        $(document).off('click', self.documentClickHandler);
        vhxm.components.shared.sidebar.state.skipTransition(false);
      }
    });
  };

  self.esc = function (event) {
    if (event.keyCode === 27) {
      vhxm.components.shared.sidebar.toggle('close');
    }
  };
};vhxm.components.shared.sidebar.toggle = function (state, route) {
  state = state === 'open' ? true : false;

  var done = function done() {
    vhxm.components.shared.sidebar.state.isOpen(state);
    if (route) {
      return m.route(route);
    }

    m.redraw();
  };

  if (vhxm.components.shared.sidebar.state.isOpen() && !state || !vhxm.components.shared.sidebar.state.isOpen() && state) {
    if (!state) {
      vhxm.components.shared.sidebar.state.onBeforeClose(done);
    } else {
      done();
    }
  }
};

vhxm.components.shared.sidebar.setTemplate = function (template) {
  vhxm.components.shared.sidebar.state.template(template);
};

vhxm.components.shared.sidebar.setLoadedState = function (obj) {
  if (!!(obj && obj.constructor && obj.call && obj.apply)) {
    vhxm.components.shared.sidebar.state.isLoaded = obj;
  } else {
    throw 'Loaded State must be a Mithril prop.';
  }

  m.redraw();
};
vhxm.components.shared.sidebar.state = {
  isOpen: m.prop(false),
  isLoaded: m.prop(false),
  skipTransition: m.prop(false),
  template: m.prop(null),
  onBeforeClose: function onBeforeClose(done) {
    done();
  },
  onClose: function onClose() {},
  onOpen: function onOpen() {}
};
vhxm.components.shared.sidebar.ui.container = {
  controller: vhxm.components.shared.sidebar.controller,
  view: function view(ctrl) {
    return m('.c-sidebar.bg-white.shadow--gray' + (vhxm.components.shared.sidebar.state.isLoaded() ? '' : '.loader-slate.loader--cover-hide.loader--large.is-loading'), {
      config: vhxm.components.shared.sidebar.state.isOpen() ? ctrl.animatorIn : ctrl.animatorOut
    }, vhxm.components.shared.sidebar.state.isLoaded() ? [m('a.c-sidebar--close.icon-circle.icon-x-navy.icon--xsmall', {
      onclick: function onclick() {
        setTimeout(function () {
          vhxm.components.shared.sidebar.toggle('close');
        }, 0);
      }
    }), m('div', {
      style: { opacity: 0 },
      config: function config(elem) {
        $(elem).velocity({ opacity: '1' }, { duration: 400 });
      }
    }, [m.component(vhxm.components.shared.sidebar.state.template())])] : '');
  }
};
vhxm.components.shared.size.state = {
  media: m.prop(null),
  mediumUp: m.prop(null),
  largeUp: m.prop(null),
  smallOnly: m.prop(null),
  smallToMedium: m.prop(null),
  mediumOnly: m.prop(null),
  smediumOnly: m.prop(null),
  largeOnly: m.prop(null)
};

$(window).on('resize', function () {
  m.startComputation();
  var size = window.getComputedStyle(document.body, ':after').getPropertyValue('content').replace(/['"]/g, '');
  vhxm.components.shared.size.state.media(size);
  vhxm.components.shared.size.state.mediumUp(!!size.match(/medium|large/));
  vhxm.components.shared.size.state.smallToMedium(!!size.match(/small|smedium|medium/));
  vhxm.components.shared.size.state.largeUp(!!size.match(/large|xlarge/));
  vhxm.components.shared.size.state.smallOnly(size === 'small');
  vhxm.components.shared.size.state.mediumOnly(size === 'medium');
  vhxm.components.shared.size.state.smediumOnly(size === 'smedium');
  vhxm.components.shared.size.state.largeOnly(!!size.match(/large/));
  m.endComputation();
});

$(window).trigger('resize');
vhxm.components.shared.tag.controller = function (opts) {
  var self = this;

  self.state = new vhxm.components.shared.tag.state();

  if (opts.isProcessing) {
    self.state.isProcessing = opts.isProcessing;
  }
  if (opts.onShow) {
    self.state.onShow = opts.onShow;
  }
  if (opts.onRemove) {
    self.state.onRemove = opts.onRemove;
  }

  self.formatLabelString = function (opts) {
    if (opts.label && opts.label_length && opts.label.length > opts.label_length) {
      return opts.label.substr(0, opts.label_length).trim() + '...';
    }

    return opts.label;
  };
};
vhxm.components.shared.tag.state = function () {
  this.isHover = m.prop(false);
  this.isRemoveHover = m.prop(false);
  this.isProcessing = m.prop(false);
  this.onShow = function () {};
  this.onRemove = function () {};
};
vhxm.components.shared.tag.ui.container = {
  controller: vhxm.components.shared.tag.controller,
  view: function view(ctrl, opts) {
    return m('span.inline.relative.c-tag' + (ctrl.state.isHover() ? '.is-hover' : ''), {
      onmouseover: function onmouseover() {
        ctrl.state.isHover(true);
      },
      onmouseout: function onmouseout() {
        ctrl.state.isHover(false);
      }
    }, [m('button.c-tag--button' + (ctrl.state.isHover() ? '.btn-teal.is-hover' : '.btn-gray') + (ctrl.state.isProcessing() ? '.is-processing' : ''), {
      onclick: function onclick(event) {
        event.preventDefault();
        ctrl.state.onShow(event);
      }
    }, opts.label ? ctrl.formatLabelString(opts) : 'Tag'), m('a.c-tag--remove.icon--center.icon-x-white.icon--xxsmall' + (ctrl.state.isRemoveHover() ? '.btn-red' : '.btn-teal'), {
      onclick: function onclick(event) {
        event.preventDefault();
        ctrl.state.onRemove(event);
      },
      onmouseover: function onmouseover() {
        ctrl.state.isRemoveHover(true);
      },
      onmouseout: function onmouseout() {
        ctrl.state.isRemoveHover(false);
      }
    })]);
  }
};vhxm.components.shared.autosuggest.ui.list.controller = function (opts, parent) {
  var self = this;

  self.parent = new vhxm.components.shared.autosuggest.controller(opts);
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function () {
    return self.model.items() && self.model.items().length > 1;
  };

  self.handleItemClick = function (event, item) {
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
  controller: function controller(opts, parent) {
    return new vhxm.components.shared.autosuggest.ui.list.controller(opts, parent);
  },
  view: function view(ctrl) {
    return m('ul.c-autosuggest--options.margin-left-reset', {
      config: function config(el) {
        ctrl.state.optionsHeight($(el).outerHeight());
      }
    }, [ctrl.model.items() ? ctrl.model.items().map(function (item, index) {
      return m('li.c-autosuggest--option.padding-horizontal-medium.padding-horz-medium.padding-vert-small.padding-vertical-small' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
        config: function config(el) {
          ctrl.state.optionHeight($(el).outerHeight());
        },
        onmouseover: function onmouseover() {
          ctrl.state.highlightIndex(index);
        },
        onclick: function onclick(event) {
          ctrl.handleItemClick(event, item);
        }
      }, item);
    }) : '']);
  }
};
/* ................................................
  Media Item Component
.................................................*/
vhxm.components.shared.select.ui.item_media = {
  view: function view(c, params) {
    var item = params.item;
    var index = params.index;
    var ctrl = params.ctrl;
    var opts = params.opts;

    return m('.c-media-item--container.padding-horz-medium.padding-vert-small.clearfix' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
      config: function config(el) {
        ctrl.state.optionHeight($(el).outerHeight());
      },
      onmouseover: function onmouseover() {
        ctrl.state.highlightIndex(index);
      },
      onclick: function onclick(event) {
        ctrl.handleItemClick(event, item);
      }
    }, [m('.c-media-item--image-container.left', [m('div.c-media-item--image.radius.margin-right-medium.img', {
      style: {
        width: '70px',
        height: '40px',
        backgroundImage: 'url(' + item[opts.prop_map.image] + ')'
      }
    })]), m('.c-media-item--content.clearfix.left', [m('p.text--navy.line-medium.truncate.block', ctrl.formatLabelString({
      label: item[opts.prop_map.label],
      label_length: opts.label_length
    })), m('p.text--gray.line-medium.truncate.block', item[opts.prop_map.descriptor])]), ctrl.parent.multiselect ? m('.c-media-item--action.clearfix.right', [ctrl.state.isProcessing().indexOf(item[opts.prop_map.value]) >= 0 ? m('.c-item-toggle.loader-white.loader--small') : m('.c-item-toggle.icon--xsmall.icon-check-navy.border' + (ctrl.state.selected() && ctrl.state.selected()[item[opts.prop_map.key]] ? '.is-selected.icon-check-navy' : '.icon-plus-thin-white'))]) : '']);
  }
};
/* ................................................
  Standard Item Component
.................................................*/
vhxm.components.shared.select.ui.item_standard = {
  view: function view(c, params) {
    var item = params.item;
    var index = params.index;
    var ctrl = params.ctrl;
    var opts = params.opts;

    return m('li.c-select--option.padding-horz-medium' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
      config: function config(el) {
        ctrl.state.optionHeight($(el).outerHeight());
      },
      onmouseover: function onmouseover() {
        ctrl.state.highlightIndex(index);
      },
      onclick: function onclick(event) {
        ctrl.handleItemClick(event, item);
      }
    }, [m('i.icon.icon--xsmall.right.margin-top-xsmall.margin-left-small' + (ctrl.state.selected() && ctrl.state.selected()[item[opts.prop_map.key]] ? '.is-selected.icon-check-navy' : '')), m('span.c-select--item-label.text--navy', item[opts.prop_map.label]), item[opts.prop_map.descriptor] ? m('span.right.text--gray', item[opts.prop_map.descriptor]) : '']);
  }
};
vhxm.components.shared.select.ui.list.controller = function (opts, parent) {
  var self = this;

  self.parent = parent;
  self.state = parent.state;
  self.model = parent.model;

  self.hasItems = function () {
    return self.model.items() && self.model.items().length > 0;
  };

  self.handleItemClick = function (event, item) {
    self.parent.selectItem(item);
  };

  self.formatLabelString = function (opts) {
    if (opts.label && opts.label_length && opts.label.length > opts.label_length) {
      return opts.label.substr(0, opts.label_length).trim() + '...';
    }

    return opts.label;
  };
};
/* ................................................
  Select List Component
.................................................*/
vhxm.components.shared.select.ui.list.container = {
  controller: function controller(opts, parent) {
    return new vhxm.components.shared.select.ui.list.controller(opts, parent);
  },
  view: function view(ctrl, opts) {
    return m('ul.c-select--options.margin-left-reset.loader-slate.loader--transparent' + (ctrl.state.isLoading() ? '.is-loading' : ''), [ctrl.hasItems() ? ctrl.model.items().map(function (item, index) {
      return m.component(vhxm.components.shared.select.ui['item_' + ctrl.parent.type], {
        item: item,
        index: index,
        ctrl: ctrl,
        opts: opts
      });
    }) : m.component(vhxm.components.shared.select.ui.list.empty, opts)]);
  }
};

/* List Empty
.................................................*/
vhxm.components.shared.select.ui.list.empty = {
  view: function view() {
    return m('li.padding-horz-large.padding-top-small.padding-bottom-medium.text--gray.text-center', 'No results');
  }
};