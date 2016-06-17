Q.components.guide.styleguide.ui.spacing = {};

Q.components.guide.styleguide.ui.spacing.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
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
                return m.component(Q.components.guide.styleguide.ui.spacing.template, item);
              })
            ]);
          }
        }
      }),
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
                return m.component(Q.components.guide.styleguide.ui.spacing.template, item);
              })
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.spacing.template = {
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

    //
    // <!-- Positions -->
    // <div class="margin-vert-large padding-bottom-medium border-bottom border-light">
    //   <h4 class="margin-bottom-medium text-navy"><strong>Positions (Padding | Margin)</strong></h4>
    //
    //   <div>
    //     <span class="square padding-large border margin-right-medium margin-bottom-medium">
    //       <strong class="text-gray text--small">all sides</strong>
    //     </span>
    //     <span class="inline bg-grid-light margin-right-medium margin-bottom-medium">
    //       <strong class="inline text-gray text--small bg-white border margin-large padding-small">all sides</strong>
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span class="square padding-vert-large border margin-right-medium margin-bottom-medium">
    //       <strong class="text-gray text--small">vertical sides</strong>
    //     </span>
    //     <span class="inline bg-grid-light margin-right-medium margin-bottom-medium">
    //       <strong class="inline text-gray text--small bg-white border margin-vert-large padding-small">vertical sides</strong>
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span class="square padding-horz-large border margin-right-medium margin-bottom-medium">
    //       <strong class="text-gray text--small">horizontal sides</strong>
    //     </span>
    //     <span class="inline bg-grid-light margin-right-medium margin-bottom-medium">
    //       <strong class="inline text-gray text--small bg-white border margin-horz-large padding-small">horizontal sides</strong>
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span class="square padding-top-large border margin-right-medium margin-bottom-medium">
    //       <strong class="text-gray text--small">top side</strong>
    //     </span>
    //     <span class="inline bg-grid-light margin-right-medium margin-bottom-medium">
    //       <strong class="inline text-gray text--small bg-white border margin-top-large padding-small">top side</strong>
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span class="square padding-bottom-large border margin-right-medium margin-bottom-medium">
    //       <strong class="text-gray text--small">bottom side</strong>
    //     </span>
    //     <span class="inline bg-grid-light margin-right-medium margin-bottom-medium">
    //       <strong class="inline text-gray text--small bg-white border margin-bottom-large padding-small">bottom side</strong>
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span class="square padding-left-large border margin-right-medium margin-bottom-medium">
    //       <strong class="text-gray text--small">left side</strong>
    //     </span>
    //     <span class="inline bg-grid-light margin-right-medium margin-bottom-medium">
    //       <strong class="inline text-gray text--small bg-white border margin-left-large padding-small">left side</strong>
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span class="square padding-right-large border margin-right-medium margin-bottom-medium">
    //       <strong class="text-gray text--small">right side</strong>
    //     </span>
    //     <span class="inline bg-grid-light margin-right-medium margin-bottom-medium">
    //       <strong class="inline text-gray text--small bg-white border margin-right-large padding-small">right side</strong>
    //     </span>
    //   </div>
    // </div>
