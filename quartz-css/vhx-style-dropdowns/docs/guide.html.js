Q.components.guide.styleguide.ui.dropdowns = {};

Q.components.guide.styleguide.ui.dropdowns.container = {
  view: function(ctrl) {
    return m('section#guide--style-dropdowns', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Dropdowns'
      })
    ]);
  }
};