Q.components.guide.styleguide.ui.avatars = {};

Q.components.guide.styleguide.ui.avatars.container = {
  view: function(ctrl) {
    return m('section#guide--style-avatars', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Avatars'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('span.inline.padding-right-small', [
                m('span.avatar.color-teal.avatar--small', [
                  m('span.avatar-user.user-avatar')
                ])
              ]),
              m('span.inline.padding-right-small', [
                m('span.avatar.color-teal.avatar--medium', [
                  m('span.avatar-user.user-avatar', {
                    style: {
                      backgroundImage: 'url(https://secure.gravatar.com/avatar/74b978ed4f10e05a6c2898c4f5516189.png)'
                    }
                  })
                ])
              ]),
              m('span.inline.padding-right-small', [
                m('span.avatar.color-teal.avatar--large', [
                  m('span.avatar-user.user-avatar', {
                    style: {
                      backgroundImage: 'url(https://secure.gravatar.com/avatar/460c13d4904dc7f889f00d2cd4c3e6e8.png)'
                    }
                  })
                ])
              ]),
              m('span.inline.padding-right-small', [
                m('span.avatar.color-teal.avatar--xlarge', [
                  m('span.avatar-user.user-avatar', {
                    style: {
                      backgroundImage: 'url(https://vhx.imgix.net/assets/1f843fdc-34da-4302-bd4f-06e5bd7ef2c3/IMG_7891.GIF)'
                    }
                  })
                ])
              ])
            ]);
          }
        }
      })
    ]);
  }
};