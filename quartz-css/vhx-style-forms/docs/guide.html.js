Q.components.guide.styleguide.ui.forms = {};

Q.components.guide.styleguide.ui.forms.container = {
  view: function(ctrl) {
    return m('section#guide--style-forms', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Forms'
      })
    ]);
  }
};