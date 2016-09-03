'use strict';

vhxm.components.shared.modal.controller = function (opts) {
  var self = this;

  self.setupStateType = function (type, opts) {
    if (type && opts[type]) {
      $.each(opts[type], function (key, item) {
        if (key.match(/Callback/)) {
          vhxm.components.shared.modal.state[type][key] = item;
        } else {
          vhxm.components.shared.modal.state[type][key](item);
        }
      });
    }
  };

  self.setupState = function (opts) {
    $.each(opts, function (key, item) {
      if (!key.match(/content|actions/)) {
        vhxm.components.shared.modal.state[key](item);
      }
    });

    self.setupStateType('actions', opts);
    self.setupStateType('content', opts);
  };
};
vhxm.components.shared.modal.open = function () {
  vhxm.components.shared.modal.state.onOpen()();
  vhxm.components.shared.modal.state.isOpen(true);
  m.redraw();
};

vhxm.components.shared.modal.close = function () {
  vhxm.components.shared.modal.state.isOpen(false);
  m.redraw();
  vhxm.components.shared.modal.state.onClose()();
};

vhxm.components.shared.modal.setTo = function (opts) {
  var ctrl = new vhxm.components.shared.modal.controller();
  m.startComputation();
  ctrl.setupState(opts);
  m.endComputation();
};

$(document).on('keyup', function (ev) {
  if (ev.keyCode === 27 && vhxm.components.shared.modal.state.isOpen()) {
    vhxm.components.shared.modal.close();
  }
});

vhxm.components.shared.modal.state = {
  isOpen: m.prop(false),
  size: m.prop('medium'),
  hasActions: m.prop(2),
  onOpen: m.prop(function () {}),
  onClose: m.prop(function () {}),
  content: {
    title: m.prop(null),
    body: m.prop(null)
  },
  actions: {
    left: m.prop('Cancel'),
    right: m.prop('OK'),
    single: m.prop('OK'),
    template: m.prop(null),
    leftCallback: vhxm.components.shared.modal.close,
    rightCallback: function rightCallback() {},
    singleCallback: vhxm.components.shared.modal.close
  }
};
vhxm.components.shared.modal.ui.container = {
  controller: function controller(opts) {
    var ctrl = new vhxm.components.shared.modal.controller();
    ctrl.setupState(opts);
  },
  view: function view(ctrl, opts) {
    var size = '.c-modal--' + vhxm.components.shared.modal.state.size();

    return m('.c-modal' + (vhxm.components.shared.modal.state.isOpen() ? '.is-open' : ''), [m('.c-modal-container' + (vhxm.components.shared.modal.state.hasActions() ? '.c-modal--has-actions' : '') + size, {
      config: function config(el) {
        var margin = -$(el).outerHeight() / 2;
        $(el).css('marginBottom', margin + 'px');
      }
    }, [vhxm.components.shared.modal.state.content.title() ? m.component(vhxm.components.shared.modal.ui.header) : '', vhxm.components.shared.modal.state.content.body() ? m.component(vhxm.components.shared.modal.ui.body) : '', vhxm.components.shared.modal.state.hasActions() ? m.component(vhxm.components.shared.modal.ui.actions) : '', m.component(vhxm.components.shared.modal.ui.close)]), vhxm.components.shared.modal.state.isOpen() ? m('.c-modal-bg', {
      onclick: vhxm.components.shared.modal.close
    }) : '']);
  }
};

vhxm.components.shared.modal.ui.close = {
  view: function view() {
    return m('.c-modal--close' + (vhxm.components.shared.size.state.smallOnly() ? '.is-hidden' : ''), {
      onclick: vhxm.components.shared.modal.close
    }, [m('i.icon.icon--xsmall.icon-x-white')]);
  }
};

vhxm.components.shared.modal.ui.header = {
  view: function view() {
    return m('.c-modal--header.padding-medium', [m('span', [m('.h2.head-4.head.secondary.text-left', vhxm.components.shared.modal.state.content.title())])]);
  }
};

vhxm.components.shared.modal.ui.body = {
  view: function view() {
    return m('.c-modal--body.padding-medium', [m.component(vhxm.components.shared.modal.state.content.body())]);
  }
};

vhxm.components.shared.modal.ui.actions = {
  view: function view() {
    var singleAction = parseInt(vhxm.components.shared.modal.state.hasActions(), 10) === 1;
    if (vhxm.components.shared.modal.state.actions.template()) {
      return m('.c-modal--actions', [m.component(vhxm.components.shared.modal.state.actions.template())]);
    } else {
      return m('.c-modal--actions', [m('.padding-small.text-center', [!singleAction ? m('.btn.btn--' + (singleAction ? 'fill' : 'half') + '.btn-gray', {
        onclick: vhxm.components.shared.modal.state.actions.leftCallback
      }, vhxm.components.shared.modal.state.actions.left()) : '', m('.btn.btn--' + (singleAction ? 'fill' : 'half') + '.btn-teal', {
        onclick: vhxm.components.shared.modal.state.actions[singleAction ? 'singleCallback' : 'rightCallback']
      }, vhxm.components.shared.modal.state.actions[singleAction ? 'single' : 'right']())])]);
    }
  }
};
