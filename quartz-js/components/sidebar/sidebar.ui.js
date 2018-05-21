vhxm.components.shared.sidebar.ui.container = {
  controller: vhxm.components.shared.sidebar.controller,
  view: function view(ctrl) {
    console.log('ui');
    return m('.c-sidebar.bg-white.shadow--gray' + (vhxm.components.shared.sidebar.state.isLoaded() ? '' : '.loader-slate.loader--cover-hide.loader--large.is-loading'), {
      config: vhxm.components.shared.sidebar.state.isOpen() ? ctrl.animatorIn : ctrl.animatorOut
    }, vhxm.components.shared.sidebar.state.isLoaded() ? [
      m('a.c-sidebar--close.icon-circle.icon-x-black.icon--xsmall', {
        onclick: function() {
          setTimeout(function() {
            vhxm.components.shared.sidebar.toggle('close');
          }, 0);
        }
      }),
      m('div', {
        style: { opacity: 0 },
        config: function(elem) {
          $(elem).velocity(
            { opacity: '1' },
            { duration: 400 }
          );
        }
      }, [
        m.component(vhxm.components.shared.sidebar.state.template())
      ])
    ] : '');
  }
};
