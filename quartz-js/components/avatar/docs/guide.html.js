Q.components.guide.js.ui.avatar = {};
Q.components.guide.js.ui.avatar.container = {
  view: function(ctrl) {
    return m('section#guide--component-avatar', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Avatar',
        intro: 'User avatar.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div', [
              m('span.inline.padding-right-small', [
                m.component(vhxm.components.shared.avatar.ui, {
                  size: 'small',
                })
              ]),
              m('span.inline.padding-right-small', [
                m.component(vhxm.components.shared.avatar.ui, {
                  size: 'medium',
                  image: 'https://secure.gravatar.com/avatar/74b978ed4f10e05a6c2898c4f5516189.png',
                })
              ]),
              m('span.inline.padding-right-small', [
                m.component(vhxm.components.shared.avatar.ui, {
                  size: 'large',
                  image: 'https://secure.gravatar.com/avatar/460c13d4904dc7f889f00d2cd4c3e6e8.png',
                })
              ]),
              m('span.inline.padding-right-small', [
                m.component(vhxm.components.shared.avatar.ui, {
                  size: 'xlarge',
                  image: 'https://vhx.imgix.net/assets/1f843fdc-34da-4302-bd4f-06e5bd7ef2c3/IMG_7891.GIF'
                })
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'image', type: 'string', default_value: null, description: 'A url referencing an avatar image for the user.' },
          { name: 'size', type: 'string', default_value: 'medium', description: m.trust('The size of the avatar. Can be <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">medium</span>, <span class="text--bold text--navy text-4">large</span> or <span class="text--bold text--navy text-4">xlarge</span>.') }
        ]
      })
    ]);
  }
};
