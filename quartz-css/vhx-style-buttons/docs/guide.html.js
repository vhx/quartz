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
              m('button.btn-gray', 'Gray'),
              m('button.btn-teal', 'Teal'),
              m('button.btn-white', 'White'),
              m('button.btn-red', 'Red')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Other Colors',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-purple', 'Purple'),
              m('button.btn-green', 'Green'),
              m('button.btn-slate', 'Slate'),
              m('button.btn-black', 'Black'),
              m('button.btn-yellow', 'Yellow'),
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
              m('button.btn-twitter', 'Twitter'),
              m('button.btn-facebook', 'Facebook'),
              m('button.btn-tumblr', 'Tumblr'),
              m('button.btn-paypal', 'Paypal'),
              m('button.btn-roku', 'Roku')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.btn--small.block', 'Small'),
              m('button.btn-gray.btn--medium.block', 'Medium'),
              m('button.btn-gray.btn--large.block', 'Large'),
              m('button.btn-gray.btn--half', 'Half'),
              m('button.btn-gray.btn--fill', 'Fill')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Typography',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray', 'Helvetica'),
              m('button.btn-gray.btn--brandon', 'Brandon'),
              m('button.btn-teal', 'Helvetica'),
              m('button.btn-teal.btn--brandon', 'Brandon')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Processing State',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.is-processing', 'Button'),
              m('button.btn-teal.is-processing', 'Button'),
              m('button.btn-white.is-processing', 'Button'),
              m('button.btn-red.is-processing', 'Button')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Dropdowns',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-dropdown-gray', 'Dropdown'),
              m('button.btn-dropdown-teal', 'Dropdown'),
              m('button.btn-dropdown-white', 'Dropdown')
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
              m('button.btn-gray.icon-product-navy.icon--left.margin-bottom-medium', 'Icon Left'),
              m('button.btn-gray.icon-product-navy.icon--right.margin-bottom-medium', 'Icon Center'),
              m('button.btn-gray.icon-product-navy.icon--left.margin-bottom-medium', [
                m('.icon-chevron-down-navy.icon--right', 'Icon Both')
              ])
            ]);
          }
        }
      }),
    ]);
  }
};