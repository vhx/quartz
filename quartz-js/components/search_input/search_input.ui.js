vhxm.components.shared.search_input.ui.container = {
  controller: function(opts) {
    return new vhxm.components.shared.search_input.controller(opts);
  },
  view: function(ctrl, opts) {
    return m('input.c-select--search.padding-right-large.icon-search-black.icon--xsmall', {
      config: opts.config ? opts.config : '',
      type: 'text',
      value: ctrl.state.value(),
      placeholder: opts.placeholder ? opts.placeholder : 'Search',
      onkeydown: function oninput(event) {
        if ( parseInt(event.which,10) === 13 || parseInt(event.keyCode,10) === 13) {
          ctrl.fetchResults(event.target.value);
          ctrl.timeout = null;
        }
      },
      oninput: function(event) {
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
