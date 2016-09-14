Q.components.guide.styleguide.ui.buttons = {};

Q.components.guide.styleguide.ui.buttons.container = {
  view: function(ctrl) {
    return m('section#guide--style-buttons', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Buttons'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Core Colors',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.margin-right-small.margin-bottom-small', 'Gray'),
              m('button.btn-teal.margin-right-small.margin-bottom-small', 'Teal'),
              m('button.btn-white.margin-right-small.margin-bottom-small', 'White'),
              m('button.btn-red.margin-right-small.margin-bottom-small', 'Red')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Other Colors',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-purple.margin-right-small.margin-bottom-small', 'Purple'),
              m('button.btn-green.margin-right-small.margin-bottom-small', 'Green'),
              m('button.btn-slate.margin-right-small.margin-bottom-small', 'Slate'),
              m('button.btn-black.margin-right-small.margin-bottom-small', 'Black'),
              m('button.btn-yellow.margin-right-small.margin-bottom-small', 'Yellow'),
              m('div.bg-grid-dark.padding-small.inline', [
                m('button.btn-transparent', 'Transparent')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'External Company Colors',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-twitter.margin-right-small.margin-bottom-small', 'Twitter'),
              m('button.btn-facebook.margin-right-small.margin-bottom-small', 'Facebook'),
              m('button.btn-tumblr.margin-right-small.margin-bottom-small', 'Tumblr'),
              m('button.btn-paypal.margin-right-small.margin-bottom-small', 'Paypal'),
              m('button.btn-roku.margin-right-small.margin-bottom-small', 'Roku')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.btn--small.block.margin-bottom-small', 'Small'),
              m('button.btn-gray.btn--medium.block.margin-bottom-small', 'Medium'),
              m('button.btn-gray.btn--large.block.margin-bottom-small', 'Large'),
              m('button.btn-gray.btn--half.margin-bottom-small', 'Half'),
              m('button.btn-gray.btn--fill.margin-bottom-small', 'Fill')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Typography',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.margin-right-small.margin-bottom-small', 'Helvetica'),
              m('button.btn-gray.btn--brandon.margin-right-small.margin-bottom-small', 'Brandon'),
              m('button.btn-teal.margin-right-small.margin-bottom-small', 'Helvetica'),
              m('button.btn-teal.btn--brandon.margin-right-small.margin-bottom-small', 'Brandon')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Processing State',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.is-processing.margin-right-small.margin-bottom-small', 'Button'),
              m('button.btn-teal.is-processing.margin-right-small.margin-bottom-small', 'Button'),
              m('button.btn-white.is-processing.margin-right-small.margin-bottom-small', 'Button'),
              m('button.btn-red.is-processing.margin-right-small.margin-bottom-small', 'Button')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Dropdowns',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-dropdown-gray.margin-right-small.margin-bottom-small', 'Dropdown'),
              m('button.btn-dropdown-teal.margin-right-small.margin-bottom-small', 'Dropdown'),
              m('button.btn-dropdown-white.margin-right-small.margin-bottom-small', 'Dropdown'),
              m('select.btn-dropdown-white.margin-bottom-small', {
              }, [
                m('option', {
                  value: '',
                  disabled: true,
                  selected: true
                }, 'Choose subtitle language'),
                m('option', {
                  value: 'ru'
                }, 'Russian'),
                m('option', {
                  value: 'en'
                }, 'English'),
                m('option', {
                  value: 'CN'
                }, 'Chinese')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Button Groups',
        component: {
          view: function() {
            return m('div', [
              m('div.btn-group.margin-bottom-medium', [
                m('button.btn-white.small-thirds.is-selected', 'Button 1'),
                m('button.btn-white.small-thirds', 'Button 2'),
                m('button.btn-white.small-thirds', 'Button 3')
              ]),
              m('div.btn-group.margin-bottom-medium', [
                m('button.btn-teal.small-thirds.is-selected', 'Button 1'),
                m('button.btn-teal.small-thirds', 'Button 2'),
                m('button.btn-teal.small-thirds', 'Button 3')
              ]),
              m('div.btn-group.margin-bottom-medium', [
                m('button.btn-gray.small-thirds.is-selected', 'Button 1'),
                m('button.btn-gray.small-thirds', 'Button 2'),
                m('button.btn-gray.small-thirds', 'Button 3')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Icons',
        component: {
          view: function() {
            return m('div', [
              m('p.text-2.margin-bottom-medium', m.trust('For a full list of available icons <a href="/styleguide/icons">go here</a>.')),
              m('button.btn-gray.icon-product-navy.icon--left.margin-right-small.margin-bottom-small', 'Icon Left'),
              m('button.btn-gray.icon-product-navy.icon--right.margin-right-small.margin-bottom-small', 'Icon Center'),
              m('button.btn-gray.icon-product-navy.icon--left.margin-right-small.margin-bottom-small', [
                m('.icon-chevron-down-navy.icon--right', 'Icon Both')
              ])
            ]);
          }
        }
      }),
    ]);
  }
};
