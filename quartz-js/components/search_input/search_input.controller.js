vhxm.components.shared.search_input.controller = function(opts) {
  let self = this;

  self.timeout = null;

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
};
