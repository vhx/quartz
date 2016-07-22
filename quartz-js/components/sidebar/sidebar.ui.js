vhxm.components.shared.sidebar.ui.container = {
  controller: vhxm.components.shared.sidebar.controller,
  view: function view(ctrl) {
    if (!vhxm.components.shared.sidebar.state.isLoaded()) {
      return m('.c-sidebar.bg-white.shadow--gray.background-white.loader-slate.loader--cover-hide.loader--large.is-loading', {
        config: vhxm.components.shared.sidebar.state.isOpen() ? ctrl.animatorIn : ctrl.animatorOut
      });
    }

    return m('.c-sidebar.bg-white.shadow--gray', {
      config: vhxm.components.shared.sidebar.state.isOpen() ? ctrl.animatorIn : ctrl.animatorOut
    }, [
      m('a.c-sidebar--close.icon-circle.icon-x-navy.icon--xsmall', {
        onclick: function() {
          vhxm.components.shared.sidebar.toggle('close');
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
    ]);
  }
};
