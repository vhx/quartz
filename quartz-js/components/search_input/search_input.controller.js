vhxm.components.shared.search_input.controller = function(opts) {
  let self = this;

  self.timeout = null;
  self.state = new vhxm.components.shared.search_input.state();
  self.state.value(opts.value ? opts.value : null);
  
  self.debounceSearch = function(event) {
    if (self.timeout) {
      clearTimeout(self.timeout);
    }

    self.timeout = setTimeout(function() {
      self.fetchResults(event.target.value);
      self.timeout = null;
    }, 300);
  };

  self.handleInput = function(event) {
    self.debounceSearch(event);
  };

  self.fetchResults = function(query) {
    opts.search(query, function(data) {
      opts.callback(data);
    });
  };

  self.updateQueryParam = function(query) {
    let loc = window.location;
    let search;
    let href = loc.pathname;

    if (query.length && window.history && window.history.replaceState) {
      search = loc.search.length && loc.search.match(/\?/) ? loc.search : '?';
      href += (search.match(/q\=/) ? search.replace(/q\=(\w|\-)*/, 'q=' + query) : search + 'q=' + query);
      history.replaceState({}, '', href);
    } else {
      search = loc.search.replace(/q\=(\w|\-)*/, '');
      href += search.length === 1 ? '' : loc.search;
      history.replaceState({}, '', href);
    }
  };
};