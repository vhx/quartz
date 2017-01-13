Q.components.guide.styleguide.ui.forms = {};

Q.components.guide.styleguide.ui.forms.container = {
  view: function(ctrl) {
    return m('section#guide--style-forms', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Forms',
        intro: 'Form styling is offered inside of a <code>form</code> with a <code>form</code> class'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Standard',
        component: {
          view: function() {
            return m('form.form.border.radius.padding-medium', [
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'user_name'
                }, 'User name'),
                m('input', {
                  type: 'text',
                  name: 'user_name',
                  placeholder: 'Enter a your user_name'
                })
              ]),
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'email'
                }, 'Email'),
                m('input', {
                  type: 'email',
                  name: 'email',
                  placeholder: 'Enter your email'
                })
              ]),
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'message'
                }, 'Enter your message'),
                m('textarea', {
                  type: 'message',
                  name: 'message',
                  placeholder: 'Enter a message'
                })
              ]),
              m('.clearfix',
                m('button.btn-teal.right', {
                  type: 'submit'
                }, 'Submit')
              )
            ]);
          }
        }
      }),

    ]);
  }
};
