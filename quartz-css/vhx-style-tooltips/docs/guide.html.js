Q.components.guide.styleguide.ui.tooltips = {};

Q.components.guide.styleguide.ui.tooltips.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.guide.intro.ui.container, {
        title: 'Tooltips'
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Standard',
        component: {
          view: function() {
            return m('div', [
              m('p', [
                m.trust('<a href=#>Hover here</a> for the tooltip.'),
              ]),
              m('div.tooltip.tooltip--small.arrow--top-center', [
                m('p.text--gray', 'This is a tooltip. Here is some information.')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Fixed',
        component: {
          view: function() {
            return m('div', [
              m('p.margin-bottom-medium', 'Tooltip is fixed and always shows.'),
              m('div.tooltip.tooltip--fixed.arrow--top-left', [
                m('p.text--gray', 'This is a tooltip. Here is some information.')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('div.tooltip.tooltip--fixed.tooltip--small.arrow--top-left.margin-bottom-medium', [
                m('p.text--gray', 'This is a small tooltip.')
              ]),
              m('div.tooltip.tooltip--fixed.tooltip--medium.arrow--top-left.margin-bottom-medium', [
                m('p.text--gray', 'This is a medium tooltip.')
              ]),
              m('div.tooltip.tooltip--fixed.tooltip--large.arrow--top-left.margin-bottom-medium', [
                m('p.text--gray', 'This is a large tooltip.')
              ]),
              m('div.tooltip.tooltip--fixed.tooltip--xlarge.arrow--top-left.margin-bottom-medium', [
                m('p.text--gray', 'This is an xlarge tooltip.')
              ]),
              m('div.tooltip.tooltip--fixed.tooltip--fill.arrow--top-left', [
                m('p.text--gray', 'This is a tooltip that fills its container.')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.guide.block.ui.container, {
        title: 'Arrow Positions',
        component: {
          view: function() {
            return m('div', [
              m('p.margin-bottom-medium', 'Arrows can be positioned on any side of the tooltip. A few examples below. See code to the right for all arrow positions.'),
              m('div.tooltip.tooltip--fixed.tooltip--small.arrow--top-right.margin-bottom-medium', [
                m('p.text--gray', 'Arrow top right.')
              ]),
              m('div.tooltip.tooltip--fixed.tooltip--small.arrow--right-center.margin-bottom-medium', [
                m('p.text--gray', 'Arrow right center.')
              ]),
              m('div.tooltip.tooltip--fixed.tooltip--small.arrow--left-center.margin-bottom-medium', [
                m('p.text--gray', 'Arrow left center.')
              ]),
              m('div.tooltip.tooltip--fixed.tooltip--small.arrow--bottom-left.margin-bottom-medium', [
                m('p.text--gray', 'Arrow bottom left.')
              ])
            ]);
          }
        }
      })
    ]);
  }
};