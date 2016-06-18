Q.components.guide.styleguide.ui.modals = {};

Q.components.guide.styleguide.ui.modals.container = {
  view: function(ctrl) {
    return m('section#guide--style-modals', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Modals'
      })
    ]);
  }
};