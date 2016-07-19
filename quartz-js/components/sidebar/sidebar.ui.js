vhxm.components.shared.sidebar.ui.container = {
  controller: function() {
    return new vhxm.components.shared.sidebar.controller();
  },
  view: function(ctrl) {
    if (!vhxm.components.shared.sidebar.state.model()) {
      return m('.c-sidebar.bg-white.shadow--gray.background-white.loader-slate.loader--cover-hide.loader--large.is-loading', { config: ctrl.animatorIn })
    } else {
      return m('.c-sidebar.bg-gray-1.shadow--gray', { config: ctrl.animatorIn }, [
        m('a.c-sidebar--close.icon-circle.icon-x-navy.icon--xsmall', { config: ctrl.animatorOut }),
        (vhxm.components.shared.sidebar.state.template())
      ])
    }
  }
};
