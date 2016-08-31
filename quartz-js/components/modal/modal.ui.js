vhxm.components.shared.modal.ui.container = {
  controller: function(opts) {
    var actions_exist = opts && opts.actions;

    this.options = {
      header: opts && opts.header || '',
      body: opts && opts.body || '',
      header_border: opts && opts.header_border || false,
      has_actions: opts && opts.has_actions || true,
      single_action: opts && opts.single_action || false,
      size: opts && opts.size || '',
      actions: {
        left: actions_exist && opts.actions.left || 'Cancel',
        right: actions_exist && opts.actions.right || 'OK',
        single: actions_exist && opts.actions.single || '',
        template: actions_exist && opts.actions.template,
        right_callback: actions_exist && opts.actions.right_callback,
        left_callback: actions_exist && opts.actions.left_callback || vhxm.components.shared.modal.close,
        single_callback: actions_exist && opts.actions.single_callback || vhxm.components.shared.modal.close
      }
    };
  },
  view: function(ctrl, opts) {
    var size = '.' + (vhxm.components.shared.modal.state.size() || ctrl.options.size);

    return m('.modal-container' + (vhxm.components.shared.modal.state.isOpen() ? '.open' : ''), [
      m('.modal' + (ctrl.options.has_actions ? '.modal--has-actions' : '') + (vhxm.components.shared.size.state.smallOnly() ? '.small-screen' : '') + size, [
        m.component(vhxm.components.shared.modal.ui.header, ctrl.options),
        m.component(vhxm.components.shared.modal.ui.body, ctrl.options),
        (vhxm.components.shared.modal.state.has_actions || ctrl.options.has_actions ? m.component(vhxm.components.shared.modal.ui.actions, ctrl.options) : ''),
        m.component(vhxm.components.shared.modal.ui.close)
      ]),
      (vhxm.components.shared.modal.state.isOpen() ? m('.modal-bg') : '')
    ]);
  }
};

vhxm.components.shared.modal.ui.close = {
  view: function() {
    return m('.modal--close' + (vhxm.components.shared.size.state.smallOnly() ? '.is-hidden' : ''), {
      onclick: function() {
        vhxm.components.shared.modal.close();
      }
    }, [
      m('i.icon.icon--xsmall.icon-x-white')
    ]);
  }
};

vhxm.components.shared.modal.ui.header = {
  view: function(ctrl, data) {
    return m('' + (data.header_border ? '.modal--header' : ''), [
      m('span', [
        m('.h2.head-4.head.secondary.text-left.margin-bottom-small.text-strong', (vhxm.components.shared.modal.state.content.header() || data.header))
      ])
    ]);
  }
};

vhxm.components.shared.modal.ui.body = {
  view: function(ctrl, data) {
    return m('.modal--body', [
      m('p.text.margin-bottom-medium', (vhxm.components.shared.modal.state.content.body() || data.body))
    ]);
  }
};

vhxm.components.shared.modal.ui.actions = {
  view: function(ctrl, data) {
    if (data.actions.template) {
      return m('.modal--actions', [
        m.component(data.actions.template)
      ]);
    } else {
      if (vhxm.components.shared.modal.state.single_action() || data.single_action) {
        return m('.modal--actions', [
          m('.row.margin-reset.modal--btn-container-padding', [
            m('.btn.btn--fill.btn-teal', {
              onclick: function() {
                if (vhxm.components.shared.modal.state.content.actions().single_callback) {
                  vhxm.components.shared.modal.state.content.actions().single_callback();
                } else if (data.actions.single_callback) {
                  data.actions.single_callback();
                }
              }
            }, (vhxm.components.shared.modal.state.content.actions().single || data.actions.single))
          ])
        ]);
      } else {
        return m('.modal--actions', [
          m('.row.margin-reset.modal--btn-container.modal--btn-container-padding', [
            m('.btn.btn--half.btn-gray', {
              onclick: function() {
                if (vhxm.components.shared.modal.state.content.actions().left_callback) {
                  vhxm.components.shared.modal.state.content.actions().left_callback();
                } else if (data.actions.left_callback) {
                  data.actions.left_callback();
                }
              }
            }, (vhxm.components.shared.modal.state.content.actions().left || data.actions.left)),
            m('.btn.btn--half.btn-teal', {
              onclick: function(ev) {
                if (vhxm.components.shared.modal.state.content.actions().right_callback) {
                  vhxm.components.shared.modal.state.content.actions().right_callback();
                } else if (data.actions.right_callback) {
                  data.actions.right_callback();
                }
              }
            }, (vhxm.components.shared.modal.state.content.actions().right || data.actions.right))
          ])
        ]);
      }
    }
  }
};
