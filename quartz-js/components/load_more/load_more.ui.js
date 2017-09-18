vhxm.components.shared.load_more.ui.container = {
  controller: function(opts) {
    return new vhxm.components.shared.load_more.controller(opts);
  },
  view: function(ctrl, opts) {
    var self = this;
    return m('a..btn.btn-vimeo-secondary-outline' + (ctrl.state.is_loading() ? '.is-loading' : ''), {
      config: opts.onscroll ? ctrl.isElementInViewport : '',
      onclick: !opts.onscroll ? function(e) {
        e.preventDefault();
        ctrl.loadMore();
      } : '',
      href: '#'
    }, (opts.label ? opts.label : 'Show More'));
  }

};
