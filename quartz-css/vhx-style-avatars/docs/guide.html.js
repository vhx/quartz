Q.components.guide.styleguide.ui.avatars = {};

Q.components.guide.styleguide.ui.avatars.container = {
  view: function(ctrl) {
    return m('section#guide--style-avatars', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Avatars'
      })
    ]);
  }
};