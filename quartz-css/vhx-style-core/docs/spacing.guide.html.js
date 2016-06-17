Q.components.guide.styleguide.ui.spacing_sizes = {};
Q.components.guide.styleguide.ui.spacing_positions = {};

Q.components.guide.styleguide.ui.spacing_sizes.container = {
  view: function(ctrl) {
    return m('section#guide--style-spacing_sizes', [
      m.component(Q.components.shared.guide.intro.ui.container, {
        title: 'Spacing'
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Sizes (Padding | Margin)',
        component: {
          controller: function() {
            this.items = [
              { size: 'xsmall', text: 'xsmall (5px)'},
              { size: 'small', text: 'small (10px)'},
              { size: 'medium', text: 'medium (20px)'},
              { size: 'large', text: 'large (40px)'},
              { size: 'xlarge', text: 'xlarge (8px)'},
              { size: 'xxlarge', text: 'xxlarge (160px)'}
            ];
          },
          view: function(ctrl) {
            return m('div', [
              ctrl.items.map(function(item) {
                return m.component(Q.components.guide.styleguide.ui.spacing_sizes.template, item);
              })
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.spacing_positions.container = {
  view: function(ctrl) {
    return m('section#guide--style-spacing_sizes', [
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Positions (Padding | Margin)',
        component: {
          controller: function() {
            this.items = [
              { size: 'large', text: 'all sides'},
              { size: 'vert-large', text: 'vertical sides'},
              { size: 'horz-large', text: 'horizontal sides'},
              { size: 'top-large', text: 'top side'},
              { size: 'bottom-xlarge', text: 'bottom side'},
              { size: 'left-large', text: 'left side'},
              { size: 'right-large', text: 'right side'}
            ];
          },
          view: function(ctrl) {
            return m('div', [
              ctrl.items.map(function(item) {
                return m.component(Q.components.guide.styleguide.ui.spacing_sizes.template, item);
              })
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.spacing_sizes.template = {
  view: function(ctrl, opts) {
    return m('div', [
      m('span.square.padding-' + opts.size + '.border.margin-right-medium.margin-bottom-medium', [
        m('strong.text-gray.text--xsmall', opts.text)
      ]),
      m('span.inline.bg-grid-light.margin-right-medium.margin-bottom-medium', [
        m('strong.inline.text-gray.text--xsmall.bg-white.border.margin-' + opts.size + '.padding-xsmall', opts.text)
      ])
    ]);
  }
};