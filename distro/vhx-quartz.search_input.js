'use strict';

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
      href += search.match(/q\=/) ? search.replace(/q\=(\w|\-)*/, 'q=' + query) : search + 'q=' + query;
      history.replaceState({}, '', href);
    } else {
      search = loc.search.replace(/q\=(\w|\-)*/, '');
      href += search.length === 1 ? '' : loc.search;
      history.replaceState({}, '', href);
    }
  };
};
vhxm.components.shared.search_input.state = function () {
  this.value = m.prop(null);
};

vhxm.components.shared.search_input.ui.container = {
  controller: function controller(opts) {
    return new vhxm.components.shared.search_input.controller(opts);
  },
  view: function view(ctrl, opts) {
    return m('input.c-select--search.padding-right-large.icon-search-navy.icon--xsmall', {
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
