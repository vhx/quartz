Q.components.guide.styleguide.ui.checkbox = {};

Q.components.guide.styleguide.ui.checkbox.container = {
  view: function(ctrl) {
    return m('section#guide--style-checkbox', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Checkbox'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Standard Checkbox',
        component: {
          view: function() {
            return m('form.form', [
              m.component(Q.components.guide.styleguide.ui.checkbox.standard, {
                size: 'small',
                name: 'small-standard'
              }),
              m.component(Q.components.guide.styleguide.ui.checkbox.standard, {
                size: 'medium',
                name: 'medium-standard'
              }),
              m.component(Q.components.guide.styleguide.ui.checkbox.standard, {
                size: 'large',
                name: 'large-standard'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Toggle Checkbox',
        component: {
          view: function() {
            return m('form.form', [
              m.component(Q.components.guide.styleguide.ui.checkbox.toggle, {
                size: 'small',
                name: 'small-toggle'
              }),
              m.component(Q.components.guide.styleguide.ui.checkbox.toggle, {
                size: 'medium',
                name: 'medium-toggle'
              })
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.checkbox.standard = {
  view: function(ctrl, opts) {
    return m('fieldset.checkbox.' + (opts.size ? opts.size : 'medium'), [
      m('input[type=checkbox]', {
        checked: true,
        name: opts.name,
        id: opts.name
      }),
      m('label', {
        for: opts.name
      }, [
        m('span.checkbox--contain', [
          m('span.checkbox--icon', [
            m('span.checkbox-animate')
          ]),
          m('span.checkbox--label')
        ])
      ])
    ]);
  }
};

Q.components.guide.styleguide.ui.checkbox.toggle = {
  view: function(ctrl, opts) {
    return m('fieldset.checkbox.alt.' + (opts.size ? opts.size : 'medium'), [
      m('input[type=checkbox]', {
        checked: true,
        name: opts.name,
        id: opts.name
      }),
      m('label', {
        for: opts.name
      }, [
        m('span.checkbox--contain', [
          m('span.checkbox--icon'),
          m('span.checkbox--circle', [
            m('i.circle-top', m.trust('<span></span>')),
            m('i.circle-bottom', m.trust('<span></span>'))
          ]),
          m('span.checkbox--label')
        ])
      ])
    ]);
  }
};