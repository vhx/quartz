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
