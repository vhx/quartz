Q.components.guide.styleguide.ui.headers = {};

Q.components.guide.styleguide.ui.headers.container = {
  view: function(ctrl) {
    return m('section#guide--style-header', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Headers'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('h1.head-1.margin-bottom-small', 'Header 1'),
              m('h1.head-2.margin-bottom-small', 'Header 2'),
              m('h1.head-3.margin-bottom-small', 'Header 3'),
              m('h1.head-4.margin-bottom-small', 'Header 4'),
              m('h1.head-5.margin-bottom-small', 'Header 5')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Alternate Gothic (for Numbers)',
        component: {
          view: function() {
            return m('div', [
      m('h1.head-1.head--gothic.margin-bottom-small', 'Header 1'),
      m('h1.head-2.head--gothic.margin-bottom-small', 'Header 2'),
      m('h1.head-3.head--gothic.margin-bottom-small', 'Header 3')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Colors',
        component: {
          view: function() {
            return m('div', [
              m('h1.head-3.head--navy.margin-bottom-small.inline', 'Header Navy'), 
              m('span', '(default)'),
              m('h1.head-3.head--gray.margin-bottom-small', 'Header Gray'),
              m('h1.head-3.head--teal.margin-bottom-small', 'Header Teal'),
              m('h1.head-3.head--white.inline.margin-bottom-small.bg-grid-dark', 'Header White')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('a.head-4.margin-bottom-small.inline', { href="#" }, 'Header Navy'),
              m('span', 'default'),
              m('a.head-4.head--gray.block.margin-bottom-small', { href="#" }, 'Header Gray'),
              m('a.head-4.head--teal.block.margin-bottom-small', { href="#" }, 'Header Teal'),
              m('a.head-4.head--white.block.inline.margin-bottom-small.bg-grid-dark', { href="#" }, 'Header White')
            ]);
          }
        }
      })
    ]);
  }
};
