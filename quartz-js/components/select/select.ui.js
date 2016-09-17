vhxm.components.shared.select.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.select.controller(opts);
  },
  view: function(ctrl, opts) {
    if (opts.trigger) {
      opts.trigger.attrs.onclick = ctrl.handleClick;
      opts.trigger.attrs.className += ' c-select--trigger';
    }

    return m('.c-select--container.form' + (opts.search ? '.has-search' : '') + (opts.inline ? '.inline' : ''), {
        config: function(el, isInitialized) {
          if (opts.trigger && isInitialized) {
            let left_pos = el.querySelector('.c-select--trigger').offsetWidth * 0.25;
            el.querySelector('.c-select--caret').style.left = left_pos + 'px';
          }
        },
        onkeydown: ctrl.handleKeydown
      }, [
      opts.trigger ? opts.trigger :
      m('a.c-select--trigger.btn-dropdown-' + (opts.color ? opts.color : 'gray') + '.btn--fill' + (ctrl.state.isDropdownOpen() ? '.is-active' : ''), {
        href: '#',
        onclick: ctrl.handleClick
      }, ctrl.selectedLabel()),
      m('.c-select--dropdown' + (ctrl.state.isDropdownOpen() ? '.is-open' : ''), [
        opts.search ?
        // if search is enabled
        m('.c-select--input-container.padding-medium', [
          m.component(vhxm.components.shared.search_input.ui.container, {
            config: function(el, init) {
              el.value = ctrl.state.searchInputValue();
              if (ctrl.state.focusInput()){
                setTimeout(function() {
                  el.focus();
                  ctrl.state.focusInput(false);
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
        opts.action && ctrl.state.searchInputValue().length ?
        // show Create New Category dropdown footer action
        m('.c-select--footer.border-top', [
          m('a.btn-teal.btn--fill' + (ctrl.state.footerLoading() ? '.is-loading' : ''), {
            onclick: ctrl.handleAction,
            href: '#'
          }, opts.action + (ctrl.state.searchInputValue().length ? (' \'' + ctrl.state.searchInputValue() + '\'') : ''))
        ]) : '',
        m('span.c-select--caret')
      ])
    ]);
  }
};
