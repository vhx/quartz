Q.components.guide.styleguide.ui.images = {};

Q.components.guide.styleguide.ui.images.container = {
  view: function(ctrl) {
    return m('section#guide--style-images', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Images'
      })
    ]);
  }
};