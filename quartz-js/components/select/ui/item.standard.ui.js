/* ................................................
  Standard Item Component
.................................................*/
vhxm.components.shared.select.ui.item_standard = {
  view: function(c, params) {
    let item  = params.item;
    let index = params.index;
    let ctrl  = params.ctrl;
    let opts  = params.opts;

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
      m('span.c-select--item-label', item[opts.prop_map.label]), item[opts.prop_map.descriptor] ? m('span.right.text.primary', item[opts.prop_map.descriptor]) : ''
    ]);
  }
};
