Q.components.guide.styleguide.ui.forms = {};

Q.components.guide.styleguide.ui.forms.container = {
  view: function(ctrl) {
    return m('section#guide--style-forms', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Forms',
        intro: 'Form styling is offered inside of a <code>form</code> with a <code>form</code> class. Additional <code>input</code> styles are displayed below.'
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
                  for: 'secret_key'
                }, 'Secret Key (disabled)'),
                m('input', {
                  type: 'number',
                  name: 'secret_key',
                  disabled: true,
                  placeholder: 'Enter your secret key (disabled)'
                })
              ]),
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'domain_name'
                }, 'Domain Name (error)'),
                m('input.is-error', {
                  type: 'text',
                  name: 'domain_name',
                  placeholder: 'Enter your domain name (error)'
                })
              ]),
              m('fieldset.margin-bottom-medium.inner-button', [
                m('label', {
                  for: 'domain_name'
                }, 'Domain Name (inner button)'),
                m('.inner-button', [
                  m('input', {
                    type: 'text',
                    name: 'domain_name',
                    placeholder: 'Enter your domain name'
                  }),
                  m('button.btn.btn-teal.btn--small', 'Verify Domain')
                ])
              ]),
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'state'
                }, 'State (small input)'),
                m('input.small', {
                  type: 'text',
                  name: 'state',
                  placeholder: 'Enter your domain name (small input)'
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
