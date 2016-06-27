vhxm.components.shared.autosuggest.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.autosuggest.controller(opts);
  },
  view: function(ctrl, opts) {
    if (opts.reset()) {
      ctrl.state.selected(null);
      opts.reset(false);
    }
    return m('.c-autosuggest--container.form', {
        onkeydown: ctrl.handleKeydown,
        onclick: ctrl.handleClick,
      }, [
      m('.c-autosuggest--input-container', [
        m('input.c-autosuggest--search', {
          config: function(el) {
            if (ctrl.state.hasFocus()) {
              setTimeout(function() {
                el.focus();
              }, 10);
            }
          },
          autocomplete: 'off',
          name: opts.name ? opts.name : null,
          type: 'text',
          value: ctrl.state.selected(),
          placeholder: opts.placeholder,
          oninput: ctrl.handleInput
        })
      ]),
      m('.c-autosuggest--list' + (ctrl.isListOpen() ? '.is-open' : ''), [
        m.component(vhxm.components.shared.autosuggest.ui.list.container, opts, ctrl),
      ])
    ]);
  }
};
