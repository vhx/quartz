vhxm.components.shared.select.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.select.controller(opts);
  },
  view: function(ctrl, opts) {
    let options = opts.search ? '.has-search' : '';
    options += opts.trigger ? '.has-trigger' : '';
    options += opts.action ? '.has-action' : '';
    options += opts.type === 'media' ? '.has-media' : '';
    options += opts.inline ? '.inline' : '';
    options += '.caret--' + (ctrl.position() === 'top' ? 'bottom' : 'top') + '-' + ctrl.caret;

    if (opts.trigger) {
      opts.trigger.attrs.onclick = ctrl.handleClick;
      opts.trigger.attrs.className = opts.trigger.attrs.className ? opts.trigger.attrs.className + ' c-select--trigger' : 'c-select--trigger';
    }

    return m('.c-select--container.relative.form' + options, {
        onmouseleave: function() {
          ctrl.state.highlightIndex(-1);
        },
        onkeydown: ctrl.handleKeydown
      }, [
      opts.trigger ? opts.trigger :
      m('a.c-select--trigger.btn-dropdown-' + (opts.color ? opts.color : 'gray') + '.btn--fill' + (ctrl.state.isDropdownOpen() ? '.is-active' : ''), {
        href: '#',
        onclick: ctrl.handleClick
      }, ctrl.selectedLabel()),
      m('.c-select--dropdown.bg-white.border.radius.fill-width' + (ctrl.state.isDropdownOpen() ? '.is-open' : ''), {
        style: {
          top: opts.offset ? opts.offset + 'px' : '40px'
        },
        config: function(el) {
          if (ctrl.position() === 'top') {
            el.style.top = - (el.offsetHeight + 10) + 'px';
          }
        }
      }, [
        opts.search ?
        // if search is enabled
        m('.c-select--input-container.padding-medium.absolute.bg-white.fill-width.radius', [
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
            search: function(query, callback) {
              if (ctrl.state.highlightIndex() === -1) {
                opts.search(query, callback);
              }
            },
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
        ]) : ''
      ])
    ]);
  }
};
