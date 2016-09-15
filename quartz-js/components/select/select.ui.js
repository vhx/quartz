vhxm.components.shared.select.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.select.controller(opts);
  },
  view: function(ctrl, opts) {
    opts.custom_trigger ? opts.custom_trigger.attrs.onclick = ctrl.handleClick : '';
    opts.custom_trigger ? opts.custom_trigger.attrs.className += ' c-select--trigger' : '';

    return m('.c-select--container.form' + (opts.search ? '.has-search' : '') + (opts.inline ? '.inline' : ''), {
        config: function(el, isInitialized) {
          if (opts.custom_trigger && isInitialized) {
            var left_pos = el.querySelector('.c-select--trigger').offsetWidth * .25;
            el.querySelector('.c-select--caret').style.left = left_pos + 'px';
          }
        },
        onkeydown: ctrl.handleKeydown
      }, [
      opts.custom_trigger ?
      opts.custom_trigger :
      m('a.c-select--trigger.btn-dropdown-' + (opts.color ? opts.color : 'gray') + '.btn--fill' + (ctrl.state.isDropdownOpen() ? '.is-active' : ''), {
        href: '#',
        onclick: ctrl.handleClick
      }, ctrl.selectedLabel()),
      m('.c-select--dropdown' + (ctrl.state.isDropdownOpen() ? '.is-open' : ''), [
        opts.search ?
        // if search is enabled
        m('.c-select--input-container.padding-medium', [
          m.component(vhxm.components.shared.search_input.ui.container, {
            config: function(el) {
              if (ctrl.state.isDropdownOpen()) {
                setTimeout(function() {
                  el.focus();
                }, 10);
              }
            },
            callback: ctrl.searchCallback,
            search: opts.search,
            placeholder: 'Search',
            oninput: ctrl.handleInput
          })
        ]) : '',
        m.component(vhxm.components.shared.select.ui.list.container, opts, ctrl),
        m('input', {
          type: 'hidden',
          name: opts.name,
          value: ctrl.state.selected().value
        }),
        m('span.c-select--caret')
      ])
    ]);
  }
};
