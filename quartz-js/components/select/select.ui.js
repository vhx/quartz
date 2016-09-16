vhxm.components.shared.select.ui.container = {
  controller: function(opts) {
    opts.init = true;
    return new vhxm.components.shared.select.controller(opts);
  },
  view: function(ctrl, opts) {
    return m('.c-select--container.form' + (opts.search ? '.has-search' : '') + (opts.inline ? '.inline' : ''), {
        onkeydown: ctrl.handleKeydown
      }, [
      m('a.c-select--trigger.btn-dropdown-' + (opts.color ? opts.color : 'gray') + '.btn--fill' + (ctrl.state.isDropdownOpen() ? '.is-active' : ''), {
        href: '#',
        onclick: ctrl.handleClick
      }, ctrl.selectedLabel()),
      m('.c-select--dropdown' + (ctrl.state.isDropdownOpen() ? '.is-open' : ''), [
        opts.search ?
        // if search is enabled
        m('.c-select--input-container.padding-medium', [
          m.component(vhxm.components.shared.search_input.ui.container, {
            // config: function(el) {
            //   if (ctrl.state.isDropdownOpen()) {
            //     setTimeout(function() {
            //       el.focus();
            //     }, 10);
            //   }
            // },
            callback: ctrl.searchCallback,
            search: opts.search,
            placeholder: 'Search',
            oninput: ctrl.handleInput
          })
        ]) : '',
        m.component(vhxm.components.shared.select.ui.list.container, opts, ctrl),
        opts.footer_action && ctrl.state.searchInputValue().length ?
        // show Create New Category dropdown footer action
        m('.c-select--footer.border-top', [
          m('a.c-select--footer-link.block.text--bold.text-center.padding-vert-small', {
            href: '#'
          }, opts.footer_action + (ctrl.state.searchInputValue().length ? (' \'' + ctrl.state.searchInputValue() + '\'') : ''))
        ]) : ''
      ])
    ]);
  }
};
