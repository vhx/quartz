Q.components.guide.styleguide.ui.text = {};

Q.components.guide.styleguide.ui.text.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.guide.intro.ui.container, {
        title: 'Text'
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('p.text-1.margin-bottom-large', 'Text 1 (16px). General marketing copy. Sell films, TV shows, web series, and more. Trusted by 5000+ sellers and their 1.25M customers.'),
              m('p.text-2.margin-bottom-large', 'Text 2 (14px). General admin copy. The first step to selling your videos is uploading them — features, shorts, clips, director\'s commentary, whatever you\'ve got.'),
              m('p.text-3.margin-bottom-large', 'Text 3 (13px). Secondary text (i.e the footer). Lovingly made in Brooklyn, NY USA.')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Colors',
        component: {
          view: function() {
            return m('div', [
              m('p.text-2.text--gray.margin-bottom-small', 'Text Gray (default)'),
              m('p.text-2.text--gray-light.inline.bg-navy.margin-bottom-small', 'Text Gray Light'),
              m('p.text-2.text--navy.margin-bottom-small', 'Text Navy'),
              m('p.text-2.text--teal.margin-bottom-small', 'Text Teal'),
              m('p.text-2.text--yellow.margin-bottom-small', 'Text Yellow'),
              m('p.text-2.text--red.margin-bottom-small', 'Text Red'),
              m('p.text-2.text--green.margin-bottom-small', 'Text Green'),
              m('p.text-2.text--white.inline.bg-grid-darksmall', 'Text White')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Styles',
        component: {
          view: function() {
            return m('div', [
              m('p.text-2.text--italic.margin-bottom-small', 'Text Italic'),
              m('p.text-2.text--bold.margin-bottom-small', 'Text Bold'),
              m('p.text-2.text--transparent.bg-grid-light.inline.margin-bottom-small', 'Text Transparent')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Links',
        component: {
          view: function() {
            return m('div', [
              m('a[href=#].text-2.block.margin-bottom-small', 'Link Teal (default)'),
              m('a[href=#].text-2.block.text--gray.margin-bottom-small', 'Link Gray'),
              m('a[href=#].text-2.text--gray-light.inline.bg-navy.margin-bottom-small', 'Link Gray Light'),
              m('a[href=#].text-2.block.text--navy.margin-bottom-small', 'Link Navy'),
              m('a[href=#].text-2.text--white.inline.bg-grid-dark.margin-bottom-small', 'Link White')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Links',
        component: {
          view: function() {
            return m('div', [
              m('a[href=#].text-2.is-disabled.block.margin-bottom-small', 'Link Teal (default)'),
              m('a[href=#].text-2.is-disabled.block.text--gray.margin-bottom-small', 'Link Gray'),
              m('a[href=#].text-2.is-disabled.text--gray-light.inline.bg-navy.margin-bottom-small', 'Link Gray Light'),
              m('a[href=#].text-2.is-disabled.block.text--navy.margin-bottom-small', 'Link Navy'),
              m('a[href=#].text-2.is-disabled.text--white.inline.bg-grid-dark.margin-bottom-small', 'Link White')
            ]);
          }
        }
      })
    ]);
  }
};