Q.components.guide.styleguide.ui.images = {};

Q.components.guide.styleguide.ui.images.container = {
  view: function(ctrl) {
    return m('section#guide--style-images', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Media'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Embeds',
        component: {
          view: function() {
            return m('div', [
              m('p.margin-bottom-small', 'Default — 16x9, responsive'),
              m('div.embed', [
                m('iframe.embed-content', {
                  height: '100%',
                  width: '100%',
                  frameborder: '0',
                  src: 'https://embed.vhx.tv/videos/70370?title=0'
                })
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Images',
        component: {
          view: function() {
            return m('div', [
              m('p.margin-bottom-small', 'Default — 16x9, responsive'),
              m('.img', {
                style: {
                  backgroundImage: 'url(/image.jpg)'
                }
              }),
              m('p.margin-top-large.margin-bottom-small', 'Small - 16x9, 40px height'),
              m('.img.img--small', {
                style: {
                  backgroundImage: 'url(/image.jpg)'
                }
              }),
              m('p.margin-top-large.margin-bottom-small', 'Medium - 16x9, 80px height'),
              m('.img.img--medium', {
                style: {
                  backgroundImage: 'url(/image.jpg)'
                }
              }),
              m('p.margin-top-large.margin-bottom-small', 'Large - 16x9, 150px height'),
              m('.img.img--large', {
                style: {
                  backgroundImage: 'url(/image.jpg)'
                }
              }),
              m('p.margin-top-large.margin-bottom-small', 'XLarge - 16x9, 250px height'),
              m('.img.img--xlarge', {
                style: {
                  backgroundImage: 'url(/image.jpg)'
                }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Placeholders',
        component: {
          view: function() {
            return m('div', [
              m('p.margin-bottom-medium', 'Placeholders can be made by just not including a background image.'),
              m('p.margin-bottom-small', 'Standard'),
              m('.img.img--large'),
              m('p.margin-top-large.margin-bottom-small', 'Borderless'),
              m('.img.img--large.img--borderless'),
            ]);
          }
        }
      })
    ]);
  }
};