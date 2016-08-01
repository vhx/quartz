vhxm.components.shared.filter.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.filter.controller(opts);
  },
  view: function(ctrl, opts) {
    let ready_to_apply = ctrl.state.dropdown.isOpen() && ctrl.state.selected() && ctrl.state.selected().length && !opts.applyOnChange;

    return m('.c-filter--container.dropdown.dropdown--' + (opts.size ? opts.size : 'large') + (ctrl.state.dropdown.isOpen() ? '.is-open' : ''), [
      m('div.row', [
        m('.c-filter--trigger-container.small-' + (vhxm.components.shared.size.state.smallToMedium() ? '5' : '3') + '.column.pull.padding-reset', [
          m('a.c-filter--trigger.block.radius.head-5.text--gray' +
            (ready_to_apply ? '.text-center' : ('.icon--right.icon-' + (ctrl.state.dropdown.isOpen() ? 'chevron-up-navy' : 'chevron-down-gray') + '.icon--xxsmall.margin-right-medium.fill-width')), {
            onclick: ctrl.handleApplyClick
          }, ready_to_apply ? 'Apply' : 'Filters'),
          m.component(vhxm.components.shared.filter.ui.dropdown, opts, ctrl)
        ]),
        m('.c-filter--applied-container.small-' + ( vhxm.components.shared.size.state.smallToMedium() ? '11' : '13') + '.column.pull.padding-reset', [
          m('.margin-left-small.padding-left-medium.border-left', [
            ctrl.state.applied() && ctrl.state.selected().length ?
            m.component(vhxm.components.shared.filter.ui.applied, opts, ctrl) : m('span.c-filter--label.text--gray', opts.label ? opts.label : m.trust('&nbsp;'))
          ])
        ])
      ])
    ]);
  }
};

vhxm.components.shared.filter.ui.applied = {
  controller: function(opts, parent_ctrl) {
    return parent_ctrl;
  },
  view: function(ctrl) {
    return m('div', [
      ctrl.state.selected().map(function(item) {
        return m('span.c-filter--applied.inline', [
          m('a.text--navy', {
            href: '#',
            onclick: function(event) {
              event.preventDefault();
              ctrl.openFilter(item);
            }
          }, item.label),
          m('a.icon--center.icon-x-navy.icon--xxsmall', {
            onclick: function(event) {
              event.preventDefault();
              ctrl.handleFilterRemoveClick(item);
            }
          })
        ]);
      })
    ]);
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
              m((ctrl.hasMultipleFilters() ? 'a' : 'span') + '.c-filter--item.head-5.fill-width' + ctrl.iconHelper(item), {
                href: '#',
                onclick: function(event) {
                  if (ctrl.hasMultipleFilters()) {
                    ctrl.handleFilterClick(event, item);
                  }
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
      m((ctrl.hasMultipleFilters() ? 'a' : 'span') + '.c-filter--item.head-5.fill-width' + ctrl.iconHelper(item), {
        href: '#',
        onclick: function(event) {
          if (ctrl.hasMultipleFilters()) {
            ctrl.handleFilterClick(event, item.type);
          }
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
      m((ctrl.hasMultipleFilters() ? 'a' : 'span') + '.c-filter--item.head-5.fill-width' + ctrl.iconHelper(item), {
        href: '#',
        onclick: function(event) {
          if (ctrl.hasMultipleFilters()) {
            ctrl.handleFilterClick(event, item.type);
          }
        }
      }, item.title),
      m('div.c-filter--item-container' + (ctrl.state.dropdown.filtersOpen().indexOf(item.type) >= 0 ? '.is-active' : ''), [
        m('ul.form', [
          item.data().map(function(child, index) {
            return m('li', [
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: item.type + '-' + index,
                checked: child.checked,
                label: child.label,
                onchange: function(event) {
                  ctrl.removeFilter(child);
                  if (event.target.checked) {
                   ctrl.addFilter(child, item.type);
                  }
                }
              })
            ]);
          })
        ])
      ])
    ]);
  }
};