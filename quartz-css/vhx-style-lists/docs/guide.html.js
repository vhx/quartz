Q.components.guide.styleguide.ui.lists = {};

Q.components.guide.styleguide.ui.lists.container = {
  view: function(ctrl) {
    return m('section#guide--style-lists', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Lists'
      })
    ]);
  }
};