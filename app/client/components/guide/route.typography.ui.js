Q.components.guide.styleguide.ui.typography = {};

Q.components.guide.styleguide.ui.typography.container = {
  view: function(ctrl) {
    return m('section#guide--style-typography', [
      // m.component(Q.components.guide.styleguide.ui.headers.container),
      m.component(Q.components.guide.styleguide.ui.text.container)
    ]);
  }
};