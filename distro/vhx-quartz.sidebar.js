'use strict';

vhxm.components.shared.sidebar.controller = function () {
  var self = this;

  self.animatorIn = function (elem, isInit) {
    // if (!isInit) {
    if (vhxm.components.shared.sidebar.state.isOpen()) {
      $(elem).velocity({
        right: 0
      }, {
        duration: 500,
        easing: [0.19, 1, 0.22, 1],
        complete: function complete() {
          if (vhxm.components.shared.sidebar.state.animate_in_cb) {
            vhxm.components.shared.sidebar.state.onAnimateIn();
          }
        }
      });
    }
    // }
  };

  self.animatorOut = function (elem, isInit) {
    if (!isInit) {
      elem.onclick = function (ev) {
        ev.preventDefault();
        vhxm.components.shared.sidebar.state.isOpen(false);

        $('.c-sidebar').velocity({
          right: '-470'
        }, {
          duration: 500,
          easing: [0.19, 1, 0.22, 1],
          complete: function complete() {
            if (vhxm.components.shared.sidebar.state.animate_out_cb) {
              vhxm.components.shared.sidebar.state.onAnimateOut();
            }
          }
        });
      };
    }
  };
};

vhxm.components.shared.sidebar.toggleSidebar = function (state, route) {
  state = state === 'open' ? true : false;

  vhxm.components.shared.sidebar.state.isOpen(state);
  route ? m.route(route) : m.redraw();
};

vhxm.components.shared.sidebar.setTemplate = function (template) {
  vhxm.components.shared.sidebar.state.template(template);
  m.redraw();
};

vhxm.components.shared.sidebar.setModel = function (model) {
  vhxm.components.shared.sidebar.state.model(model);
  m.redraw();
};

vhxm.components.shared.sidebar.state = {
  isOpen: m.prop(false),
  skipTransition: m.prop(false),
  model: m.prop(null),
  template: m.prop(null),
  onAnimateOut: m.prop(null),
  onAnimateIn: m.prop(null)
};

vhxm.components.shared.sidebar.ui.container = {
  controller: vhxm.components.shared.sidebar.controller,
  view: function view(ctrl) {
    if (!vhxm.components.shared.sidebar.state.model()) {
      return m('.c-sidebar.bg-white.shadow--gray.background-white.loader-slate.loader--cover-hide.loader--large.is-loading', { config: ctrl.animatorIn });
    } else {
      return m('.c-sidebar.bg-gray-1.shadow--gray', { config: ctrl.animatorIn }, [m('a.c-sidebar--close.icon-circle.icon-x-navy.icon--xsmall', { config: ctrl.animatorOut }), vhxm.components.shared.sidebar.state.template()]);
    }
  }
};
