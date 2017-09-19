Q.components.guide.styleguide.ui.text = {};

Q.components.guide.styleguide.ui.text.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Text'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('p.text-1.margin-bottom-large', 'Text 1 (16px). General marketing copy. Sell films, TV shows, web series, and more. Trusted by 5000+ sellers and their 1.25M customers.'),
              m('p.text-2.margin-bottom-large', 'Text 2 (14px). General admin copy. The first step to selling your videos is uploading them — features, shorts, clips, director\'s commentary, whatever you\'ve got.'),
              m('p.text-3.margin-bottom-large', 'Text 3 (13px). Secondary text (i.e the footer). Lovingly made in Brooklyn, NY USA.'),
              m('p.text-4.margin-bottom-large', 'Text 4 (11px). Small text for subtext (seldomly used).')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Alignment',
        component: {
          view: function() {
            return m('div', [
              m('p.text-left.margin-bottom-large', 'Text aligned to the left (default).'),
              m('p.text-center.margin-bottom-large', 'Text aligned to the center.'),
              m('p.text-right.margin-bottom-large', 'Text aligned to the right.'),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
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
              m('p.text-2.text--white.bg-grid-dark.margin-bottom-small.inline', 'Text White'),
              m('p.text-2.text--orange.margin-bottom-small', 'Text Orange'),
              m('p.text-2.text--debian.margin-bottom-small', 'Text Debian'),
              m('p.text-2.text--purple.margin-bottom-small', 'Text Purple'),
              m('p.text-2.text--currant.margin-bottom-small', 'Text Currant'),
              m('p.text-2.text--blue.margin-bottom-small', 'Text Blue'),
              m('p.text-2.text--vimeo-blue.margin-bottom-small', 'Text Vimeo Blue'),
              m('p.text-2.text--sunset-orange.margin-bottom-small', 'Text Sunset Orange'),
              m('p.text-2.text--southerly-sky.margin-bottom-small', 'Text Southerly Sky'),
              m('p.text-2.text--regent-gray.margin-bottom-small', 'Text Regent Gray'),
              m('p.text-2.text--astro-granite.margin-bottom-small', 'Text Astro Granite')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
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
      m.component(Q.components.shared.block.ui.container, {
        title: 'Links',
        component: {
          view: function() {
            return m('div', [
              m('a[href=#].text-2.block.margin-bottom-small', 'Link Teal (default)'),
              m('a[href=#].text-2.block.text--gray.margin-bottom-small', 'Link Gray'),
              m('a[href=#].text-2.text--gray-light.inline.bg-navy.margin-bottom-small', 'Link Gray Light'),
              m('a[href=#].text-2.block.text--navy.margin-bottom-small', 'Link Navy'),
              m('a[href=#].text-2.text--white.inline.bg-grid-dark.margin-bottom-small', 'Link White'),
              m('a[href=#].text-2.block.text--orange.margin-bottom-small', 'Link Orange'),
              m('a[href=#].text-2.block.text--debian.margin-bottom-small', 'Link Debian'),
              m('a[href=#].text-2.block.text--purple.margin-bottom-small', 'Link Purple'),
              m('a[href=#].text-2.block.text--currant.margin-bottom-small', 'Link Currant'),
              m('a[href=#].text-2.block.text--blue.margin-bottom-small', 'Link Blue'),
              m('a[href=#].text-2.block.text--vimeo-blue.margin-bottom-small', 'Link Vimeo Blue'),
              m('a[href=#].text-2.block.text--sunset-orange.margin-bottom-small', 'Link Sunset Orange'),
              m('a[href=#].text-2.block.text--southerly-sky.margin-bottom-small', 'Link Southerly Sky'),
              m('a[href=#].text-2.block.text--regent-gray.margin-bottom-small', 'Link Regent Gray'),
              m('a[href=#].text-2.block.text--astro-granite.margin-bottom-small', 'Link Astro Granite')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Links',
        component: {
          view: function() {
            return m('div', [
              m('a[href=#].text-2.is-disabled.block.margin-bottom-small', 'Link Teal (default)'),
              m('a[href=#].text-2.is-disabled.block.text--gray.margin-bottom-small', 'Link Gray'),
              m('a[href=#].text-2.is-disabled.text--gray-light.inline.bg-navy.margin-bottom-small', 'Link Gray Light'),
              m('a[href=#].text-2.is-disabled.block.text--navy.margin-bottom-small', 'Link Navy'),
              m('a[href=#].text-2.is-disabled.text--white.inline.bg-grid-dark.margin-bottom-small', 'Link White'),
              m('a[href=#].text-2.is-disabled.block.text--orange.margin-bottom-small', 'Link Orange'),
              m('a[href=#].text-2.is-disabled.block.text--debian.margin-bottom-small', 'Link Debian'),
              m('a[href=#].text-2.is-disabled.block.text--purple.margin-bottom-small', 'Link Purple'),
              m('a[href=#].text-2.is-disabled.block.text--currant.margin-bottom-small', 'Link Currant'),
              m('a[href=#].text-2.is-disabled.block.text--blue.margin-bottom-small', 'Link Blue'),
              m('a[href=#].text-2.is-disabled.block.text--vimeo-blue.margin-bottom-small', 'Link Vimeo Blue'),
              m('a[href=#].text-2.is-disabled.block.text--sunset-orange.margin-bottom-small', 'Link Sunset Orange'),
              m('a[href=#].text-2.is-disabled.block.text--southerly-sky.margin-bottom-small', 'Link Southerly Sky'),
              m('a[href=#].text-2.is-disabled.block.text--regent-gray.margin-bottom-small', 'Link Regent Gray'),
              m('a[href=#].text-2.is-disabled.block.text--astro-granite.margin-bottom-small', 'Link Astro Granite'),
            ]);
          }
        }
      })
    ]);
  }
};
