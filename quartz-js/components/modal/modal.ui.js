vhxm.components.shared.modal.ui.container = {
  controller: function(opts) {
    let ctrl = new vhxm.components.shared.modal.controller();
    ctrl.setupState(opts);
  },
  view: function(ctrl, opts) {
    let size = '.c-modal--' + (vhxm.components.shared.modal.state.size());

    return m('.c-modal' + (vhxm.components.shared.modal.state.isOpen() ? '.is-open' : ''), [
      m('.c-modal-container' + (vhxm.components.shared.modal.state.hasActions() ? '.c-modal--has-actions' : '') + size, {
        config: function(el) {
          let margin = - $(el).outerHeight() / 2;
          $(el).css('marginBottom', margin + 'px');
        }
      }, [
        vhxm.components.shared.modal.state.content.title() ?
          m.component(vhxm.components.shared.modal.ui.header) : '',
        vhxm.components.shared.modal.state.content.body() ?
          m.component(vhxm.components.shared.modal.ui.body) : '',
        (vhxm.components.shared.modal.state.hasActions() ? m.component(vhxm.components.shared.modal.ui.actions) : ''),
        m.component(vhxm.components.shared.modal.ui.close)
      ]),
      (vhxm.components.shared.modal.state.isOpen() ? m('.c-modal-bg', {
        onclick: vhxm.components.shared.modal.close
      }) : '')
    ]);
  }
};

vhxm.components.shared.modal.ui.close = {
  view: function() {
    return m('.c-modal--close' + (vhxm.components.shared.size.state.smallOnly() ? '.is-hidden' : ''), {
      onclick: vhxm.components.shared.modal.close
    }, [
      m('i.icon.icon--xsmall.icon-x-white')
    ]);
  }
};

vhxm.components.shared.modal.ui.header = {
  view: function() {
    return m('.c-modal--header.padding-medium', [
      m('span', [
        m('.h2.head-4.head.secondary.text-left', vhxm.components.shared.modal.state.content.title())
      ])
    ]);
  }
};

vhxm.components.shared.modal.ui.body = {
  view: function() {
    return m('.c-modal--body.padding-medium', [
      m.component(vhxm.components.shared.modal.state.content.body())
    ]);
  }
};

vhxm.components.shared.modal.ui.actions = {
  view: function() {
    let singleAction = parseInt(vhxm.components.shared.modal.state.hasActions(), 10) === 1;
    if (vhxm.components.shared.modal.state.actions.template()) {
      return m('.c-modal--actions', [
        m.component(vhxm.components.shared.modal.state.actions.template())
      ]);
    } else {
      return m('.c-modal--actions', [
        m('.padding-small.text-center', [
          !singleAction ?
          m('.btn.btn--' + (singleAction ? 'fill' : 'half') + '.btn-gray', {
            onclick: vhxm.components.shared.modal.state.actions.leftCallback
          }, vhxm.components.shared.modal.state.actions.left()) : '',
          m('.btn.btn--' + (singleAction ? 'fill' : 'half') + '.btn-teal', {
            onclick: vhxm.components.shared.modal.state.actions[ singleAction ? 'singleCallback' : 'rightCallback']
          }, vhxm.components.shared.modal.state.actions[ singleAction ? 'single' : 'right']())
        ])
      ]);
    }
  }
};
