Q.components.guide.js.ui.sizes = {};
Q.components.guide.js.ui.sizes.container = {
  view: function(ctrl) {
    return m('section#guide--component-sizes', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Sizes',
        intro: 'Helper state component that gives a means of checking the current size of the view. This is useful for delivering different UI components based on the media size.'
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'media', type: 'method', description: m.trust('The current media (screen) size. Either <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">smedium</span>, <span class="text--bold text--navy text-4">medium</span>, or <span class="text--bold text--navy text-4">large</span>') },
          { name: 'smallOnly', type: 'method', description: m.trust('The screen size is 40em (640px) or less.') },
          { name: 'smallToMedium', type: 'method', description: m.trust('The screen size is 64em (1024px) or less.') },
          { name: 'smediumOnly', type: 'method', description: m.trust('The screen size is between 40.063em (641px) and 54em (864px)') },
          { name: 'mediumOnly', type: 'method', description: m.trust('The screen size is between 40.063em (641px) and 64em (1024px).') },
          { name: 'mediumUp', type: 'method', description: m.trust('The screen size is 40.063em (641px) or greater.') },
          { name: 'largeOnly', type: 'method', description: m.trust('The screen size is between 64.063em (1025px) and 90em (1440px)') },
          { name: 'largeUp', type: 'method', description: m.trust('The screen size is 64.063em (1025px) or greater.') }
        ]
      })
    ]);
  }
};