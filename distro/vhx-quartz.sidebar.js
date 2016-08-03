'use strict';

vhxm.components.shared.sidebar.controller = function (opts) {
  var self = this;
  self.opts = opts;

  if (self.opts) {
    if (self.opts.onInit) {
      self.opts.onInit();
    }
    if (self.opts.loadedState) {
      vhxm.components.shared.sidebar.setLoadedState(self.opts.loadedState);
    }
    if (opts.template) {
      vhxm.components.shared.sidebar.setTemplate(self.opts.template);
    }
    if (opts.onOpen) {
      vhxm.components.shared.sidebar.state.onOpen = self.opts.onOpen;
    }
    if (opts.onClose) {
      vhxm.components.shared.sidebar.state.onClose = self.opts.onClose;
    }
  }

  self.documentClickHandler = function (event) {

    var is_sidebar = !$(event.target).closest('body').length || $(event.target).hasClass('c-sidebar') || $(event.target).closest('[data-flash], tr.is-clickable, .c-sidebar' + (self.opts && self.opts.clickBlackList ? ', ' + self.opts.clickBlackList : '')).length;

    if (!is_sidebar && vhxm.components.shared.sidebar.state.isOpen()) {
      vhxm.components.shared.sidebar.toggle('close');
    }
  };

  self.animatorIn = function (elem, isInit) {
    var callback = function callback() {
      $(document).on('keyup', self.esc);
      $(document).on('click', self.documentClickHandler);
      vhxm.components.shared.sidebar.state.onOpen();
      vhxm.components.shared.sidebar.state.skipTransition(true);
    };

    if (vhxm.components.shared.sidebar.state.isOpen()) {
      if (vhxm.components.shared.sidebar.state.skipTransition()) {
        elem.style.right = '0px';
        callback();
      } else {
        $(elem).velocity({
          right: 0
        }, {
          duration: vhxm.components.shared.sidebar.state.skipTransition() ? 0 : 500,
          easing: [0.19, 1, 0.22, 1],
          complete: callback
        });
      }
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
        $(document).off('keyup', self.esc);
        $(document).off('click', self.documentClickHandler);
        vhxm.components.shared.sidebar.state.skipTransition(false);
      }
    });
  };

  self.esc = function (event) {
    if (event.keyCode === 27) {
      m.startComputation();
      vhxm.components.shared.sidebar.toggle('close');
      m.endComputation();
    }
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
  onClose: function onClose() {},
  onOpen: function onOpen() {}
};

vhxm.components.shared.sidebar.ui.container = {
  controller: vhxm.components.shared.sidebar.controller,
  view: function view(ctrl) {
    return m('.c-sidebar.bg-white.shadow--gray' + (vhxm.components.shared.sidebar.state.isLoaded() ? '' : '.loader-slate.loader--cover-hide.loader--large.is-loading'), {
      config: vhxm.components.shared.sidebar.state.isOpen() ? ctrl.animatorIn : ctrl.animatorOut
    }, vhxm.components.shared.sidebar.state.isLoaded() ? [m('a.c-sidebar--close.icon-circle.icon-x-navy.icon--xsmall', {
      onclick: function onclick() {
        vhxm.components.shared.sidebar.toggle('close');
      }
    }), m('div', {
      style: { opacity: 0 },
      config: function config(elem) {
        $(elem).velocity({ opacity: '1' }, { duration: 400 });
      }
    }, [m.component(vhxm.components.shared.sidebar.state.template())])] : '');
  }
};
