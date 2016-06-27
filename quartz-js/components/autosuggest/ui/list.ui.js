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
