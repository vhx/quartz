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
          return m.component(vhxm.components.shared.select.ui['item_' + opts.item_type], {
            item: item,
            index: index,
            parent: parent,
            ctrl: ctrl,
            opts: opts
          });
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
