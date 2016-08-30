/* ................................................
  Standard Item Component
.................................................*/
vhxm.components.shared.select.ui.item_standard = {
  view: function(ctrl, params) {
    let opts = params.opts;
    let item = params.item;
    let index = params.index;

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
      m('span.c-select--item-label', item[opts.label_prop]), item[opts.descriptor_prop] ? m('span.right.text.primary', item[opts.descriptor_prop]) : ''
    ]);
  }
};
