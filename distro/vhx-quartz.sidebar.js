'use strict';

vhxm.components.shared.sidebar.controller = function (opts) {
  var self = this;

  if (opts) {
    if (opts.onInit) {
      opts.onInit();
    }
    if (opts.loadedState) {
      vhxm.components.shared.sidebar.setLoadedState(opts.loadedState);
    }
    if (opts.template) {
      vhxm.components.shared.sidebar.setTemplate(opts.template);
    }
    if (opts.onOpen) {
      vhxm.components.shared.sidebar.state.onOpen(opts.onOpen);
    }
    if (opts.onClose) {
      vhxm.components.shared.sidebar.state.onClose(opts.onClose);
    }
  }

  self.animatorIn = function (elem, isInit) {
    if (vhxm.components.shared.sidebar.state.isOpen()) {
      $(elem).velocity({
        right: 0
      }, {
        duration: vhxm.components.shared.sidebar.state.skipTransition() ? 0 : 500,
        easing: [0.19, 1, 0.22, 1],
        complete: function complete() {
          vhxm.components.shared.sidebar.state.onOpen();
          vhxm.components.shared.sidebar.state.skipTransition(true);
        }
      });
    }
  };

  self.animatorOut = function (elem, isInit) {
    $(elem).velocity({
      right: '-470'
    }, {
      duration: 500,
      easing: [0.19, 1, 0.22, 1],
      complete: function complete() {
        vhxm.components.shared.sidebar.state.onClose();
        vhxm.components.shared.sidebar.state.skipTransition(false);
      }
    });
  };
};

vhxm.components.shared.sidebar.toggle = function (state, route) {
  state = state === 'open' ? true : false;

  if (vhxm.components.shared.sidebar.state.isOpen() && !state || !vhxm.components.shared.sidebar.state.isOpen() && state) {
    vhxm.components.shared.sidebar.state.isOpen(state);
    if (route) {
      return m.route(route);
    }

    m.redraw();
  }
};

vhxm.components.shared.sidebar.setTemplate = function (template) {
  vhxm.components.shared.sidebar.state.template(template);
};

vhxm.components.shared.sidebar.setLoadedState = function (obj) {
  if (!!(obj && obj.constructor && obj.call && obj.apply)) {
    vhxm.components.shared.sidebar.state.isLoaded = obj;
  } else {
    throw 'Loaded State must be a Mithril prop.';
  }

  m.redraw();
};

vhxm.components.shared.sidebar.state = {
  isOpen: m.prop(false),
  isLoaded: m.prop(false),
  skipTransition: m.prop(false),
  template: m.prop(null),
  onClose: m.prop(function () {}),
  onOpen: m.prop(function () {})
};

vhxm.components.shared.sidebar.ui.container = {
  controller: vhxm.components.shared.sidebar.controller,
  view: function view(ctrl) {
    if (!vhxm.components.shared.sidebar.state.isLoaded()) {
      return m('.c-sidebar.bg-white.shadow--gray.background-white.loader-slate.loader--cover-hide.loader--large.is-loading', {
        config: vhxm.components.shared.sidebar.state.isOpen() ? ctrl.animatorIn : ctrl.animatorOut
      });
    }

    return m('.c-sidebar.bg-white.shadow--gray', {
      config: vhxm.components.shared.sidebar.state.isOpen() ? ctrl.animatorIn : ctrl.animatorOut
    }, [m('a.c-sidebar--close.icon-circle.icon-x-navy.icon--xsmall', {
      onclick: function onclick() {
        vhxm.components.shared.sidebar.toggle('close');
      }
    }), m('div', {
      style: { opacity: 0 },
      config: function config(elem) {
        $(elem).velocity({ opacity: '1' }, { duration: 400 });
      }
    }, [m.component(vhxm.components.shared.sidebar.state.template())])]);
  }
};
