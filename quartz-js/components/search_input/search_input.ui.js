vhxm.components.shared.search_input.ui.container = {
  controller: function(opts) {
    return new vhxm.components.shared.search_input.controller(opts);
  },
  view: function(ctrl, opts) {
    return m('input.c-select--search.padding-right-large.icon-search-navy.icon--xsmall', {
      config: opts.config ? opts.config : '',
      type: 'text',
      placeholder: opts.placeholder ? opts.placeholder : 'Search',
      oninput: function(event) {
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
