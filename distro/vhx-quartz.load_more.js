'use strict';

vhxm.components.shared.load_more.controller = function (opts) {
  var self = this;

  self.state = new vhxm.components.shared.load_more.state();
  self.action = opts.action ? opts.action : function () {};

  self.loadMore = function () {
    self.state.is_loading(true);
    self.action(function () {
      self.state.is_loading(false);
    });
  };

  self.isElementInViewport = function (el, isInit, ctx) {
    if (!isInit) {
      var rect = el.getBoundingClientRect();
      window.addEventListener('scroll', function () {
        if (el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().top > 0 && !self.state.in_view()) {
          m.startComputation();
          self.state.is_loading(true);
          m.endComputation();
          self.loadMore();
          self.state.in_view(true);
          return true;
        } else if (el.getBoundingClientRect().bottom < 0 && self.state.in_view()) {
          self.state.in_view(false);
          return false;
        } else if (el.getBoundingClientRect().top > window.innerHeight && self.state.in_view()) {
          self.state.in_view(false);
          return false;
        }
      });
    }
  };
};

vhxm.components.shared.load_more.state = function () {
  this.in_view = m.prop(false);
  this.is_loading = m.prop(false);
};

vhxm.components.shared.load_more.ui.container = {
  controller: function controller(opts) {
    return new vhxm.components.shared.load_more.controller(opts);
  },
  view: function view(ctrl, opts) {
    var self = this;
    return m('a.btn-white' + (ctrl.state.is_loading() ? '.is-loading' : ''), {
      config: opts.onscroll ? ctrl.isElementInViewport : '',
      onclick: !opts.onscroll ? function (e) {
        e.preventDefault();
        ctrl.loadMore();
      } : '',
      href: '#'
    }, opts.label ? opts.label : 'Show More');
  }

};
