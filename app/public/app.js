'use strict';

window.Q = {
  components: {
    route: {
      styleguide: { ui: {} },
      js: { ui: {} }
    },
    shared: {
      intro: { ui: {} },
      block: { ui: {} }
    },
    guide: {
      styleguide: {
        ui: {}
      }
    }
  },
  layouts: {
    standard: {
      ui: {}
    }
  }
};;Q.components.guide.styleguide.ui.buttons = {};

Q.components.guide.styleguide.ui.buttons.container = {
  view: function(ctrl) {
    return m('section#guide--style-buttons', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Buttons'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Core Colors',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray', 'Gray'),
              m('button.btn-teal', 'Teal'),
              m('button.btn-white', 'White'),
              m('button.btn-red', 'Red')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Other Colors',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-purple', 'Purple'),
              m('button.btn-green', 'Green'),
              m('button.btn-slate', 'Slate'),
              m('button.btn-black', 'Black'),
              m('button.btn-yellow', 'Yellow'),
              m('div.bg-grid-dark.padding-small.inline', [
                m('button.btn-transparent', 'Transparent')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'External Company Colors',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-twitter', 'Twitter'),
              m('button.btn-facebook', 'Facebook'),
              m('button.btn-tumblr', 'Tumblr'),
              m('button.btn-paypal', 'Paypal'),
              m('button.btn-roku', 'Roku')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.btn--small.block', 'Small'),
              m('button.btn-gray.btn--medium.block', 'Medium'),
              m('button.btn-gray.btn--large.block', 'Large'),
              m('button.btn-gray.btn--half', 'Half'),
              m('button.btn-gray.btn--fill', 'Fill')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Typography',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray', 'Helvetica'),
              m('button.btn-gray.btn--brandon', 'Brandon'),
              m('button.btn-teal', 'Helvetica'),
              m('button.btn-teal.btn--brandon', 'Brandon')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Processing State',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.is-processing', 'Button'),
              m('button.btn-teal.is-processing', 'Button'),
              m('button.btn-white.is-processing', 'Button'),
              m('button.btn-red.is-processing', 'Button')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Dropdowns',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-dropdown-gray', 'Dropdown'),
              m('button.btn-dropdown-teal', 'Dropdown'),
              m('button.btn-dropdown-white', 'Dropdown')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Button Groups',
        component: {
          view: function() {
            return m('div', [
              m('div.btn-group.margin-bottom-medium', [
                m('button.btn-white.small-thirds.is-selected', 'Button 1'),
                m('button.btn-white.small-thirds', 'Button 2'),
                m('button.btn-white.small-thirds', 'Button 3')
              ]),
              m('div.btn-group.margin-bottom-medium', [
                m('button.btn-teal.small-thirds.is-selected', 'Button 1'),
                m('button.btn-teal.small-thirds', 'Button 2'),
                m('button.btn-teal.small-thirds', 'Button 3')
              ]),
              m('div.btn-group.margin-bottom-medium', [
                m('button.btn-gray.small-thirds.is-selected', 'Button 1'),
                m('button.btn-gray.small-thirds', 'Button 2'),
                m('button.btn-gray.small-thirds', 'Button 3')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Icons',
        component: {
          view: function() {
            return m('div', [
              m('p.text-2.margin-bottom-medium', m.trust('For a full list of available icons <a href="/styleguide/icons">go here</a>.')),
              m('button.btn-gray.icon-product-navy.icon--left.margin-bottom-medium', 'Icon Left'),
              m('button.btn-gray.icon-product-navy.icon--right.margin-bottom-medium', 'Icon Center'),
              m('button.btn-gray.icon-product-navy.icon--left.margin-bottom-medium', [
                m('.icon-chevron-down-navy.icon--right', 'Icon Both')
              ])
            ]);
          }
        }
      }),
    ]);
  }
};Q.components.guide.styleguide.ui.checkbox = {};

Q.components.guide.styleguide.ui.checkbox.container = {
  view: function(ctrl) {
    return m('section#guide--style-checkbox', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Checkbox'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Standard Checkbox',
        component: {
          view: function() {
            return m('form.form', [
              m.component(Q.components.guide.styleguide.ui.checkbox.standard, {
                size: 'small',
                name: 'small-standard'
              }),
              m.component(Q.components.guide.styleguide.ui.checkbox.standard, {
                size: 'medium',
                name: 'medium-standard'
              }),
              m.component(Q.components.guide.styleguide.ui.checkbox.standard, {
                size: 'large',
                name: 'large-standard'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Toggle Checkbox',
        component: {
          view: function() {
            return m('form.form', [
              m.component(Q.components.guide.styleguide.ui.checkbox.toggle, {
                size: 'small',
                name: 'small-toggle'
              }),
              m.component(Q.components.guide.styleguide.ui.checkbox.toggle, {
                size: 'medium',
                name: 'medium-toggle'
              })
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.checkbox.standard = {
  view: function(ctrl, opts) {
    return m('fieldset.checkbox.' + (opts.size ? opts.size : 'medium'), [
      m('input[type=checkbox]', {
        checked: true,
        name: opts.name,
        id: opts.name
      }),
      m('label', {
        for: opts.name
      }, [
        m('span.checkbox--contain', [
          m('span.checkbox--icon', [
            m('span.checkbox-animate')
          ]),
          m('span.checkbox--label')
        ])
      ])
    ]);
  }
};

Q.components.guide.styleguide.ui.checkbox.toggle = {
  view: function(ctrl, opts) {
    return m('fieldset.checkbox.alt.' + (opts.size ? opts.size : 'medium'), [
      m('input[type=checkbox]', {
        checked: true,
        name: opts.name,
        id: opts.name
      }),
      m('label', {
        for: opts.name
      }, [
        m('span.checkbox--contain', [
          m('span.checkbox--icon'),
          m('span.checkbox--circle', [
            m('i.circle-top', m.trust('<span></span>')),
            m('i.circle-bottom', m.trust('<span></span>'))
          ]),
          m('span.checkbox--label')
        ])
      ])
    ]);
  }
};Q.components.guide.styleguide.ui.colors_core = {};
Q.components.guide.styleguide.ui.colors_brand = {};
Q.components.guide.styleguide.ui.colors_external = {};
Q.components.guide.styleguide.ui.colors_tools = {};

Q.components.guide.styleguide.ui.colors_template = {
  controller: function() {

    // Black and White
    this.bw = [
      { name: 'white', css: '.bg-grid-dark', sub_css: '.box-shadow' },
      { name: 'white-transparent', css: '.bg-grid-dark' },
      { name: 'black' },
      { name: 'black-transparent', css: '.bg-grid-light' }
    ];

    // Grays
    this.grays = [
      { name: 'gray-1' },
      { name: 'gray-2' },
      { name: 'gray-3' },
      { name: 'gray-4' },
      { name: 'gray-5' },
      { name: 'gray-6' },
      { name: 'gray-7' },
      { name: 'gray-8' }
    ];

    // Other
    this.other = [
      { name: 'teal-1' },
      { name: 'teal-2' },
      { name: 'teal-3' },
      { name: 'red' },
      { name: 'navy' },
      { name: 'navy-transparent', css: 'bg-grid-light' },
    ];

    // Brand - VHX
    this.vhx_brands = [
      { name: 'orange' },
      { name: 'debian' },
      { name: 'purple' },
      { name: 'currant' },
      { name: 'blue' },
      { name: 'teal' },
      { name: 'green' },
      { name: 'yellow' }
    ];

    // Brand - External
    this.external_brands = [
      { name: 'facebook-blue' },
      { name: 'twitter-blue' },
      { name: 'tumblr-blue' },
      { name: 'paypal-blue' },
      { name: 'roku-purple' }
    ];
  },
  view: function(ctrl, data) {
    return m('.margin-vert-large', [
      data.name ?
        m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', data.name) : '',
      data.description ?
        m('div.text-contain.text-2', [
          m('p', 'When you need a lighter or darker version of a brand color (say for a new button) use the SASS darken, lighten, and transparentize methods (show to the right).')
        ]) : '',
      ctrl[data.type].map(function(item) {
        return m('.inline.margin-right-medium.margin-bottom-medium' + (item.css || ''), [
          m('span.square.square--large.bg-' + item.name + (item.sub_css || ''), [
            m('span.square-tag.tag.text-3', '$' + item.name)
          ])
        ]);
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.colors_core.container = {
  view: function(ctrl) {
    return m('section#guide--style-colors', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'UI Colors',
        intro: 'These colors are used within the admin for all UI elements. You can reference them in your CSS as SASS variables (shown below and to the right). They are the building blocks for the VHX product and <em class="text--italic">your key to the secret of the multiverse.</em>'
      }),
      m.component(Q.components.guide.styleguide.ui.colors_template, {
        type: 'bw',
        name: 'Black and White'
      }),
      m.component(Q.components.guide.styleguide.ui.colors_template, {
        type: 'grays',
        name: 'Grays'
      }),
      m.component(Q.components.guide.styleguide.ui.colors_template, {
        type: 'other',
        name: 'Other'
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.colors_brand.container = {
  view: function(ctrl) {
    return m('section#guide--style-brand-colors', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Brand Colors',
        intro: '<p>These colors are used within the VHX marketing pages and in general are used very sparingly. If you ever need a bright color from the rainbow, YOU ARE HERE.</p><p>When you need a lighter or darker version of a brand color (say for a new button) use the SASS darken, lighten, and transparentize methods (show to the right).</p>'
      }),
      m.component(Q.components.guide.styleguide.ui.colors_template, {
        type: 'vhx_brands',
        name: 'VHX Brand Palette (Marketing Purposes)',
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.colors_external.container = {
  view: function(ctrl) {
    return m('section#guide--style-brand-colors', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Brand Colors',
        intro: 'When you need a lighter or darker version of a brand color (say for a new button) use the SASS darken, lighten, and transparentize methods (show to the right).'
      }),
      m.component(Q.components.guide.styleguide.ui.colors_template, {
        type: 'external_brands',
        name: 'Company Brands',
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.colors_tools.container = {
  view: function() {
    return m('section#guide--style-colors-tools', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Tools'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Darken',
        description: 'For alternating a text color when the outputted background color is too light (i.e. unknown site theme colors), we can user our Darken Text helper.',
        component: {
          view: function() {
            return m('div', [
              m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', 'Lighten/Darken Text'),
              m('p.margin-bottom-medium.text-2', 'For lightening or darkening a color (Ruby or SASS)'),
              m('.inline.padding-medium.margin-right-small.text--white', {
                style: { background: '#1a8e87' }
              }, 'Darken Teal'),
              m('.bg-teal-2.inline.padding-medium.margin-right-small.text--white', 'Regular Teal'),
              m('.inline.padding-medium.margin-right-small.text--white', {
                style: { background: '#34dad0' }
              }, 'Lighten Teal')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Transparency',
        description: 'For tranparentizing a color (SASS)',
        component: {
          view: function() {
            return m('div', [
              m('div.bg-teal-2.inline.padding-medium.margin-right-small.text--white', {
                style: { opacity: 0.50 }
              }, '50% Teal'),
              m('div.bg-teal-2.inline.padding-medium.margin-right-small.text--white', 'Regular Teal')
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.styleguide.ui.display = {};

Q.components.guide.styleguide.ui.display.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Layout'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Display',
        component: {
          view: function() {
            return m('.row.text-left', [
              m('span.text-center.margin-vert-medium.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'Block'),
              m('span.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block'),
              m('span.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block'),
              m('span.margin-vert-medium.padding-medium.inline.bg-gray-2 text-gray.text--small', 'Inline Block')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Lists',
        component: {
          view: function() {
            return m('div', [
              m('p.text--italic.margin-bottom-large', 'Note: Borders for demo purposes'),
              m('p.margin-bottom-medium', 'Inline list with floated elements and margins built in.'),
              m('ul.inline-list', [
                m('li.border', 'Item'),
                m('li.border', 'Item'),
                m('li.border', 'Item'),
              ]),
              m('p.margin-bottom-medium.margin-top-large', 'Inline list with inline-block elements with no padding or margins built-in.'),
              m('ul.inline-list.inline', [
                m('li.border', 'Item'),
                m('li.border', 'Item'),
                m('li.border', 'Item')
              ])
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.styleguide.ui.grid = {};

Q.components.guide.styleguide.ui.grid.container = {
  view: function(ctrl) {
    return m('section#guide--style-grid', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Grid'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Basic Setup',
        component: {
          controller: function() {
            this.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
          },
          view: function(ctrl) {
            return m('div.row.text-center', [
              ctrl.items.map(function(item) {
                return m('div.column.small-1', [
                  m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', item)
                ]);
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Responsive',
        component: {
          view: function() {
            return m('div.row.text-center', [
              m('.column.medium-6.large-4', [
                m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 1)
              ]),
              m('.column.medium-6.large-4', [
                m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 2)
              ]),
              m('.column.medium-4.large-4', [
                m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 3)
              ]),
              m('.column.show-for-large-up.large-4', [
                m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 4)
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Offsets',
        component: {
          view: function() {
            return m('div', [
              m('p.text--italic', 'You can use any of the following classes:'),
              m('ul', [
                m('li', [
                  m('code.text--yellow', '[size]-centered')
                ]),
                m('li', [
                  m('code.text--yellow', '[size]-offset-[columns]')
                ])
              ]),
              m('div.margin-vert-medium', [
                m('div.row text-center', [
                  m('div.column small-centered small-12', [
                    m('div.column small-16 medium-6', [
                      m('span.padding-vert-large block bg-gray-2 text-gray text--small', 1)
                    ]),
                    m('div.column small-16 medium-6', [
                      m('span.padding-vert-large block bg-gray-2 text-gray text--small', 2)
                    ]),
                    m('div.column small-16 medium-4', [
                      m('span.padding-vert-large block bg-gray-2 text-gray text--small', 3)
                    ])
                  ])
                ])
              ]),
              m('div.margin-vert-medium', [
                m('div.row text-center', [
                  m('div.column small-16 medium-offset-4 medium-8', [
                    m('span.padding-vert-large block bg-gray-2 text-gray text--small', 1)
                  ]),
                  m('div.column small-16 medium-4', [
                    m('span.padding-vert-large block bg-gray-2 text-gray text--small', 2)
                  ])
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Hide and Show',
        component: {
          view: function() {
            return m('div', [
              m('p.text--italic', 'You can use any of the following classes:'),
              m('ul', [
                m('li', [
                  m('code.text--yellow', 'show-for-[size]')
                ]),
                m('li', [
                  m('code.text--yellow', 'hide-for-[size]')
                ]),
                m('li', [
                  m('code.text--yellow', 'show-for-[size]-only')
                ]),
                m('li', [
                  m('code.text--yellow', 'hide-for-[size]-only')
                ]),
                m('li', [
                  m('code.text--yellow', 'show-for-[size]-up')
                ]),
                m('li', [
                  m('code.text--yellow', 'hide-for-[size]-down')
                ]),
                m('li', [
                  m('code.text--yellow', 'show-for-touch')
                ]),
                m('li', [
                  m('code.text--yellow', 'hide-for-touch')
                ])
              ]),
              m('div.margin-vert-medium', [
                m('div.row.text-center', [
                  m('div.column.small-16.show-for-small-only', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for small')
                  ]),
                  m('div.column medium-16 show-for-medium-only', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for medium')
                  ]),
                  m('div.column.large-16.show-for-large-only', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for large')
                  ])
                ])
              ]),
              m('div.margin-vert-medium', [
                m('div.row.text-center', [
                  m('div.column.hide-for-small-only.medium-4', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for medium up')
                  ]),
                  m('div.column small-16 medium-4', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for all')
                  ]),
                  m('div.column small-16 medium-8 large-4', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for all')
                  ]),
                  m('div.column.large-4.show-for-large-up', [
                    m('span.padding-vert-large.block.bg-gray-2.text-gray.text--small', 'shows for large up')
                  ])
                ])
              ])
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.styleguide.ui.spacing_sizes = {};
Q.components.guide.styleguide.ui.spacing_positions = {};

Q.components.guide.styleguide.ui.spacing_sizes.container = {
  view: function(ctrl) {
    return m('section#guide--style-spacing_sizes', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Spacing'
      }),
      m.component(Q.components.shared.block.ui.container, {
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
      m.component(Q.components.shared.block.ui.container, {
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
};Q.components.guide.styleguide.ui.icons_styles = {};
Q.components.guide.styleguide.ui.icons_names = {};

Q.components.guide.styleguide.ui.icons_styles.container = {
  view: function(ctrl) {
    return m('section#guide--style-icons', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Icons'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Standard',
        component: {
          view: function() {
            return m('div', [
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.icons_names.container = {
  view: function(ctrl) {
    return m('section#guide--style-icons', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Icon Names'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Name List',
        component: {
          view: function() {
            return m('ul.margin-top-large.small-block-grid-5.text-center', [
              Q.components.guide.styleguide.ui.icons_list().map(function(icon) {
                return m('li', [
                  m('h4.text-2.text--gray.padding-bottom-small', icon.name),
                  m('span.inline.' + icon.css, [
                    m('i.icon.icon--xlarge.icon-' + icon.name)
                  ])
                ]);
              })
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.styleguide.ui.icons_list = function() { return [{"name":"activity"},{"name":"alert"},{"name":"add-member"},{"name":"align"},{"name":"amex-card"},{"name":"andorid"},{"name":"android-workmark"},{"name":"angle-left"},{"name":"angle-down"},{"name":"angle-right"},{"name":"angle-up"},{"name":"apple"},{"name":"apps"},{"name":"arrow-down"},{"name":"arrow-left"},{"name":"arrow-right"},{"name":"arrow-up"},{"name":"audio"},{"name":"ban"},{"name":"bell"},{"name":"briefcase"},{"name":"calendar"},{"name":"camera"},{"name":"card"},{"name":"caret-down"},{"name":"caret-left"},{"name":"caret-up"},{"name":"caret-right"},{"name":"cassette-frown"},{"name":"cassette"},{"name":"check"},{"name":"chevron-down"},{"name":"chevron-left"},{"name":"chevron-right"},{"name":"chevron-up"},{"name":"chrome"},{"name":"clapboard"},{"name":"code"},{"name":"clock"},{"name":"cog"},{"name":"collection"},{"name":"comment"},{"name":"csv"},{"name":"comments"},{"name":"currency"},{"name":"desktop"},{"name":"diners-card"},{"name":"discover-card"},{"name":"doc"},{"name":"download-alt"},{"name":"download"},{"name":"edit"},{"name":"dropbox"},{"name":"ellipsis"},{"name":"ellipsis-vertical"},{"name":"envelope-sealed"},{"name":"envelope"},{"name":"external-link"},{"name":"eye"},{"name":"facebook"},{"name":"followers"},{"name":"gift"},{"name":"globe"},{"name":"help"},{"name":"hi"},{"name":"grid"},{"name":"home"},{"name":"instagram"},{"name":"invoice"},{"name":"ios"},{"name":"jcb-card"},{"name":"justify"},{"name":"key"},{"name":"list"},{"name":"link"},{"name":"lock"},{"name":"marker"},{"name":"mastercard-card"},{"name":"member"},{"name":"money-card"},{"name":"media"},{"name":"money-circle"},{"name":"money"},{"name":"paypal-card"},{"name":"pic"},{"name":"play-outline"},{"name":"play"},{"name":"plus-thin"},{"name":"plus"},{"name":"popular"},{"name":"power"},{"name":"printer"},{"name":"product"},{"name":"question"},{"name":"random"},{"name":"referral"},{"name":"refresh"},{"name":"reply"},{"name":"roku-wordmark"},{"name":"revert"},{"name":"roku"},{"name":"search"},{"name":"sliders"},{"name":"star-outline"},{"name":"star"},{"name":"tag"},{"name":"todo"},{"name":"tags"},{"name":"transaction"},{"name":"trash"},{"name":"tumblr"},{"name":"tv"},{"name":"tvos"},{"name":"twitter"},{"name":"upload-alt"},{"name":"upload"},{"name":"vhs"},{"name":"vhx"},{"name":"visa-card"},{"name":"window"},{"name":"x"},{"name":"xmas-tree"}]; };Q.components.guide.styleguide.ui.images = {};

Q.components.guide.styleguide.ui.images.container = {
  view: function(ctrl) {
    return m('section#guide--style-images', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Images'
      })
    ]);
  }
};Q.components.guide.styleguide.ui.lists = {};

Q.components.guide.styleguide.ui.lists.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Lists'
      })
    ]);
  }
};Q.components.guide.styleguide.ui.loaders = {};

Q.components.guide.styleguide.ui.loaders.container = {
  view: function(ctrl) {
    return m('section#guide--style-loaders', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Loaders'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Core Colors',
        component: {
          view: function() {
            return m('div', [
              m('span.loader-slate'),
              m('span.loader-teal'),
              m('span.bg-grid-dark.inline', [
                m('span.loader-white')
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('span.loader-slate.loader--small'),
              m('span.loader-slate.loader--medium'),
              m('span.loader-slate.loader--large'),
              m('span.loader-slate.loader--xlarge')
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.styleguide.ui.radio = {};

Q.components.guide.styleguide.ui.radio.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Radio Input'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Horizontal Layout',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.radio.ui.container, {
                color: 'gray',
                name: 'horz-gray',
                items: [
                  {
                    label: 'This',
                    value: 'this',
                    checked: true
                  },
                  {
                    label: 'That',
                    value: 'that'
                  }
                ]
              }),
              m.component(vhxm.components.shared.radio.ui.container, {
                color: 'teal',
                name: 'horz-teal',
                items: [
                  {
                    label: 'Here',
                    value: 'here',
                    checked: true
                  },
                  {
                    label: 'There',
                    value: 'there'
                  }
                ]
              }),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Stacked Layout',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.radio.ui.container, {
                color: 'gray',
                stacked: true,
                name: 'stacked-gray',
                items: [
                  {
                    label: 'Near',
                    value: 'near',
                    checked: true
                  },
                  {
                    label: 'Far',
                    value: 'far'
                  }
                ]
              }),
              m.component(vhxm.components.shared.radio.ui.container, {
                color: 'teal',
                stacked: true,
                name: 'stacked-teal',
                items: [
                  {
                    label: 'First',
                    value: 'first',
                    checked: true
                  },
                  {
                    label: 'Last',
                    value: 'last'
                  }
                ]
              })
            ]);
          }
        }
      })
    ]);
  }
};
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
              m('p.text-3.margin-bottom-large', 'Text 3 (13px). Secondary text (i.e the footer). Lovingly made in Brooklyn, NY USA.')
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
              m('p.text-2.text--white.inline.bg-grid-darksmall', 'Text White')
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
              m('a[href=#].text-2.text--white.inline.bg-grid-dark.margin-bottom-small', 'Link White')
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
              m('a[href=#].text-2.is-disabled.text--white.inline.bg-grid-dark.margin-bottom-small', 'Link White')
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.styleguide.ui.tooltips = {};

Q.components.guide.styleguide.ui.tooltips.container = {
  view: function(ctrl) {
    return m('section#guide--style-text', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Tooltips'
      }),
      m.component(Q.components.shared.block.ui.container, {
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
      m.component(Q.components.shared.block.ui.container, {
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
      m.component(Q.components.shared.block.ui.container, {
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
      m.component(Q.components.shared.block.ui.container, {
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
};;;Q.code={"buttons":{"language":"html","template":"--BUTTONS--\n\n<span class=\"hljs-comment\">&lt;!-- Button Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-[color]\"</span>&gt;</span>Color<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Core Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray\"</span>&gt;</span>Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-teal\"</span>&gt;</span>Teal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-white\"</span>&gt;</span>White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-red\"</span>&gt;</span>Red<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Other Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-purple\"</span>&gt;</span>Purple<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-black\"</span>&gt;</span>Black<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-transparent\"</span>&gt;</span>Transparent<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-yellow\"</span>&gt;</span>Yellow<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-purple\"</span>&gt;</span>Purple<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Brand Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-twitter\"</span>&gt;</span>Twitter<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-facebook\"</span>&gt;</span>Facebook<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-tumblr\"</span>&gt;</span>Tumblr<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-paypal\"</span>&gt;</span>Paypal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-roku\"</span>&gt;</span>Roku<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Button Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn--[size]\"</span>&gt;</span>Size Modifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--small\"</span>&gt;</span>Small<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--medium\"</span>&gt;</span>Medium<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--large\"</span>&gt;</span>Large<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--fill\"</span>&gt;</span>Large<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Typography --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray\"</span>&gt;</span>Helvetica<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--brandon\"</span>&gt;</span>Brandon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-[name]-[color] icon--[position]\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--left\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--center\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--right\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--left icon--right\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Processing States --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray is-processing\"</span>&gt;</span>Button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Dropdown Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-[color]\"</span>&gt;</span>Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-gray\"</span>&gt;</span>Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-teal\"</span>&gt;</span>Teal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-white\"</span>&gt;</span>White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Button Groups --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-group\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-selected btn-white small-thirds\"</span>&gt;</span>Button 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-white small-thirds\"</span>&gt;</span>Button 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-white small-thirds\"</span>&gt;</span>Button 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>"},"checkbox":{"language":"html","template":"--CHECKBOXES--\n\n<span class=\"hljs-comment\">&lt;!-- Standard (Ruby Helper) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_small</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_medium</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_large</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Alt (Ruby Helper) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_alt_small</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_alt</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>"},"colors-brand":{"language":"html","template":"--BRAND COLORS--\n\n<span class=\"hljs-comment\">&lt;!-- SASS Variables --&gt;</span>\n$vhx-[name]\n\n$vhx-orange\n$vhx-debian\n$vhx-purple\n$vhx-currant\n$vhx-blue\n$vhx-teal\n$vhx-green\n$vhx-yellow"},"colors-core":{"language":"html","template":"--CORE COLORS--\n\n<span class=\"hljs-comment\">&lt;!-- SASS Variables --&gt;</span>\n$[name]-[modifier]\n\n<span class=\"hljs-comment\">&lt;!-- Black and White --&gt;</span>\n$white\n$white-transparent\n$black\n$black-transparent\n\n<span class=\"hljs-comment\">&lt;!-- Grays (light to dark) --&gt;</span>\n$gray-1\n$gray-2\n$gray-3\n$gray-4\n$gray-5\n$gray-6\n$gray-7\n$gray-8\n\n<span class=\"hljs-comment\">&lt;!-- Other Colors --&gt;</span>\n$teal-1\n$teal-2\n$teal-3\n$red\n$navy\n$navy-transparent"},"colors-external":{"language":"html","template":"--EXTERNAL BRAND COLORS--\n\n<span class=\"hljs-comment\">&lt;!-- SASS Variables --&gt;</span>\n$[brand]-[color]\n\n$facebook-blue\n$twitter-blue\n$tumblr-blue\n$paypal-blue\n$roku-purple"},"colors-tools":{"language":"html","template":"--TOOLS--\n\n<span class=\"hljs-comment\">&lt;!-- Ruby Methods--&gt;</span>\ndarken_text?(hex) ? '#000' : '#fff'\n\n<span class=\"hljs-comment\">&lt;!-- Decimal between 0 and 1 (dark to light) --&gt;</span>\ndarken_color(hex_color, .5)\nlighten_color(hex_color, .5)\n\n<span class=\"hljs-comment\">&lt;!-- SASS Methods--&gt;</span>\n\ndarken($teal-2, 10%)\nlighten($teal-2, 10%)\ntransparentize($teal-2, .5)"},"display":{"language":"html","template":"--LAYOUT--\n\n<span class=\"hljs-comment\">&lt;!-- Display --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span>Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline\"</span>&gt;</span>Inline Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Inline List (floated w/ margins) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline-list\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Inline List (inline block w/o margins) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline-list inline\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>"},"grid":{"language":"html","template":"--GRID--\n\n<span class=\"hljs-comment\">&lt;!-- Basic Setup (16 columns)--&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>5<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>6<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>7<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>9<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>10<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>11<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>12<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>13<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>14<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>15<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>16<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Responsive --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-6 large-4\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-6 large-4\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-4 large-4\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column show-for-large-up large-4\"</span>&gt;</span>4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Offsets --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-centered small-12\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-6\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-6\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-4\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-offset-4 medium-8\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-4\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Hide and Show --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 show-for-small-only\"</span>&gt;</span>shows for small only<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column medium-16 show-for-medium-only\"</span>&gt;</span>shows for medium only<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column large-16 show-for-large-only\"</span>&gt;</span>shows for large only<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column hide-for-small-only medium-4\"</span>&gt;</span>shows for medium up<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-4\"</span>&gt;</span>shows for all<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-8 large-4\"</span>&gt;</span>shows for all<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column large-4 show-for-large-up\"</span>&gt;</span>shows for large up<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>"},"spacing-positions":{"language":"html","template":"--POSITION--\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-[position]-[size]\"</span>&gt;</span>Large Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-large\"</span>&gt;</span>All sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-vert-large\"</span>&gt;</span>Vert. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-horz-large\"</span>&gt;</span>Horz. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-top-large\"</span>&gt;</span>Top side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-bottom-large\"</span>&gt;</span>Horz. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-left-large\"</span>&gt;</span>Left side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-right-large\"</span>&gt;</span>Right side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-large\"</span>&gt;</span>All sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-vert-large\"</span>&gt;</span>Vert. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-horz-large\"</span>&gt;</span>Horz. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-top-large\"</span>&gt;</span>Top side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-bottom-large\"</span>&gt;</span>Bottom side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-left-large\"</span>&gt;</span>Left side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-right-large\"</span>&gt;</span>Right side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>"},"spacing-sizes":{"language":"html","template":"--SIZING--\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-[size]\"</span>&gt;</span>Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-[size]\"</span>&gt;</span>Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-xsmall\"</span>&gt;</span>XSmall Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-small\"</span>&gt;</span>Small Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-medium\"</span>&gt;</span>Medium Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-large\"</span>&gt;</span>Large Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-xlarge\"</span>&gt;</span>XLarge Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-xxlarge\"</span>&gt;</span>XXLarge Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-xsmall\"</span>&gt;</span>xsmall Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-small\"</span>&gt;</span>Small Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-medium\"</span>&gt;</span>Medium Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-large\"</span>&gt;</span>Large Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-xlarge\"</span>&gt;</span>XLarge Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-xxlarge\"</span>&gt;</span>XXLarge Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>"},"icon-names":{"language":"html","template":"--ICONS NAMES--\n\n<span class=\"hljs-comment\">&lt;!-- Icon Names --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-[name]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-teal-download\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-teal-upload\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-amex\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>"},"icon-styles":{"language":"html","template":"--ICONS STYLES--\n\n<span class=\"hljs-comment\">&lt;!-- Icon Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-[name] icon--[size]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span> <span class=\"hljs-comment\">&lt;!-- default is size small --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--xxsmall\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--xsmall\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--xlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--xxlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Icon Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-[name]-[color]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span> <span class=\"hljs-comment\">&lt;!-- default is multi-colored --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity-teal\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity-navy\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity-gray\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity-white\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Button Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-[name]-[color] icon--[position]\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--left\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--center\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--right\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--left\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-chevron-right-navy icon--right\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Text Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-[size] icon-[name]-[color] icon--[position] icon--[size]\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-3 icon--left icon--xxsmall icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-3 icon--left icon--xsmall icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 icon--left icon--small icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 icon--left icon--medium icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1 icon--left icon--large icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1 icon--left icon--xlarge icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- icon right must be wrapped in a block element --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-3 icon--right icon--xsmall icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 icon--right icon--small icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 icon--right icon--medium icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1 icon--right icon--large icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1 icon--right icon--xlarge icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Header Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-[size] icon-[name]-[color] icon--[position] icon--[size]\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5 icon--left icon-product icon--xsmall\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-4 icon--left icon-product icon--small\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 icon--left icon-product icon--medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-2 icon--left icon-product icon--large\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-1 icon--left icon-product icon--xlarge\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- icon right must be wrapped in a block element --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5 icon--right icon--xsmall icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-4 icon--right icon--small icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 icon--right icon--medium icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-2 icon--right icon--large icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-1 icon--right icon--xlarge icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Circle Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-[name]-[color] icon--[size]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--xxsmall\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--xsmall\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--xlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--xxlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Dot Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon--[size]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon--small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon--medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon--large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot-[color]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--teal\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--gray\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--navy\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--yellow\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>"},"loaders":{"language":"html","template":"--LOADERS--\n\n<span class=\"hljs-comment\">&lt;!-- Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-teal\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-white\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate loader--small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate loader--medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate loader--large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate loader--xlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>"},"radio":{"language":"html","template":"--RADIO--\n\n<span class=\"hljs-comment\">&lt;!-- Horizontal Layout (Ruby Helper) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">radio_gray</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">radio_teal</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Stacked Layout (Ruby Helper) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">radio_gray_stacked</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">radio_teal_stacked</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>"},"text":{"language":"html","template":"--TEXT--\n\n<span class=\"hljs-comment\">&lt;!-- Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-[size]\"</span>&gt;</span>Text Size<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1\"</span>&gt;</span>Text 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2\"</span>&gt;</span>Text 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-3\"</span>&gt;</span>Text 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-[size] text--[color]\"</span>&gt;</span>Text Color Modifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--gray\"</span>&gt;</span>Text Gray (default)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--gray-light\"</span>&gt;</span>Text Light Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--navy\"</span>&gt;</span>Text Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--teal\"</span>&gt;</span>Text Teal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--yellow\"</span>&gt;</span>Text Yellow<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--red\"</span>&gt;</span>Text Red<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--green\"</span>&gt;</span>Text Green<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Text White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Styles (for any color) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-[size] text--[style]\"</span>&gt;</span>Text Style Modifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--italic\"</span>&gt;</span>Text Italic<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--bold\"</span>&gt;</span>Text Bold<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--transparent\"</span>&gt;</span>Text Transparent<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n\n--LINKS--\n\n<span class=\"hljs-comment\">&lt;!-- Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 block\"</span>&gt;</span>Link Default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--gray\"</span>&gt;</span>Link Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--gray-light\"</span>&gt;</span>Link Light Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--navy\"</span>&gt;</span>Link Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Link White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Disabled --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled \"</span>&gt;</span>Link Default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--gray\"</span>&gt;</span>Link Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--gray-light\"</span>&gt;</span>Link Light Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--navy\"</span>&gt;</span>Link Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--white\"</span>&gt;</span>Link White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>"},"tooltips":{"language":"html","template":"--TOOLTIPS--\n\n<span class=\"hljs-comment\">&lt;!-- Standard Tooltip --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--top-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a standard tooltip. Here is some information.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Fixed Tooltip --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--fixed arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a fixed tooltip. Here is some information.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--small arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a small tooltip.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--medium arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a medium tooltip.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--large arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a large tooltip.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--xlarge arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is an xlarge tooltip.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--fill arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a tooltip that fills its container.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Arrow Positions --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow top left.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--top-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow top center.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--top-right\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow top right.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--right-top\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow right top.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--right-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow right center.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--right-bottom\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow right bottom.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--left-top\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow left top.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--left-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow left center.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--left-bottom\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow left bottom.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--bottom-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow bottom left.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--bottom-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow bottom center.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--bottom-right\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow bottom right.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"}};'use strict';

_.max = function (array) {
  return Math.max.apply(Math, array);
};'use strict';

Q.layouts.standard.controller = function (opts) {
  var self = this;

  self.init = function () {
    if (m.route.param('style')) {}
    // Q.models.getStyleDoc(m.route.param('style'));

    // if (m.route.param('js')) {
    //   Q.models.getScriptDoc(m.route.param('js'));
    // }
    // $(window).on('resize', function() {
    //   $('.row.fill-width').each(function() {
    //     var arr = [],
    //         bars = $(this).find('.code-bar, .guide-bar');
    //
    //     bars.height('');
    //     $(this).children('.small-8').each(function() {
    //       arr.push($(this).height());
    //     });
    //
    //     bars.height(_.max(arr));
    //   });
    // });
    //
    // $(window).trigger('resize');
  };

  if (opts.init) {
    self.init();
  }
};'use strict';

Q.layouts.standard.state = {};'use strict';

Q.layouts.standard.ui.container = {
  controller: function controller() {
    return new Q.layouts.standard.controller({
      init: true
    });
  },
  view: function view() {
    return m('div.fill-width.margin-reset', [Q.components.route[m.route.param('type')].ui[m.route.param('guide')].items.map(function (item) {
      return m('div.row', [m('div.column.small-8.padding-reset', [m('section.guide-bar', [m.component(item.guide)])]), m('div.column.small-8.padding-reset', [m('section.code-bar', [m('pre.padding-medium', [m('code.hljs.' + item.code.language, m.trust(item.code.template))])])])]);
    })]);
  }
};'use strict';

Q.components.shared.block.ui.container = {
  view: function view(ctrl, opts) {
    return m('div.margin-vert-large', [m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', opts.title), opts.description ? m('div.text-contain.text-2', [m('p', opts.description)]) : '', opts.component ? m.component(opts.component) : '']);
  }
};'use strict';

Q.components.shared.intro.ui.container = {
  view: function view(ctrl, opts) {
    return m('header', [opts.title ? m('h3.head-3.head--navy.text--bold', opts.title) : '', opts.intro ? m('div.margin-vert-large', [m('.margin-bottom-medium.text-2', m.trust(opts.intro))]) : '']);
  }
};Q.components.route.styleguide.ui.buttons = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.buttons.container),
    code: Q.code.buttons
  }]
};Q.components.route.styleguide.ui.elements = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.checkbox.container),
    code: Q.code.checkbox
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.radio.container),
    code: Q.code.radio
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.loaders.container),
    code: Q.code.loaders
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.tooltips.container),
    code: Q.code.tooltips
  }]
};Q.components.route.styleguide.ui.utilities = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.display.container),
    code: Q.code.display
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.grid.container),
    code: Q.code.grid
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.spacing_sizes.container),
    code: Q.code['spacing-sizes']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.spacing_positions.container),
    code: Q.code['spacing-positions']
  }]
};Q.components.route.styleguide.ui.icons = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.icons_names.container),
    code: Q.code['icon-names']
  }]
};Q.components.route.styleguide.ui.colors = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.colors_core.container),
    code: Q.code['colors-core']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_brand.container),
    code: Q.code['colors-brand']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_external.container),
    code: Q.code['colors-external']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_tools.container),
    code: Q.code['colors-tools']
  }]
};Q.components.route.styleguide.ui.tables = {
  items: []
};Q.components.route.styleguide.ui.typography = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.text.container),
    code: Q.code.text
  }]
};Q.components.route.js.ui.mithril = {
  items: []
};'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('quartz'), '/', {
  '/:type/:guide': Q.layouts.standard.ui.container
});