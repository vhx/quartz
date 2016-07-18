vhxm.components.shared.load_more.controller = function(opts) {
  var self = this;

console.log(opts);
  self.state = new vhxm.components.shared.load_more.state();
  self.action = opts.action ? opts.action : function() {};

  self.loadMore = function() {
    self.state.is_loading(true);
    self.action(function() {
      self.state.is_loading(false);
    });
  };

  self.isElementInViewport = function(el, isInit, ctx) {
    var element = $('#js-load-more-btn');
    var in_view = false;

    if (!isInit) {
      var rect = el.getBoundingClientRect();
      window.addEventListener('scroll', function() {
        if ((el.getBoundingClientRect().top < window.innerHeight) && (el.getBoundingClientRect().top > 0) && !self.state.in_view()) {
          m.startComputation();
          self.state.is_loading(true);
          m.endComputation();
          self.loadMore();
          self.state.in_view(true);
          return true;
        }
        else if ((el.getBoundingClientRect().bottom < 0) && self.state.in_view()) {
          self.state.in_view(false);
          return false;
        }
        else if ((el.getBoundingClientRect().top > window.innerHeight) && self.state.in_view()) {
          self.state.in_view(false);
          return false;
        }
      });
    }

  };
};
