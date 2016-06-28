// Example Filter Component

m.component(vhxm.components.shared.filter.container, {
  label: 'Customize this table',
  api: vhxm.component.name.state.filterApi,
  filters: [
    'date',
    'location',
    {
      type: 'test',
      title: 'Test',
      template: {
        view: function() {
          // custom filter template
        }
      }
    }
  ]
});
vhxm.components.shared.filter.constants = Object.freeze({
  date: {
    title: 'Date'
  },
  location: {
    title: 'Location'
  }
});
vhxm.components.shared.filter.controller = function(opts) {
  let self = this;

  self.init = function() {
    self.state = new vhxm.components.shared.filter.state();
    self.model = new vhxm.components.shared.filter.model();

    self.state.applied = m.prop(false);

    if (opts.api) {
      opts.api = {
        state: self.state,
        model: self.model
      };
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

  self.handleClick = function(event) {
    event.preventDefault();

    let state = self.state.dropdown.isOpen() ? false : true;
    self.state.dropdown.isOpen(state);
  };

  self.applyFilter = function(filter) {
    // apply the filter
    self.state.applied(filter);
  };

  if (opts && opts.init) {
    self.init();
  }
};
vhxm.components.shared.filter.model = function() {
};

vhxm.components.shared.filter.state = function() {
  this.applied = m.prop([]);
  this.available = m.prop(null);
  this.dropdown = {
    isOpen: m.prop(false),
    filtersOpen: m.prop([])
  };
};

vhxm.components.shared.filter.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.filter.controller(opts);
  },
  view: function(ctrl, opts) {
    return m('.c-filter--container.dropdown.dropdown--large' + (ctrl.state.dropdown.isOpen() ? '.is-open' : ''), [
      m('div.row', [
        m('.column.small-3.padding-reset', [
          m('a.c-filter--trigger.radius.head-5.text--gray.icon--right.icon-' + (ctrl.state.dropdown.isOpen() ? 'x-navy' : 'chevron-down-gray') + '.icon--xxsmall.margin-right-medium.fill-width', {
            onclick: ctrl.handleClick
          }, 'Filters'),
          m.component(vhxm.components.shared.filter.ui.dropdown, opts, ctrl)
        ]),
        m('.column.small-13.padding-reset', [
          m('.margin-left-small.padding-left-medium.border-left', [
            ctrl.state.applied() && ctrl.state.applied().length ?
            m.component(vhxm.components.shared.filter.ui.applied, opts) : m('span.c-filter--label', opts.label ? opts.label : '')
          ])
        ])
      ])
    ]);
  }
};

vhxm.components.shared.filter.ui.applied = {
  view: function() {
    return m('div', 'What is this');
  }
};

vhxm.components.shared.filter.ui.dropdown = {
  controller: function(opts, parent_ctrl) {
    return parent_ctrl;
  },
  view: function(ctrl, opts) {
    return m('.c-filter--dropdown.dropdown-list', [
      m('ul.padding-reset', [
        opts.filters.map(function(item) {
          if (typeof(item) === 'string' && vhxm.components.shared.filter.ui[item]) {
            return m('li.border-bottom', [
              m('a.c-filter--item.head-5.fill-width.icon--right.icon-chevron-' + (ctrl.state.dropdown.filtersOpen().indexOf(item) >= 0 ? 'up' : 'down') + '-navy.icon--xxsmall', {
                href: '#',
                onclick: function(event) {
                  ctrl.handleFilterClick(event, item);
                }
              }, vhxm.components.shared.filter.constants[item].title),
              m('div.c-filter--item-container' + (ctrl.state.dropdown.filtersOpen().indexOf(item) >= 0 ? '.is-active' : ''), [
                m.component(vhxm.components.shared.filter.ui[item])
              ])
            ]);
          }
          if (typeof(item) === 'object') {
            if (item.template) {
              return m.component(vhxm.components.shared.filter.ui.template, item, ctrl);
            }
            else if (item.data) {
              return m.component(vhxm.components.shared.filter.ui.data, item, ctrl);
            }
          }
        })
      ])
    ]);
  }
};

vhxm.components.shared.filter.ui.template = {
  controller: function(item, parent_ctrl) {
    return parent_ctrl;
  },
  view: function(ctrl, item) {
    return m('li.border-bottom', [
      m('a.c-filter--item.head-5.fill-width.icon--right.icon-chevron-' + (ctrl.state.dropdown.filtersOpen().indexOf(item.type) >= 0 ? 'up' : 'down') + '-navy.icon--xxsmall', {
        href: '#',
        onclick: function(event) {
          ctrl.handleFilterClick(event, item.type);
        }
      }, item.title),
      m('div.c-filter--item-container' + (ctrl.state.dropdown.filtersOpen().indexOf(item.type) >= 0 ? '.is-active' : ''), [
        m.component(item.template)
      ])
    ]);
  }
};

vhxm.components.shared.filter.ui.data = {
  controller: function(opts, parent_ctrl) {
    return parent_ctrl;
  },
  view: function(ctrl, item) {
    return m('li.border-bottom', [
      m('a.c-filter--item.head-5.fill-width.icon--right.icon-chevron-' + (ctrl.state.dropdown.filtersOpen().indexOf(item.type) >= 0 ? 'up' : 'down') + '-navy.icon--xxsmall', {
        href: '#',
        onclick: function(event) {
          ctrl.handleFilterClick(event, item.type);
        }
      }, item.title),
      m('div.c-filter--item-container' + (ctrl.state.dropdown.filtersOpen().indexOf(item.type) >= 0 ? '.is-active' : ''), [
        m('ul.form', [
          item.data().map(function(item, index) {
            return m('li', [
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: item.type + '-' + index,
                checked: item.checked,
                label: item.label,
                oninput: function(event) {
                  debugger;
                }
              })
            ]);
          })
        ])
      ])
    ]);
  }
};
vhxm.components.shared.filter.date.controller = function() {};
vhxm.components.shared.filter.ui.date = {
  controller: function(opts) {
    return new vhxm.components.shared.filter.date.controller(opts);
  },
  view: function(ctrl, opts) {
    return m('.c-filter--date.padding-medium', [
      m('a.icon-calendar-navy.icon--small.icon--left.border.radius.fill-width.inline.padding-small.text-center', 'January 1, 2014'),
      m('span.block.text-center.padding-vert-small', 'to'),
      m('a.icon-calendar-navy.icon--small.icon--left.border.radius.fill-width.inline.padding-small.text-center', 'January 1, 2014'),
    ]);
  }
};