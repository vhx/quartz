'use strict';

window.Q = {
  components: {
    route: {
      styleguide: { ui: {} },
      js: { ui: {} }
    },
    shared: {
      intro: { ui: {} },
      block: { ui: {} },
      options: { ui: {} }
    },
    guide: {
      styleguide: {
        ui: {}
      },
      js: {
        ui: {}
      }
    }
  },
  layouts: {
    standard: {
      ui: {}
    }
  }
};;Q.components.guide.styleguide.ui.avatars = {};

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
};Q.components.guide.styleguide.ui.borders = {};

Q.components.guide.styleguide.ui.borders.container = {
  view: function(ctrl) {
    return m('section#guide--style-borders', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Borders'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Positions w/ Default Color',
        component: {
          view: function() {
            return m('div', [
              m('span.square.square--medium.border.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Border All')
                )
              ),
              m('span.square.square--medium.border-vert.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Border Vert.')
                )
              ),
              m('span.square.square--medium.border-horz.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Border Horz.')
                )
              ),
              m('span.square.square--medium.border-top.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Top')
                )
              ),
              m('span.square.square--medium.border-bottom.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Bottom')
                )
              ),
              m('span.square.square--medium.border-left.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Left')
                )
              ),
              m('span.square.square--medium.border-right.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Right')
                )
              ),
              m('span.inline.border-center.text-gray.text--small.padding-large',
                m('strong.bg-white.padding-medium', 'Center')
              )
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Colors',
        component: {
          view: function() {
            return m('div', [
              m('span.square.square--medium.border.border--gray.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Default Gray')
                )
              ),
              m('span.square.square--medium.border.border--gray-light.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Light Gray')
                )
              ),
              m('span.square.square--medium.border.border--navy.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Navy')
                )
              ),
              m('span.inline.bg-grid-dark.padding-small.margin-right-medium.margin-bottom-medium',
                m('span.square.square--medium.border.border--white',
                  m('span.square-tag.text-gray.text--small',
                    m('strong', 'White')
                  )
                )
              ),
              m('span.inline.bg-grid-dark.padding-small.margin-right-medium.margin-bottom-medium',
                m('span.square.square--medium.border.border--white-transparent',
                  m('span.square-tag.text-gray.text--small',
                    m('strong', 'White 50%')
                  )
                )
              )
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Other Modifiers',
        component: {
          view: function() {
            return m('div', [
              m('span.square.square--medium.border.border--thick.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Thick')
                )
              ),
              m('span.square.square--medium.border.border--radius.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Radius')
                )
              )
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.styleguide.ui.buttons = {};

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
              m('button.btn-gray.margin-right-small.margin-bottom-small', 'Gray'),
              m('button.btn-teal.margin-right-small.margin-bottom-small', 'Teal'),
              m('button.btn-white.margin-right-small.margin-bottom-small', 'White'),
              m('button.btn-red.margin-right-small.margin-bottom-small', 'Red')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Other Colors',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-purple.margin-right-small.margin-bottom-small', 'Purple'),
              m('button.btn-green.margin-right-small.margin-bottom-small', 'Green'),
              m('button.btn-slate.margin-right-small.margin-bottom-small', 'Slate'),
              m('button.btn-black.margin-right-small.margin-bottom-small', 'Black'),
              m('button.btn-yellow.margin-right-small.margin-bottom-small', 'Yellow'),
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
              m('button.btn-twitter.margin-right-small.margin-bottom-small', 'Twitter'),
              m('button.btn-facebook.margin-right-small.margin-bottom-small', 'Facebook'),
              m('button.btn-tumblr.margin-right-small.margin-bottom-small', 'Tumblr'),
              m('button.btn-paypal.margin-right-small.margin-bottom-small', 'Paypal'),
              m('button.btn-roku.margin-right-small.margin-bottom-small', 'Roku')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.btn--small.block.margin-bottom-small', 'Small'),
              m('button.btn-gray.btn--medium.block.margin-bottom-small', 'Medium'),
              m('button.btn-gray.btn--large.block.margin-bottom-small', 'Large'),
              m('button.btn-gray.btn--half.margin-bottom-small', 'Half'),
              m('button.btn-gray.btn--fill.margin-bottom-small', 'Fill')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Typography',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.margin-right-small.margin-bottom-small', 'Helvetica'),
              m('button.btn-gray.btn--brandon.margin-right-small.margin-bottom-small', 'Brandon'),
              m('button.btn-teal.margin-right-small.margin-bottom-small', 'Helvetica'),
              m('button.btn-teal.btn--brandon.margin-right-small.margin-bottom-small', 'Brandon')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Processing State',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-gray.is-processing.margin-right-small.margin-bottom-small', 'Button'),
              m('button.btn-teal.is-processing.margin-right-small.margin-bottom-small', 'Button'),
              m('button.btn-white.is-processing.margin-right-small.margin-bottom-small', 'Button'),
              m('button.btn-red.is-processing.margin-right-small.margin-bottom-small', 'Button')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Dropdowns',
        component: {
          view: function() {
            return m('div', [
              m('button.btn-dropdown-gray.margin-right-small.margin-bottom-small', 'Dropdown'),
              m('button.btn-dropdown-teal.margin-right-small.margin-bottom-small', 'Dropdown'),
              m('button.btn-dropdown-white.margin-right-small.margin-bottom-small', 'Dropdown'),
              m('select.btn-dropdown-white.margin-bottom-small', {
              }, [
                m('option', {
                  value: '',
                  disabled: true,
                  selected: true
                }, 'Choose subtitle language'),
                m('option', {
                  value: 'ru'
                }, 'Russian'),
                m('option', {
                  value: 'en'
                }, 'English'),
                m('option', {
                  value: 'CN'
                }, 'Chinese')
              ])
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
              ]),
              m('h3.text-4.margin-bottom-small', 'Button Group Alignment'),
              m('div.btn-group.btn-group--left.margin-bottom-medium', [
                m('button.btn-gray.small-4.is-selected', 'Tab'),
                m('button.btn-gray.small-4', 'Tab'),
                m('button.btn-gray.small-4', 'Tab')
              ]),
              m('div.btn-group.btn-group--center.margin-bottom-medium', [
                m('button.btn-gray.small-4.is-selected', 'Tab'),
                m('button.btn-gray.small-4', 'Tab'),
                m('button.btn-gray.small-4', 'Tab')
              ]),
              m('div.btn-group.btn-group--right.margin-bottom-medium', [
                m('button.btn-gray.small-4.is-selected', 'Tab'),
                m('button.btn-gray.small-4', 'Tab'),
                m('button.btn-gray.small-4', 'Tab')
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
              m('button.btn-gray.icon-product-navy.icon--left.margin-right-small.margin-bottom-small', 'Icon Left'),
              m('button.btn-gray.icon-product-navy.icon--right.margin-right-small.margin-bottom-small', 'Icon Center'),
              m('button.btn-gray.icon-product-navy.icon--left.margin-right-small.margin-bottom-small', [
                m('.icon-chevron-down-navy.icon-xxsmall.icon--right', 'Icon Both')
              ])
            ]);
          }
        }
      }),
    ]);
  }
};
Q.components.guide.styleguide.ui.charts = {};

Q.components.guide.styleguide.ui.charts.container = {
  view: function(ctrl) {
    return m('section#guide--style-charts', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Charts'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Bars',
        component: {
          view: function() {
            return m('div', [
              m('.bar', [
                m('.bar-percent', {
                  style: 'width: 35%'
                })
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
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'small',
                name: 'small-standard',
                checked: true
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'medium',
                checked: true,
                name: 'medium-standard'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'large',
                checked: true,
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
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'small',
                type: 'toggle',
                checked: true,
                name: 'small-toggle'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                size: 'medium',
                type: 'toggle',
                checked: true,
                name: 'medium-toggle'
              })
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.styleguide.ui.colors_core = {};
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
      { name: 'navy-transparent', css: '.bg-grid-light' },
      { name: 'vimeo-blue' },
      { name: 'foam' },
      { name: 'pistachio' },
      { name: 'rum-swizzle' },
      { name: 'sunset-orange' },
      { name: 'pale-pink' },
      { name: 'astro-granite' },
      { name: 'regent-gray' },
      { name: 'southerly-sky' },
      { name: 'porcelain' },
      { name: 'plaster' },
      { name: 'paste' },
      { name: 'white' },
      { name: 'vimeo-blue-darkened'},
      { name: 'pistachio-darkened' },
      { name: 'sunset-orange-darkened' }
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
      { name: 'roku-purple' },
      { name: 'vimeo-blue'}
    ];
  },
  view: function(ctrl, data) {
    return m('.margin-vert-large', [
      data.name ?
        m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', data.name) : '',
      data.description ?
        m('div.text-contain.text-2', [
          m('p', 'When you need a lighter or darker version of a brand color (say for a new button) use the SASS darken, lighten, and transparentize methods (shown to the right).')
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
        title: 'External Brand Colors',
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
};
Q.components.guide.styleguide.ui.display = {};

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
              m('span.radius.margin-vert-medium.padding-medium.block.bg-gray-2.text-gray.text--small', 'Rounded corners (3px radius)'),
              m('span.shadow--gray.margin-vert-medium.padding-medium.block.bg-gray-2.text-gray.text--small', 'Box shadow'),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Alignment',
        component: {
          view: function() {
            return m('.row.text-left', [
              m('div.text-left', [
                m('div.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block Left'),
              ]),
              m('div.text-center', [
                m('div.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block Center'),
              ]),
              m('div.text-right', [
                m('div.margin-vert-medium.padding-medium.inline.bg-gray-2.text-gray.text--small', 'Inline Block Right'),
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Arrows',
        component: {
          view: function() {
            return m('div', [
              m('p.margin-bottom-small', 'Colors can be set via the background class, which includes:'),
              m('p.margin-bottom-medium', m.trust(
              '<code class="block text--yellow">bg-navy</code>' +
              '<code class="block text--yellow">bg-white</code>' +
              '<code class="block text--yellow">bg-gray-1</code>' +
              '<code class="block text--yellow">bg-gray-2</code>' +
              '<code class="block text--yellow">bg-red</code>' +
              '<code class="block text--yellow">bg-teal-1</code>',
              '<code class="block text--yellow">bg-teal-2</code>')),
              m('div.row', [
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-top-left.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Top left')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-top-middle.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Top middle')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-top-right.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Top right')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-right-top.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Right top')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-right-middle.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Right middle')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-right-bottom.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Right bottom')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-bottom-left.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Bottom left')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-bottom-middle.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Bottom middle')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-bottom-right.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Bottom right')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-left-top.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Left top')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-left-middle.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Left middle')
                ]),
                m('div.col.small-thirds', [
                  m('div.margin-small.arrow.arrow-left-bottom.text-center.padding-medium.block.bg-gray-2.text-gray.text--small', 'Left bottom')
                ])
              ])
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
              ]),
              m('p.margin-bottom-medium.margin-top-large', 'Inline list striped rows.'),
              m('ul.striped', [
                m('li', 'Item'),
                m('li', 'Item'),
                m('li', 'Item'),
              ]),
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
};Q.components.guide.styleguide.ui.dropdowns = {};

Q.components.guide.styleguide.ui.dropdowns.container = {
  view: function(ctrl) {
    return m('section#guide--style-dropdowns', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Dropdowns'
      })
    ]);
  }
};Q.components.guide.styleguide.ui.forms = {};

Q.components.guide.styleguide.ui.forms.container = {
  view: function(ctrl) {
    return m('section#guide--style-forms', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Forms',
        intro: 'Form styling is offered inside of a <code>form</code> with a <code>form</code> class. Additional <code>input</code> styles are displayed below.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Standard',
        component: {
          view: function() {
            return m('form.form.border.radius.padding-medium', [
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'user_name'
                }, 'User name'),
                m('input', {
                  type: 'text',
                  name: 'user_name',
                  placeholder: 'Enter a your user_name'
                })
              ]),
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'secret_key'
                }, 'Secret Key (disabled)'),
                m('input', {
                  type: 'number',
                  name: 'secret_key',
                  disabled: true,
                  placeholder: 'Enter your secret key (disabled)'
                })
              ]),
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'domain_name'
                }, 'Domain Name (error)'),
                m('input.is-error', {
                  type: 'text',
                  name: 'domain_name',
                  placeholder: 'Enter your domain name (error)'
                })
              ]),
              m('fieldset.margin-bottom-medium.inner-button', [
                m('label', {
                  for: 'domain_name'
                }, 'Domain Name (inner button)'),
                m('.inner-button', [
                  m('input', {
                    type: 'text',
                    name: 'domain_name',
                    placeholder: 'Enter your domain name'
                  }),
                  m('button.btn.btn-teal.btn--small', 'Verify Domain')
                ])
              ]),
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'state'
                }, 'State (small input)'),
                m('input.small', {
                  type: 'text',
                  name: 'state',
                  placeholder: 'Enter your domain name (small input)'
                })
              ]),
              m('fieldset.margin-bottom-medium', [
                m('label', {
                  for: 'message'
                }, 'Enter your message'),
                m('textarea', {
                  type: 'message',
                  name: 'message',
                  placeholder: 'Enter a message'
                })
              ]),
              m('.clearfix',
                m('button.btn-teal.right', {
                  type: 'submit'
                }, 'Submit')
              )
            ]);
          }
        }
      }),

    ]);
  }
};
Q.components.guide.styleguide.ui.headers = {};

Q.components.guide.styleguide.ui.headers.container = {
  view: function(ctrl) {
    return m('section#guide--style-header', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Headers'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('h1.head-1.margin-bottom-small', 'Header 1'),
              m('h1.head-2.margin-bottom-small', 'Header 2'),
              m('h1.head-3.margin-bottom-small', 'Header 3'),
              m('h1.head-4.margin-bottom-small', 'Header 4'),
              m('h1.head-5.margin-bottom-small', 'Header 5')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Alternate Gothic (for Numbers)',
        component: {
          view: function() {
            return m('div', [
      m('h1.head-1.head--gothic.margin-bottom-small', 'Header 1'),
      m('h1.head-2.head--gothic.margin-bottom-small', 'Header 2'),
      m('h1.head-3.head--gothic.margin-bottom-small', 'Header 3')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Colors',
        component: {
          view: function() {
            return m('div', [
              m('h1.head-3.head--navy.margin-bottom-small.inline', 'Header Navy'),
              m('span', '(default)'),
              m('h1.head-3.head--gray.margin-bottom-small', 'Header Gray'),
              m('h1.head-3.head--teal.margin-bottom-small', 'Header Teal'),
              m('h1.head-3.head--white.inline.margin-bottom-small.bg-grid-dark', 'Header White')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('a.head-4.margin-bottom-small.inline', { href: "#" }, 'Header Navy'),
              m('span', 'default'),
              m('a.head-4.head--gray.block.margin-bottom-small', { href: "#" }, 'Header Gray'),
              m('a.head-4.head--teal.block.margin-bottom-small', { href: "#" }, 'Header Teal'),
              m('a.head-4.head--white.block.inline.margin-bottom-small.bg-grid-dark', { href: "#" }, 'Header White')
            ]);
          }
        }
      })
    ]);
  }
};
Q.components.guide.styleguide.ui.icons_styles = {};
Q.components.guide.styleguide.ui.icons_names = {};

Q.components.guide.styleguide.ui.icons_styles.container = {
  view: function(ctrl) {
    return m('section#guide--style-icons', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Icons'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('ul.margin-top-large.small-block-grid-6.text-left', [
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'xxsmall'),
                    m('i.icon.icon--xxsmall.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'xsmall'),
                    m('i.icon.icon--xsmall.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'small'),
                    m('i.icon.icon--small.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'medium'),
                    m('i.icon.icon--medium.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'large'),
                    m('i.icon.icon--large.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'xlarge'),
                    m('i.icon.icon--xlarge.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'xxlarge'),
                    m('i.icon.icon--xxlarge.icon-add-member')
                  ]
                )
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Colors',
        component: {
          view: function() {
            return m('div', [
              m('ul.margin-top-large.small-block-grid-6.text-left', [
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'multi'),
                    m('i.icon.icon--xlarge.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'teal'),
                    m('i.icon.icon--xlarge.icon-add-member-teal')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'navy'),
                    m('i.icon.icon--xlarge.icon-add-member-navy')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'gray'),
                    m('i.icon.icon--xlarge.icon-add-member-gray')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'white'),
                    m('span.inline.bg-grid-dark',
                      m('i.icon.icon--xlarge.icon-add-member-white')
                    )
                  ]
                )
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Text',
        component: {
          view: function() {
            return m('div', [
              m('ul.no-bullet.text-left.margin-vert-large', [
                m('li.margin-bottom-medium', [
                  m('p.text-3.icon--left.icon--xxsmall.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-3.icon--left.icon--xsmall.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-2.icon--left.icon--small.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-2.icon--left.icon--medium.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-1.icon--left.icon--large.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-1.icon--left.icon--xlarge.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('div', m('p.text-3.icon--right.icon--xxsmall.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-3.icon--right.icon--xsmall.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-2.icon--right.icon--small.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-2.icon--right.icon--medium.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-1.icon--right.icon--large.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-1.icon--right.icon--xlarge.icon-product.margin-bottom-medium', 'Text w/ Icon'))
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Headers',
        component: {
          view: function() {
            return m('div', [
              m('ul.no-bullet.text-left.margin-vert-large', [
                m('li.margin-bottom-medium', [
                  m('h1.head-5.icon--left.icon--xxsmall.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-5.icon--left.icon--xsmall.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-4.icon--left.icon--small.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-3.icon--left.icon--medium.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-2.icon--left.icon--large.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-1.icon--left.icon--xlarge.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('div', m('h1.head-5.icon--right.icon--xxsmall.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-5.icon--right.icon--xsmall.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-4.icon--right.icon--small.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-3.icon--right.icon--medium.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-2.icon--right.icon--large.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-1.icon--right.icon--xlarge.icon-product.margin-bottom-medium', 'Header w/ Icon'))
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Circles',
        component: {
          view: function() {
            return m('div.margin-top-xlarge', [
              m('ul.margin-top-large.no-bullet.text-center.row', [
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'xxsmall'),
                  m('i.icon-circle.icon--xxsmall.icon-upload')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'xsmall'),
                  m('i.icon-circle.icon--xsmall.icon-upload')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'small'),
                  m('i.icon-circle.icon--small.icon-upload')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'medium'),
                  m('i.icon-circle.icon--medium.icon-upload')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'large'),
                  m('i.icon-circle.icon--large.icon-upload')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'xlarge'),
                  m('i.icon-circle.icon--xlarge.icon-upload')
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Dots',
        component: {
          view: function() {
            return m('div.margin-top-xlarge', [

              m('ul.margin-top-large.no-bullet.text-center.row', [
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'small'),
                  m('i.icon-dot.icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'medium'),
                  m('i.icon-dot.icon--medium')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'large'),
                  m('i.icon-dot.icon--large')
                ])
              ]),
              m('ul.margin-top-large.no-bullet.text-center.row', [
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'teal'),
                  m('i.icon-dot.icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'gray'),
                  m('i.icon-dot.icon-dot--gray icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'navy'),
                  m('i.icon-dot.icon-dot--navy icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'yellow'),
                  m('i.icon-dot.icon-dot--yellow icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'green'),
                  m('i.icon-dot.icon-dot--green icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'red'),
                  m('i.icon-dot.icon-dot--red icon--small')
                ])
              ])
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
};

Q.components.guide.styleguide.ui.icons_list = function() { return [{"name":"activity"},{"name":"add-member"},{"name":"alert"},{"name":"android-workmark"},{"name":"align"},{"name":"amex-card"},{"name":"angle-down"},{"name":"android"},{"name":"angle-right"},{"name":"angle-left"},{"name":"apple"},{"name":"angle-up"},{"name":"arrow-left"},{"name":"api"},{"name":"arrow-down"},{"name":"arrow-right"},{"name":"arrow-up"},{"name":"audio"},{"name":"apps"},{"name":"ban"},{"name":"bell"},{"name":"calendar"},{"name":"camera"},{"name":"card"},{"name":"briefcase"},{"name":"caret-down"},{"name":"caret-right"},{"name":"caret-left"},{"name":"check"},{"name":"caret-up"},{"name":"cassette-frown"},{"name":"chevron-down"},{"name":"cassette"},{"name":"chevron-left"},{"name":"chevron-up"},{"name":"chrome"},{"name":"chevron-right"},{"name":"clock"},{"name":"clapboard"},{"name":"cog"},{"name":"code"},{"name":"comment"},{"name":"comments"},{"name":"collection"},{"name":"currency"},{"name":"csv"},{"name":"desktop"},{"name":"diners-card"},{"name":"discover-card"},{"name":"doc"},{"name":"download-alt"},{"name":"edit"},{"name":"download"},{"name":"dropbox"},{"name":"ellipsis-vertical"},{"name":"envelope-sealed"},{"name":"ellipsis"},{"name":"external-link"},{"name":"envelope"},{"name":"eye"},{"name":"facebook"},{"name":"followers"},{"name":"gift"},{"name":"globe"},{"name":"help"},{"name":"hi"},{"name":"grid"},{"name":"home"},{"name":"instagram"},{"name":"invoice"},{"name":"jcb-card"},{"name":"justify"},{"name":"ios"},{"name":"list"},{"name":"key"},{"name":"lock"},{"name":"link"},{"name":"media"},{"name":"marker"},{"name":"member"},{"name":"pic"},{"name":"money-card"},{"name":"mastercard-card"},{"name":"money-circle"},{"name":"play-outline"},{"name":"money"},{"name":"paypal-card"},{"name":"plus"},{"name":"plus-thin"},{"name":"play"},{"name":"popular"},{"name":"printer"},{"name":"power"},{"name":"product"},{"name":"question"},{"name":"referral"},{"name":"random"},{"name":"refresh"},{"name":"reply"},{"name":"revert"},{"name":"roku-wordmark"},{"name":"roku"},{"name":"search"},{"name":"sliders"},{"name":"star-outline"},{"name":"tag"},{"name":"star"},{"name":"tags"},{"name":"todo"},{"name":"transaction"},{"name":"tumblr"},{"name":"tv"},{"name":"trash"},{"name":"tvos"},{"name":"twitter"},{"name":"upload-alt"},{"name":"upload"},{"name":"vhs"},{"name":"upload-alt-blue"},{"name":"vhx"},{"name":"upload-vimeo"},{"name":"vimeovhx-dark"},{"name":"visa-card"},{"name":"vimeovhx-light"},{"name":"window"},{"name":"x"},{"name":"xmas-tree"}]; };Q.components.guide.styleguide.ui.images = {};

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
};Q.components.guide.styleguide.ui.lists = {};

Q.components.guide.styleguide.ui.lists.container = {
  view: function(ctrl) {
    return m('section#guide--style-lists', [
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
              m('.row', [
                m('.column.small-thirds', [
                  m('span.block.loader-slate', {
                    style: { height: '60px' }
                  })
                ]),
                m('.column.small-thirds', [
                  m('span.block.loader-teal', {
                    style: { height: '60px' }
                  })
                ]),
                m('.column.small-thirds.bg-grid-dark', [
                  m('span.block.loader-white', {
                    style: { height: '60px' }
                  })
                ])
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
              m('.row', [
                m('.column.small-4', [
                  m('span.block.loader-slate.loader--small', {
                    style: { height: '100px' }
                  })
                ]),
                m('.column.small-4', [
                  m('span.block.loader-slate.loader--medium', {
                    style: { height: '100px' }
                  })
                ]),
                m('.column.small-4', [
                  m('span.block.loader-slate.loader--large', {
                    style: { height: '100px' }
                  })
                ]),
                m('.column.small-4', [
                  m('span.block.loader-slate.loader--xlarge', {
                    style: { height: '100px' }
                  })
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Cover Types',
        component: {
          view: function() {
            return m('div', [
              m('p.margin-bottom-medium', m.trust('Hide all content when showing the loader by using the <code class="text--yellow">loader--hide</code> class. The container must have a width and height, either explicitly or from having content.')),
              m('div.margin-bottom-large.border.loader--hide.loader-slate.is-processing', {
                style: {
                  width: '150px',
                  height: '150px'
                }
              }),
              m('p.margin-bottom-medium', m.trust('Make content transparent when showing the loader by using the <code class="text--yellow">loader--transparent</code>. Must have a width and height, either explicitly or from having content')),
              m('div.margin-bottom-large.padding-small.border.loader--transparent.loader-slate.is-processing', {
                style: {
                  width: '150px',
                  height: '150px'
                }
              }, [
                m('p', 'All child elements will be transparent when in the container is in a loading state.')
              ]),
              m('p.margin-bottom-medium', m.trust('By default, the loader will be positioned in the center of the container when using cover types. In some cases when you have a large container (that extends beyond the window size), you may want it positioned offset from the top, and can use <code class="text--yellow">loader--offset</code>. This will offset the loader 125px from the top.')),
              m('div.margin-bottom-large.padding-small.border.loader--offset.loader--hide.loader-slate.is-processing', {
                style: {
                  width: '350px',
                  height: '350px'
                }
              })
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
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Buttons',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.radio.ui.container, {
                color: 'teal',
                buttons: true,
                name: 'stacked-button',
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
              })
            ]);
          }
        }
      })
    ]);
  }
};
Q.components.guide.styleguide.ui.tables = {};

Q.components.guide.styleguide.ui.tables.container = {
  view: function(ctrl) {
    return m('section#guide--style-header', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Tables',
        intro: 'Tables cells/column can make use our alignment classes (<code>text-right</code>, <code>text-left</code>, <code>text-center</code>) as well as our grid system column sizing (e.g. <code>small-8</code>, <code>medium-4</code> etc).'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Standard',
        component: {
          view: function() {
            return m('div', [
              m('table.table.table--ticks.margin-bottom-large', [
                m('thead', [
                  m('tr', [
                    m('th.text-right.small-2', 'ID'),
                    m('th.text-left.small-5', 'Email'),
                    m('th.text-right.small-5', 'Net Worth'),
                    m('th.text-left.small-4', 'Species')
                  ])
                ]),
                m('tbody', [
                  m('tr', [
                    m('td.text-right', '324'),
                    m('td', 'human@vhx.tv'),
                    m('td.text-right', '$5.99'),
                    m('td', 'Human')
                  ]),
                  m('tr', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50'),
                    m('td', 'Cat')
                  ]),
                  m('tr', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00'),
                    m('td', 'Dog')
                  ])
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Standard with Clickable Rows',
        component: {
          view: function() {
            return m('div', [
              m('table.table.table--ticks.margin-bottom-large', [
                m('thead', [
                  m('tr', [
                    m('th.text-right.small-2', 'ID'),
                    m('th.text-left.small-5', 'Email'),
                    m('th.text-right.small-5', 'Net Worth'),
                    m('th.text-left.small-4', 'Species')
                  ])
                ]),
                m('tbody', [
                  m('tr.is-clickable', [
                    m('td.text-right', '324'),
                    m('td', 'human@vhx.tv'),
                    m('td.text-right', '$5.99'),
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50'),
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00'),
                    m('td', 'Dog')
                  ])
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Striped',
        component: {
          view: function() {
            return m('div', [
              m('table.table.table--ticks.table--striped.margin-bottom-large', [
                m('thead', [
                  m('tr', [
                    m('th.text-right.small-2', 'ID'),
                    m('th.text-left.small-5', 'Email'),
                    m('th.text-right.small-5', 'Net Worth'),
                    m('th.text-left.small-4', 'Species')
                  ])
                ]),
                m('tbody', [
                  m('tr.is-clickable', [
                    m('td.text-right', '324'),
                    m('td', 'human@vhx.tv'),
                    m('td.text-right', '$5.99'),
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50'),
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00'),
                    m('td', 'Dog')
                  ])
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Striped w/ Brandon Font Headers',
        component: {
          view: function() {
            return m('div', [
              m('table.table.table--ticks.table--striped.margin-bottom-large', [
                m('thead', [
                  m('tr', [
                    m('th.head-5.text-right.small-2', 'ID'),
                    m('th.head-5.text-left.small-5', 'Email'),
                    m('th.head-5.text-right.small-5', 'Net Worth'),
                    m('th.head-5.text-left.small-4', 'Species')
                  ])
                ]),
                m('tbody', [
                  m('tr.is-clickable', [
                    m('td.text-right', '324'),
                    m('td', 'human@vhx.tv'),
                    m('td.text-right', '$5.99'),
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50'),
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00'),
                    m('td', 'Dog')
                  ])
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Block',
        description: 'Tables cells/column can make use of our alignment classes (<code>text-right</code>, <code>text-left</code>, <code>text-center</code>) as well as our grid system column sizing (e.g. <code>small-8</code>, <code>medium-4</code> etc).',
        component: {
          view: function() {
            return m('div', [
              m('table.table.table--ticks.table--striped.table--block.margin-bottom-large', [
                m('thead', [
                  m('tr', [
                    m('th.text-right.small-2', 'ID'),
                    m('th.text-left.small-5', 'Email'),
                    m('th.text-right.small-5', 'Net Worth'),
                    m('th.text-left.small-4', 'Species')
                  ])
                ]),
                m('tbody', [
                  m('tr.is-clickable', [
                    m('td.text-right', '324'),
                    m('td', 'human@vhx.tv'),
                    m('td.text-right', '$5.99'),
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50'),
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00'),
                    m('td', 'Dog')
                  ])
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Table w/ Row Heads',
        component: {
          view: function() {
            return m('div', [
              m('table.table.table--ticks.table--striped.margin-bottom-large', [
                m('thead', [
                  m('tr', [
                    m('th.text-right.small-2', 'ID'),
                    m('th.text-left.small-5', 'Email'),
                    m('th.text-right.small-5', 'Net Worth'),
                    m('th.text-left.small-4', 'Species')
                  ])
                ]),
                m('tbody', [
                  m('tr.table-row-head', [
                    m('td', {
                      colspan: 4
                    }, m.trust('Date <span class="table-row-arrow"></span>'))
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '324'),
                    m('td', 'human@vhx.tv'),
                    m('td.text-right', '$5.99'),
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50'),
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00'),
                    m('td', 'Dog')
                  ])
                ])
              ])
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
              m('a[href=#].text-2.block.margin-bottom-small', 'Link Regent Gray (default)'),
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
              m('a[href=#].text-2.is-disabled.block.margin-bottom-small', 'Link Regent Gray (default)'),
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
Q.components.guide.styleguide.ui.tooltips = {};

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
};Q.components.guide.js.ui.mithril_intro = {};
Q.components.guide.js.ui.mithril_intro.container = {
  view: function(ctrl) {
    return m('section#guide--style-header', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Mithril',
        intro: '<p class="margin-bottom-medium text-2">Mithril is our frontend framework of choice. It is a tiny framework (only 7kb gzipped) with no dependencies, has a small focused API, and virtual DOM diffing (like React). It was created by <a href="https://github.com/lhorie">Leo Horie</a>. For more info see <a href="http://mithril.js.org">http://mithril.js.org</a>.</p>' +
               '<p class="margin-bottom-medium text-2">Mithril is designed so you can use as little or as much of the framework as you need. It allows a lot of flexiblity in how you organize your application. In this light, we\'ve established some conventions for how to setup Mithril projects. Read below for details.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_folders = {};
Q.components.guide.js.ui.mithril_folders.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '1. Folder Structure',
        description: '<p class="margin-bottom-medium text-2">In order to organize our Mithril application files in a consistent manner, setup your application directory as shown. Substitute with the unique components in your application. Arbitrary components (<code class="text--yellow">sidebar</code> and <code class="text--yellow">table</code>) and layouts (<code class="text--yellow">index</code> and <code class="text--yellow">edit</code>) are shown as examples.</p>' +
                     '<p class="margin-bottom-medium text-2">Be sure to make the files <code class="text--yellow">ui</code>, <code class="text--yellow">state</code>, <code class="text--yellow">controller</code>, and <code class="text--yellow">constants</code> for each component/layout. See the next sections for definitions of what each of the parts of a component are.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_order = {};
Q.components.guide.js.ui.mithril_order.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '2. File Order',
        description: '<p class="margin-bottom-medium text-2">When setting up your application manifest, be sure to include your app scripts in the order shown to ensure proper initialization.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_scope = {};
Q.components.guide.js.ui.mithril_scope.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '3. Namespace ( <code class="text--yellow">scope.js</code> )',
        description: '<p class="margin-bottom-medium text-2">To both avoid polluting the global namespace and for providing an organized way to keep our Mithril code in one place we use the <code class="text--yellow">vhxm</code> namespace. All components, layouts, and models live within the <code class="text--yellow">vhxm</code> object.</p>' +
                     '<p class="margin-bottom-medium text-2">The <code class="text--yellow">vhxm</code> object should be setup in a <code class="text--yellow">scope.js</code> file. Here you establish a broad overview/map by defining the high-level components of your application.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_layouts = {};
Q.components.guide.js.ui.mithril_layouts.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '4. Layouts',
        description: '<p class="margin-bottom-medium text-2">Layouts are just Mithril Components that we use as our top level components, initiated in our routes and that contain all other components.</p>' +
                     '<p class="margin-bottom-medium text-2">They aren\'t any different than other components in their structure, but we name and put them under the layouts object for organizational purposes.</p>' +
                     '<p class="margin-bottom-medium text-2">In Mithril, a component is an object that has at the very least a view method that returns a Mithril Virtual DOM tree (via <code class="text--yellow">m()</code>). Components are the building blocks of a Mithril application. You can include sub components in a component by using Mithril\'s <code class="text--yellow">m.component()</code> method.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_components = {};
Q.components.guide.js.ui.mithril_components.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '5. Components',
        description: '<p class="margin-bottom-medium text-2">We divide up each of a component\'s parts into different files to keep our files as lean as possible. These parts are:</p>',
        component: {
          view: function() {
            return m('ul', [
              m('li.margin-bottom-medium', [
                m('h4.text--navy', 'state'),
                m('code.text--italic.margin-bottom-small', 'component_name.state.js'),
                m('p', m.trust('An object of Mithril reactive properties (<code class="text--yellow">m.prop()</code>) for keeping track of a components UI State.'))
              ]),
              m('li.margin-bottom-medium', [
                m('h4.text--navy', 'constants'),
                m('code.text--italic.margin-bottom-small', 'component_name.constants.js'),
                m('p', m.trust('An object of static strings, arrays, or objects for static content (such has copy).'))
              ]),
              m('li.margin-bottom-medium', [
                m('h4.text--navy', 'controller'),
                m('code.text--italic.margin-bottom-small', 'component_name.controller.js'),
                m('p', m.trust('A component can also have an optional controller function. This function is run once when a component is rendered. It can be used to provide helper methods, event handler methods, and model calls for the component.'))
              ]),
              m('li.margin-bottom-medium', [
                m('h4.text--navy', 'ui'),
                m('code.text--italic.margin-bottom-small', 'component_name.ui.js'),
                m('p', m.trust('The view layer of the component, found in a component\'s view method. It must return either a virtual DOM element (<code class="text--yellow">m()</code>) or another component (<code class="text--yellow">m.component()</code>).'))
              ])
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_models = {};
Q.components.guide.js.ui.mithril_models.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-models', [
      m.component(Q.components.shared.block.ui.container, {
        title: '6. Models',
        description: '<p class="margin-bottom-medium text-2">Our models are our source of truth. It is the canonical data we get from the backend (typically our Public or Internal API). Our models contain both our data objects as well as methods that can be called from our controllers for listing, retrieving, updating, creating, or deleting data.</p>' +
                     '<p class="margin-bottom-medium text-2">We utilize Mithril\'s <code class="text--yellow">m.prop()</code> method to create all our model properties. This method creates a reactive getter/setter property. We set a property by calling the method and passing a value. We get a property\'s value by calling its method without a value (see example to the right).</p>' +
                     '<p class="margin-bottom-medium text-2">To setup our models we put everything under our <code class="text--yellow">vhxm.models</code> namespace. We define our model so it correlates with our data model, ensuring we also have methods for working with our model objects. See below for making api/ajax requests.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_requests = {};
Q.components.guide.js.ui.mithril_requests.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-requests', [
      m.component(Q.components.shared.block.ui.container, {
        title: '7. Requests',
        description: '<p class="margin-bottom-medium text-2">To integrate your models with a backend endpoint, you can use Mithril\'s <code class="text--yellow">request</code> method. Any headers that need to be set (e.g. for authorization, content type, etc) can be done by using the request\'s <code class="text--yellow">config</code> property as shown to the right.</p>' +
                     '<p class="margin-bottom-medium text-2">We handle the response using Mithril\'s chained <code class="text--yellow">then</code> method, which has two callbacks. The first is a function for a successful response, and the second is for an error.</p>' +
                     '<p class="margin-bottom-medium text-2">Upon receiving the response, we iterate over each property ensuring each model property is reactive using a helper method (<code class="text--yellow">)vhxm.models.populate</code>.</p>' +
                     '<p class="margin-bottom-medium text-2">For convenience, when working with the VHX Public API, you can use our <code class="text--yellow">VHX.Request</code> class for making API calls.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_api = {};
Q.components.guide.js.ui.mithril_api.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-requests', [
      m.component(Q.components.shared.block.ui.container, {
        title: '8. Api Integration',
        description: '<p class="margin-bottom-medium text-2">For convenience, when working with the VHX Public API, you can also use our <code class="text--yellow">VHX.Request</code> class for making API calls. This class was built using Mithril\'s built-in methods listed above. Authorization, error handling, populating the model, and caching are all handled for you automatically.</p>'
      })
    ]);
  }
};Q.components.guide.js.ui.autosuggest = {};
Q.components.guide.js.ui.autosuggest.container = {
  view: function(ctrl) {
    return m('section#guide--component-autosuggest', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Auto-suggest',
        intro: ''
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.autosuggest.ui.container, {
                data: m.prop(['This', 'That', 'Those', 'Some', 'More', 'Left', 'Right']),
                focusonready: false,
                reset: m.prop(false),
                onselect: function(selected) {},
                name: 'auto_suggest',
                placeholder: 'Enter name'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', type: 'string', required: true, description: m.trust('A unique key used as the name of the input field') },
          { name: 'data', type: 'm.prop', required: true, description: m.trust('A mithril prop (<span class="text--navy text--bold text-4">m.prop()</span>) containing an array of autosuggest items (words, phrases, etc).') },
          { name: 'focusonready', type: 'boolean', default_value: 'false', description: m.trust('If the input field should be focused on first render (e.g. say when the auto-suggest field is in a modal)') },
          { name: 'reset', type: 'm.prop', default_value: 'null', description: m.trust('A mithril prop (<span class="text--navy text--bold text-4">m.prop()</span>) that forces a reset of the selected value on the next render.') },
          { name: 'onselect', type: 'function', default_value: 'null', description: m.trust('An event handler that fires when an auto-suggest item is selected. The handler returns one argument, the <span class="text--navy text--bold text-4">name</span> of the selected item.') },
          { name: 'placeholder', type: 'string', default_value: 'null', description: m.trust('Input placeholder text to display.') }
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.avatar = {};
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
Q.components.guide.js.ui.checkbox = {};
Q.components.guide.js.ui.checkbox.container = {
  view: function(ctrl) {
    return m('section#guide--component-checkbox', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Checkbox',
        intro: 'The Checkbox component can be used for either a standard checkbox or toggle style checkbox in various sizes.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div.form', [
              m('.row', [
                m('.column.small-thirds', [
                  m.component(vhxm.components.shared.checkbox.ui.container, {
                    name: 'standard',
                    checked: true,
                    size: 'small',
                    label: 'Can you lift at least 50 pounds?'
                  })
                ]),
                m('.column.small-thirds', [
                  m.component(vhxm.components.shared.checkbox.ui.container, {
                    name: 'standard',
                    checked: true,
                    size: 'medium',
                    label: 'My preferred mode of transportation is an airplane'
                  })
                ]),
                m('.column.small-thirds', [
                  m.component(vhxm.components.shared.checkbox.ui.container, {
                    name: 'standard',
                    checked: true,
                    size: 'medium',
                    label: 'Label'
                  })
                ])
              ]),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'standard',
                checked: true,
                size: 'large',
                label: 'Label'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'toggle-large',
                type: 'toggle',
                checked: true,
                size: 'small'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'toggle-medium',
                type: 'toggle',
                checked: true,
                size: 'medium'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', type: 'string', required: true, description: m.trust('A unique name for the checkbox used for the input name as well as the id + for attr pairing to ensure the checkbox works properly.') },
          { name: 'type', type: 'string', default_value: 'standard', description: m.trust('The type of the checkbox style. Either <span class="text--bold text--navy text-4">standard</span> (the default style if type is not provided), or <span class="text--bold text--navy text-4">toggle</span>.') },
          { name: 'value', type: 'string', default_value: 'null', description: m.trust('The value of the checkbox (if checked).') },
          { name: 'checked', type: 'boolean', default_value: 'false', description: m.trust('The starting state of the checkbox, either checked (<span class="text--bold text--navy text-4">true</span>) or unchecked (<span class="text--bold text--navy text-4">false</span>).') },
          { name: 'size', type: 'string', default_value: 'medium', description: m.trust('The size of the checkbox. Can be <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">medium</span>, <span class="text--bold text--navy text-4">large</span> for <span class="text-4">type=standard</span> and <span class="text--bold text--navy text-4">small</span> and <span class="text--bold text--navy text-4">medium</span> for <span class="text-4">type=toggle</span>.') }
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.filter = {};
Q.components.guide.js.ui.filter.container = {
  view: function(ctrl) {
    return m('section#guide--component-filter', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Filter',
        intro: 'The Filter component can be use for sections that require ways to request smaller subsets of content for a given resource. An example is our Customers section where we have a table of customers. You may want to only see customers from a specific location, or who purchased a specific product.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.filter.ui.container, {
                api: m.prop(),
                label: 'Customize',
                filtersStartOpen: true,
                filterHandler: function() {
                },
                filters: [
                  {
                    type: 'location',
                    title: 'Location',
                    data: m.prop([
                      { value: 'US', label: 'United States', checked: false },
                      { value: 'AF', label: 'Afghanistan', checked: false },
                      { value: 'AX', label: 'Aland Islands', checked: false },
                      { value: 'AL', label: 'Albania', checked: false },
                      { value: 'DZ', label: 'Algeria', checked: false },
                      { value: 'AS', label: 'American Samoa', checked: false },
                      { value: 'AD', label: 'Andorra', checked: false },
                      { value: 'AO', label: 'Angola', checked: false },
                      { value: 'AI', label: 'Anguilla', checked: false },
                      { value: 'AQ', label: 'Antarctica', checked: false },
                      { value: 'AG', label: 'Antigua and Barbuda', checked: false },
                      { value: 'AR', label: 'Argentina', checked: false },
                      { value: 'AM', label: 'Armenia', checked: false },
                      { value: 'AW', label: 'Aruba', checked: false },
                      { value: 'AU', label: 'Australia', checked: false },
                      { value: 'AT', label: 'Austria', checked: false },
                      { value: 'AZ', label: 'Azerbaijan', checked: false }
                    ])
                  }
                ]
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'filters', type: 'array', required: true, description: m.trust('An array of filters to include. Each filter must be of a different type. Strings for predefined filters (<span class="text--bold text--navy text-4">no predefined filters availabe yet</span>) or objects for custom filters. Custom filters must have the properties <span class="text--bold text--navy text-4">title</span>, <span class="text--bold text--navy text-4">type</span>, and either <span class="text--bold text--navy text-4">template</span> (a Mithril view function) or <span class="text--bold text--navy text-4">data</span> (an array of objects). Each item in a <span class="text--bold text--navy text-4">data</span> array custom filter, must have a <span class="text-4 text--bold text--navy">label</span>, <span class="text-4 text--bold text--navy">value</span>, and optional <span class="text-4 text--bold text--navy">checked</span> property.') },
          { name: 'size', type: 'string', default_value: 'large', description: 'The size (applies to the width) of the filter component.' },
          { name: 'label', type: 'string', default_value: 'null', description: 'A label to appear to the right of the filter, that shows when no filters are selected.' },
          { name: 'filterHandler', type: 'function', default_value: 'null', description: m.trust('A handler that is fired when a filter has been applied, either from hitting the <span class="text--italic">Apply</span> button or when removing a filter. The callback has one argument, <span class="text--bold text--navy text-4">filters</span>, an array of the current selected filters.') },
          { name: 'api', type: 'variable', default_value: 'null', description: m.trust('A reference variable that will make available the reactive <span class="text--bold text--navy text-4">state</span> and <span class="text--bold text--navy text-4">model</span> of the component. In addition, two methods are available — <span class="text--bold text--navy text-4">addFilter</span> and <span class="text--bold text--navy text-4">removeFilter</span> — for adding and removing filters with your custom filters.') }
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.header = {};
Q.components.guide.js.ui.header.container = {
  view: function(ctrl) {
    return m('section#guide--component-header', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Header',
        intro: 'This is a section header'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.header.ui.container, {
                title: 'Section Title',
                icon: 'product',
                description: 'A concise summary of this section',
                buttons: m('a.btn-teal', {
                  href: '#'
                }, 'Action')
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'title', type: 'string', required: true, description: 'The section title.' },
          { name: 'icon', type: 'string', required: true, description: 'Section icon class name.' },
          { name: 'border', type: 'boleean', default_value: 'true', description: 'Option to show a border at the bottom of the header.' },
          { name: 'description', type: 'string', default_value: 'null', description: 'The section subtitle or description.' },
          { name: 'buttons', type: 'component', default_value: 'null', description: 'A Mithril component that fills the space on on the right-side of header (i.e. action buttons).' }
        ]
      })
    ]);
  }
};

Q.components.guide.js.ui.load_more = {};
Q.components.guide.js.ui.load_more.container = {
  view: function(ctrl) {
    return m('section#guide--search_input', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Load More',
        intro: 'An element mainly for paginated data. When scrolled into viewport, or clicked on, triggers a user-defined function.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function(ctrl, opts) {
            return m('div', [
              m.component(vhxm.components.shared.load_more.ui.container, {
                onscroll: false,
                action: function(callback) {
                  alert('Load More!');
                  setTimeout(function() {
                    callback();
                    m.redraw();
                  }, 1000);
                }
              })
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.js.ui.modal = {};
Q.components.guide.js.ui.modal.container = {
  view: function(ctrl) {
    return m('section#guide--component-modal', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Modal',
        intro: 'An overlay/popup component for confirmation dialogs, information purposes, etc.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.modal.ui.container, {
                size: 'large',
                onOpen: function() {
                  console.log('opened');
                },
                onClose: function() {
                  console.log('closed');
                },
                actions: {
                  singleCallback: function() {
                    window.alert('Single callback fired');
                  },
                  leftCallback: function() {
                    window.alert('Left callback fired.');
                  },
                  rightCallback: function() {
                    window.alert('Right callback fired.');
                  }
                }
              }),
              m('button.block.margin-bottom-medium.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.modal.setTo({
                    hasActions: 1,
                    content: {
                      title: 'Modal A',
                      body: {
                        view: function() {
                          return m('p.text--gray', 'Modal with one action.');
                        }
                      }
                    }
                  });

                  vhxm.components.shared.modal.open();
                }
              }, 'Open modal (single action)'),
              m('button.block.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.modal.setTo({
                    hasActions: 2,
                    content: {
                      title: 'Modal B',
                      body: {
                        view: function() {
                          return m('p.text--gray', 'Modal with two actions.');
                        }
                      }
                    }
                  });

                  vhxm.components.shared.modal.open();
                }
              }, 'Open modal (two actions)'),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'size', type: 'string', default_value: 'medium', description: m.trust('The size of the modal, either <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">medium</span>, or <span class="text--bold text--navy text-4">large</span>') },
          { name: 'hasActions', type: 'integer', default_value: 2, description: m.trust('The number of actions (buttons at the bottom of the modal). Specifiy <span class="text--bold text--navy text-4">0</span> or <span class="text--bold text--navy text-4">false</span> will show now actions. Specifying <span class="text--bold text--navy text-4">1</span> will show one teal button. Specifiy <span class="text--bold text--navy text-4">2</span> or more will show one gray and one teal button (side-by-side).') },
          { name: 'content.title', type: 'string', default_value: 'null', description: m.trust('The title of the modal to appear at the top with a full width border underneath.') },
          { name: 'content.body', type: 'component', required: true, description: m.trust('The body of the modal. This options is required, and must be a mithril component.') },
          { name: 'actions.single', type: 'string', default_value: 'OK', description: m.trust('Single action button label.') },
          { name: 'actions.singleCallback', type: 'function', default_value: 'null', description: m.trust('Callback method fired when clicking a single action button.') },
          { name: 'actions.left', type: 'string', default_value: 'Cancel', description: m.trust('Left action button label.') },
          { name: 'actions.leftCallback', type: 'function', default_value: 'null', description: m.trust('Callback method fired when clicking the left action button.') },
          { name: 'actions.right', type: 'string', default_value: 'OK', description: m.trust('Right action button label.') },
          { name: 'actions.rightCallback', type: 'function', default_value: 'null', description: m.trust('Callback method fired when clicking the right action button.') },
          { name: 'onOpen', type: 'function', default_value: 'null', description: m.trust('Fired when the modal opens.') },
          { name: 'onClose', type: 'function', default_value: 'null', description: m.trust('Fired when the modal closes.') },
          { name: 'open', type: 'method', description: m.trust('Opens the modal. Call directly on modal object <span class="text--bold text--navy text-4">vhxm.components.shared.modal.open()</span>.') },
          { name: 'close', type: 'method', description: m.trust('Closes the modal. Call directly on modal object <span class="text--bold text--navy text-4">vhxm.components.shared.modal.close()</span>.') },
          { name: 'setTo', type: 'method', description: m.trust('Sets the options of the modal. Any of the options listed above can be set. Call directly on modal object <span class="text--bold text--navy text-4">vhxm.components.shared.modal.setTo()</span>.') },
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.radio = {};
Q.components.guide.js.ui.radio.container = {
  view: function(ctrl) {
    return m('section#guide--component-radio', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Radio',
        intro: 'The Radio component is a stylized version of the the standard HTML form element. A stacked or horizontal (side-by-side) layout can be used.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div.form', [
              m.component(vhxm.components.shared.radio.ui.container, {
                color: 'gray',
                name: 'horz-gray',
                items: [
                  {
                    label: 'Option A',
                    value: 'a',
                    checked: true
                  },
                  {
                    label: 'Option B',
                    value: 'b'
                  }
                ]
              }),
              m('div.margin-vert-medium', [
                m.component(vhxm.components.shared.radio.ui.container, {
                  color: 'teal',
                  name: 'stacked-teal',
                  stacked: true,
                  items: [
                    {
                      label: 'Choice A',
                      value: 'a',
                      checked: true
                    },
                    {
                      label: 'Choice B',
                      value: 'b'
                    }
                  ]
                })
              ]),
              m('div.margin-vert-medium', [
                m.component(vhxm.components.shared.radio.ui.container, {
                  color: 'teal',
                  buttons: true,
                  name: 'stacked-button',
                  items: [
                    {
                      label: 'Choice A',
                      value: 'a',
                      checked: true
                    },
                    {
                      label: {
                        title: 'Choice B',
                        descriptor: 'Descriptor'
                      },
                      value: 'b'
                    }
                  ]
                })
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', required: true, type: 'string', description: m.trust('A unique name for the checkbox used for the input name as well as the id + for attr pairing to ensure the radio works properly.') },
          { name: 'items', type: 'array', required: true, description: m.trust('An array of objects for each radio item. Object must have a <span class="text--navy text--bold text-4">label</span> and <span class="text--navy text--bold text-4">value</span> properties. The <span class="text--navy text--bold text-4">checked</span> and <span class="text--navy text--bold text-4">template</span> properties are optional.') },
          { name: 'onchange', type: 'function', default_value: null, description: m.trust('Callback fired when the the radio value changes.') },
          { name: 'stacked', type: 'boolean', default_value: 'false', description: m.trust('Whether the radio elements are stacked vertically. Defaults to <span class="text--bold text--navy text-4">false</span> (horizontal layout).') },
          { name: 'color', type: 'string', default_value: 'teal', description: m.trust('The color of the radio buttons. Either <span class="text--navy text--bold text-4">teal</span> or <span class="text--navy text--bold text-4">gray</span>.') },
          { name: 'checkedByDefault', type: 'boolean', default_value: 'true', description: m.trust('Dictates whether a radio should be set as checked by default or not') },
          { name: 'api', type: 'Mithril prop', default_value: 'null', description: m.trust('When set, surfaces direct access to internal component state') },
        ]
      })
    ]);
  }
};
Q.components.guide.js.ui.search_input = {};
Q.components.guide.js.ui.search_input.container = {
  view: function(ctrl) {
    return m('section#guide--search_input', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Search Input',
        intro: 'A text input for submitting a query and handling results. Initially created for usage within the select component.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div.form', [
              m.component(vhxm.components.shared.search_input.ui.container, {
                config: function(el) { },
                queryParam: true,
                callback: ctrl.searchCallback,
                search: function() { },
                placeholder: 'Search',
                oninput: function() { }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'search', type: 'function', required: true, description: m.trust('A request function for handling query submission (debounced at 300ms). Parameters available are <span class="text--bold text--navy text-4">query</span> and <span class="text--bold text--navy text-4">callback</span>.') },
          { name: 'config', type: 'function', default_value: 'null', description: 'Populates Mithril config attribute, which is called after element gets created.' },
          { name: 'placeholder', type: 'string', default_value: 'Search', description: 'Option to set the input\'s placeholder.' },
          { name: 'oninput', type: 'function', default_value: 'null', description: 'Event handler fired immediately on field input.' },
          { name: 'callback', type: 'function', default_value: 'null', description: 'A callback function that runs once fired from within the search request (above).' }
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.select = {};
Q.components.guide.js.ui.select.container = {
  view: function(ctrl) {
    return m('section#guide--component-filter', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Select',
        intro: 'A select dropdown with an option for built-in ajax search.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                placeholder: 'Select Option...',
                selected: null,
                position: m.prop('top'),
                caret: 'center',
                items: m.prop([
                  {
                    id: 1,
                    title: 'Item #1'
                  },
                  {
                    id: 2,
                    title: 'Item #2'
                  }
                ]),
                remove: 'Remove Trailer',
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id'
                },
                onSelect: function(data) {}
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example (w/ search)',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                search: function(query, callback) {
                  callback([
                    {
                      id: 3,
                      title: 'Item #3',
                      detail: 'Descriptor',
                    }
                  ]);
                },
                placeholder: 'Nothing selected',
                selected: null,
                caret: 'right',
                items: m.prop([
                  {
                    id: 1,
                    title: 'Item #1',
                    detail: 'Descriptor',
                  },
                  {
                    id: 2,
                    title: 'Item #2',
                    detail: 'Descriptor',
                  }
                ]),
                api: m.prop(),
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id',
                  descriptor: 'detail'
                },
                onSelect: function(data) {}
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example (w/ search, custom trigger, multi-select & media)',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                trigger: m('a', { href: '#', }, '+ Add Video'),
                search: function(query, callback) {
                  callback([
                    {
                      id: 3,
                      title: 'Media Item #3',
                      detail: 'Search Reesult',
                      img_src: 'https://placekitten.com/g/300/200'
                    }
                  ]);
                },
                caret: 'left',
                multiselect: true,
                type: 'media',
                placeholder: 'Nothing selected',
                selected: null,
                action: 'Create new category',
                label_length: 40,
                items: m.prop([
                  {
                    id: 1,
                    title: 'Media Item #1: The First Media Item Listed',
                    detail: 'Item detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 2,
                    title: 'Media Item #2: Numero Dos',
                    detail: 'Item #2 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 3,
                    title: 'Media Item #3',
                    detail: 'Item #3 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 4,
                    title: 'Media Item #4',
                    detail: 'Item #4 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 5,
                    title: 'Media Item #5',
                    detail: 'Item #5 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 6,
                    title: 'Media Item #6',
                    detail: 'Item #6 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  }
                ]),
                api: m.prop(),
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id',
                  descriptor: 'detail',
                  image: 'img_src'
                },
                caret_position: 'left',
                onAction: function(done) {
                  setTimeout(function() {
                    window.alert('Create callback');
                    done();
                  }, 1000);
                },
                onSelect: function() {}
              }),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'items', type: 'm.prop', required: true, description: m.trust('A mithril prop (m.prop()) containing an array of objects to populate options. Each object must map to the defined <span class="text--bold text--navy text-4">prop_map.label</span> and <span class="text--bold text--navy text-4">prop_map.value</span>.') },
          { name: 'type', type: 'string', default_value: 'standard', description: m.trust('Sets UI of the items in the dropdown list. Either <span class="text--bold text--navy text-4">standard</span> OR <span class="text--bold text--navy text-4">media</span>. The default is <span class="text--bold text--navy text-4">standard</span>.') },
          { name: 'color', type: 'string', default_value: 'gray', description: m.trust('The color of the dropdown button. Can be <span class="text--bold text--navy text-4">gray</span>, <span class="text--bold text--navy text-4">white</span>, or <span class="text--bold text--navy text-4">teal</span>') },
          { name: 'multiselect', type: 'boolean', required: false, default_value: 'false', description: 'Set whether the dropdown allows for selected multiple values.' },
          { name: 'action', type: 'boolean', default_value: 'false', description: 'Whether to show an action button or not, at the bottom of the dropdown. If turned on, it will appear upon typing a value in the search input.' },
          { name: 'trigger', type: 'mithril element', default_value: 'null', required: false, description: 'Trigger element that will replace default button dropdown' },
          { name: 'onSelect', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called after an option is chosen.' },
          { name: 'onAction', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called after the action button is clicked.' },
          { name: 'onClose', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called when the select dropdown closes.' },
          { name: 'isProcessing', type: 'prop', required: false, default_value: '[]', description: 'An array of values for any items that are in a processing state. Add or remove values to trigger the processing state of an item.' },
          { name: 'selected', type: 'array', required: false, default_value: 'null', description: 'Array that contains a 1 or more objects with selected values for initializing the dropdown pre-selected. Each object should have a label and value property (as defined in the prop_map).' },
          { name: 'placeholder', type: 'string', required: false, default_value: 'Select...', description: 'Text displayed in dropdown when no option is selected' },
          { name: 'caret', type: 'string', default_value: 'right', description: m.trust('Specify the position of the caret. Either <span class="text--bold text--navy text-4">left</span>, <span class="text--bold text--navy text-4">center</span>, or <span class="text--bold text--navy text-4">right</span>.') },
          { name: 'offset', type: 'integer', default_value: '40', description: m.trust('Specify the offset of the dropdown from the trigger.') },
          { name: 'position', type: 'prop', default_value: 'bottom', description: m.trust('Specify the position of the dropdown. Either <span class="text--bold text--navy text-4">top</span> or <span class="text--bold text--navy text-4">bottom</span>.') },
          { name: 'label_length', type: 'integer', default_value: '0 (unlimited)', description: m.trust('(Media Item only) Length of string to truncate after.') },
          { name: 'prop_map.key', type: 'string', required: true, description: 'The unique identifier (key) for each item selected (the selected object). The selected object will be returned in the onSelect callback method.' },
          { name: 'prop_map.value', type: 'string', required: true, description: 'Item key to look for in the provided items for the item value.' },
          { name: 'prop_map.label', type: 'string', required: true, description: 'Item key to look for in the provided items to display a label.' },
          { name: 'prop_map.search', type: 'boolean', default_value: 'false', description: 'Toggles inclusion of search input.' },
          { name: 'prop_map.image', type: 'string', default_value: 'null', description: m.trust('Item key to display an image for each item when using type <span class="text--bold text--navy text-4">media</span>.') },
          { name: 'prop_map.descriptor', type: 'string', default_value: 'null', description: 'Item key to display a descriptor for each item.' },
        ]
      })
    ]);
  }
};
Q.components.guide.js.ui.sidebar = {};
Q.components.guide.js.ui.sidebar.container = {
  view: function(ctrl) {
    return m('section#guide--component-sidebar', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Sidebar',
        intro: 'A sidebar which slides out and contains content.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m('button.block.margin-bottom-medium.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.sidebar.setTemplate({
                    view: function() {
                      return m('h5.text-center.padding-medium.head-4', 'Sidebar');
                    }
                  });
                  vhxm.components.shared.sidebar.setLoadedState(m.prop(false));
                  vhxm.components.shared.sidebar.toggle('open');
                }
              }, 'Open sidebar (loading)'),
              m('button.block.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.sidebar.setTemplate({
                    view: function() {
                      return m('h5.text-center.padding-medium.head-4', 'Sidebar');
                    }
                  });
                  vhxm.components.shared.sidebar.setLoadedState(m.prop(true));
                  vhxm.components.shared.sidebar.toggle('open');
                }
              }, 'Open sidebar (loaded)')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'loadedState', type: 'function', description: 'Pass this a mithril prop (e.g. a model) that tracks the loaded state of the sidebar. If none is passed, a loader will be displayed.' },
          { name: 'template', type: 'function', description: 'Pass this a component, which is then rendered within the sidebar.' },
          { name: 'onOpen', type: 'function', description: 'Takes a callback function called once the sidebar has been opened.' },
          { name: 'onClose', type: 'function', description: 'Takes a callback function called once the sidebar has been closed.' },
          { name: 'clickBlackList', type: 'string', description: 'A string of comma separated classes or ids of elements that should be ignored when clicked (that would otherwise close the sidebar).' },
          { name: 'toggle', type: 'method', description: m.trust('Call directly on sidebar object <span class="text--bold text--navy text-4">vhxm.components.shared.sidebar.toggle()</span>. Accepts two params- the first being "open" or "closed" and the next being the subsequent route.') },
        ]
      })
    ]);
  }
};
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
};Q.fun = m.prop(false);
Q.components.guide.js.ui.tag = {};
Q.components.guide.js.ui.tag.container = {
  view: function(ctrl) {
    return m('section#guide--component-tag', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Tags',
        intro: 'Tags or applied filters, having the appearance of a button but give you a hover state with a remove action.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m('.margin-right-medium.left',
                m.component(vhxm.components.shared.tag.ui.container, {
                  label: 'My Series: Complete Series Package',
                  label_length: 20,
                  isProcessing: Q.fun,
                  onShow: function() {
                    window.alert('show something');
                  },
                  onRemove: function() {
                    window.alert('remove something');
                  }
                })
              ),
              m.component(vhxm.components.shared.tag.ui.container, {
                label: 'Episode 1',
                isProcessing: Q.fun,
                onShow: function() {
                  window.alert('show something');
                },
                onRemove: function() {
                  window.alert('remove something');
                }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'label', type: 'string', default_value: 'Tag', description: m.trust('Text label of tag.') },
          { name: 'label_length', type: 'integer', default_value: '0 (unlimited)', description: m.trust('Length of string to truncate after.') },
          { name: 'isProcessing', type: 'prop', required: false, default_value: 'false', description: 'Whether or not in a processing state. Requires redraw upon changing.' },
          { name: 'onShow', type: 'function', default_value: 'null', description: m.trust('Fired when the tag is clicked.') },
          { name: 'onRemove', type: 'function', default_value: 'null', description: m.trust('Fired when the remove action is clicked.') },
        ]
      })
    ]);
  }
};
;;Q.code={"avatars":{"language":"html","template":""},"borders":{"language":"html","template":"  --BORDERS--\n\n  <span class=\"hljs-comment\">&lt;!-- Positions --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border-[position]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border-vert\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border-horz\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border-top\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border-bottom\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border-left\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border-center\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline bg-white padding-medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-comment\">&lt;!-- Colors --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--[color]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--gray\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--gray-light\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--navy\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--white\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--white-transparent\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-comment\">&lt;!-- Other Modifiers --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--[modifier]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--thick\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"border border--radius\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"},"buttons":{"language":"html","template":"--BUTTONS--\n\n<span class=\"hljs-comment\">&lt;!-- Button Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-[color]\"</span>&gt;</span>Color<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Core Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray\"</span>&gt;</span>Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-teal\"</span>&gt;</span>Teal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-white\"</span>&gt;</span>White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-red\"</span>&gt;</span>Red<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-vimeo-blue\"</span>&gt;</span>Vimeo Blue<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-vimeo-secondary\"</span>&gt;</span>Vimeo Secondary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-vimeo-secondary-outline\"</span>&gt;</span>Vimeo Secondary Outline<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n\n\n<span class=\"hljs-comment\">&lt;!-- Other Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-purple\"</span>&gt;</span>Purple<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-black\"</span>&gt;</span>Black<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-transparent\"</span>&gt;</span>Transparent<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-yellow\"</span>&gt;</span>Yellow<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-purple\"</span>&gt;</span>Purple<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Brand Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-twitter\"</span>&gt;</span>Twitter<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-facebook\"</span>&gt;</span>Facebook<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-tumblr\"</span>&gt;</span>Tumblr<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-paypal\"</span>&gt;</span>Paypal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-roku\"</span>&gt;</span>Roku<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Button Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn--[size]\"</span>&gt;</span>Size Modifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--small\"</span>&gt;</span>Small<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--medium\"</span>&gt;</span>Medium<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--large\"</span>&gt;</span>Large<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--fill\"</span>&gt;</span>Large<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Typography --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray\"</span>&gt;</span>Helvetica<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray btn--brandon\"</span>&gt;</span>Brandon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-[name]-[color] icon--[position]\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--left\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--center\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--right\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--left icon--right\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Processing States --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray is-processing\"</span>&gt;</span>Button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Dropdown Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-[color]\"</span>&gt;</span>Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-gray\"</span>&gt;</span>Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-teal\"</span>&gt;</span>Teal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-white\"</span>&gt;</span>White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-vimeo-blue\"</span>&gt;</span>White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-secondary\"</span>&gt;</span>White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-dropdown-secondary-outline\"</span>&gt;</span>White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Button Groups --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-group\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-selected btn-white small-thirds\"</span>&gt;</span>Button 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-white small-thirds\"</span>&gt;</span>Button 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-white small-thirds\"</span>&gt;</span>Button 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Button Groups Aligned --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-group btn-group--left\"</span>&gt;</span>\n  ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-group btn-group--center\"</span>&gt;</span>\n  ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-group btn-group--right\"</span>&gt;</span>\n  ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"},"charts":{"language":"html","template":"<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"code__style_charts\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">section</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"code--style-charts\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-medium\"</span>&gt;</span>\n  {{#markdown}}\n\n    --CHARTS--\n\n    <span class=\"hljs-comment\">&lt;!-- Percent Bars --&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bar\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bar-percent\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 35%;\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n  {{/markdown}}\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">section</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>"},"checkbox-ruby":{"language":"html","template":"--CHECKBOXES--\n\n<span class=\"hljs-comment\">&lt;!-- Standard (Ruby Helper) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_small</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_medium</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_large</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Alt (Ruby Helper) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_alt_small</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">checkbox_alt</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>"},"colors-brand":{"language":"html","template":"--BRAND COLORS--\n\n<span class=\"hljs-comment\">&lt;!-- SASS Variables --&gt;</span>\n$vhx-[name]\n\n$vhx-orange\n$vhx-debian\n$vhx-purple\n$vhx-currant\n$vhx-blue\n$vhx-teal\n$vhx-green\n$vhx-yellow\n\n\n\n--AS BACKGROUNDS--\n\n<span class=\"hljs-comment\">&lt;!-- VHX Brand Backgrounds --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-yellow\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-orange\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-currant\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"},"colors-core":{"language":"html","template":"--CORE COLORS--\n\n<span class=\"hljs-comment\">&lt;!-- SASS Variables --&gt;</span>\n$[name]-[modifier]\n\n<span class=\"hljs-comment\">&lt;!-- Black and White --&gt;</span>\n$white\n$white-transparent\n$black\n$black-transparent\n\n<span class=\"hljs-comment\">&lt;!-- Grays (light to dark) --&gt;</span>\n$gray-1\n$gray-2\n$gray-3\n$gray-4\n$gray-5\n$gray-6\n$gray-7\n$gray-8\n\n<span class=\"hljs-comment\">&lt;!-- Other Colors --&gt;</span>\n$teal-1\n$teal-2\n$teal-3\n$red\n$navy\n$navy-transparent\n\n<span class=\"hljs-comment\">&lt;!-- Vimeo Brand Colors --&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Blues --&gt;</span>\n$vimeo-blue\n$foam\n\n<span class=\"hljs-comment\">&lt;!-- Green --&gt;</span>\n$pistachio\n$rum-swizzle\n\n<span class=\"hljs-comment\">&lt;!-- Reds --&gt;</span>\n$sunset-orange\n$pale-pink\n\n<span class=\"hljs-comment\">&lt;!-- Grayscale --&gt;</span>\n$astro-granite\n$regent-gray\n$southerly-sky\n$porcelain\n$plaster\n$paste\n$white\n\n<span class=\"hljs-comment\">&lt;!-- Interaction State Colors --&gt;</span>\n$vimeo-blue-darkened\n$pistachio-darkened\n$sunset-orange-darkened\n\n--AS BACKGROUNDS--\n\n<span class=\"hljs-comment\">&lt;!-- Background Convention --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-[color]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Teal Backgrounds --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-teal-1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-teal-2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Black &amp; White Backgrounds --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-white\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-white-transparent\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-black\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-black-transparent\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Gray Backgrounds --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-gray-1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-gray-2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-gray-3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-gray-4\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-gray-5\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-gray-6\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Navy Backgrounds --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-navy\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-navy-transparent\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Vimeo Blues --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-vimeo-blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-foam\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Vimeo Greens --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-pistachio\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-rum-swizzle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Vimeo Reds --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-sunset-orange\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-pale-pink\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Vimeo Grayscale --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-astro-granite\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-regent-gray\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-southerly-sky\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-porcelain\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-plaster\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-paste\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-white\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Interaction State Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-vimeo-blue-darkened\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-pistachio-darkened\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-sunset-orange-darkened\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"},"colors-external":{"language":"html","template":"--EXTERNAL BRAND COLORS--\n\n<span class=\"hljs-comment\">&lt;!-- SASS Variables --&gt;</span>\n$[brand]-[color]\n\n$facebook-blue\n$twitter-blue\n$tumblr-blue\n$paypal-blue\n$roku-purple\n$vimeo-blue\n\n\n--AS BACKGROUNDS--\n\n<span class=\"hljs-comment\">&lt;!-- Ext. Brand Backgrounds --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-facebook-blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-twitter-blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-tumblr-blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-paypal-blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-roku-purple\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"bg-vimeo-blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"},"colors-tools":{"language":"html","template":"--TOOLS--\n\n<span class=\"hljs-comment\">&lt;!-- Ruby Methods--&gt;</span>\ndarken_text?(hex) ? '#000' : '#fff'\n\n<span class=\"hljs-comment\">&lt;!-- Decimal between 0 and 1 (dark to light) --&gt;</span>\ndarken_color(hex_color, .5)\nlighten_color(hex_color, .5)\n\n<span class=\"hljs-comment\">&lt;!-- SASS Methods--&gt;</span>\n\ndarken($teal-2, 10%)\nlighten($teal-2, 10%)\ntransparentize($teal-2, .5)"},"display":{"language":"html","template":"--LAYOUT--\n\n<span class=\"hljs-comment\">&lt;!-- Display --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span>Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline\"</span>&gt;</span>Inline Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-invisible\"</span>&gt;</span>Invisible (visibility: hidden)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-hidden\"</span>&gt;</span>Hidden (display: none)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"radius\"</span>&gt;</span>Rounded corners<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"shadow--gray\"</span>&gt;</span>Box shadow<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Alignment --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline\"</span>&gt;</span>Left Aligned Inline Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline\"</span>&gt;</span>Center Aligned Inline Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline\"</span>&gt;</span>Right Aligned Inline Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Arrows --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-[side]-[position] bg-[color]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-top-left bg-gray-2\"</span>&gt;</span>Top left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-top-middle bg-gray-2\"</span>&gt;</span>Top middle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-top-right bg-gray-2\"</span>&gt;</span>Top right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-right-top bg-gray-2\"</span>&gt;</span>Right top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-right-middle bg-gray-2\"</span>&gt;</span>Right middle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-right-bottom bg-gray-2\"</span>&gt;</span>Right bottom<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-bottom-left bg-gray-2\"</span>&gt;</span>Bottom left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-bottom-middle bg-gray-2\"</span>&gt;</span>Bottom middle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-bottom-right bg-gray-2\"</span>&gt;</span>Bottom right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-left-top bg-gray-2\"</span>&gt;</span>Left top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-left-middle bg-gray-2\"</span>&gt;</span>Left middle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"arrow arrow-left-bottom bg-gray-2\"</span>&gt;</span>Left bottom<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Inline List (floated w/ margins) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline-list\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Inline List (inline block w/o margins) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"inline-list inline\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- List with alternating background --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"striped\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>&gt;</span>Item<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>"},"grid":{"language":"html","template":"--GRID--\n\n<span class=\"hljs-comment\">&lt;!-- Basic Setup (16 columns)--&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>5<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>6<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>7<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>9<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>10<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>11<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>12<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>13<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>14<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>15<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-1 medium-1 large-1 xlarge-1\"</span>&gt;</span>16<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Responsive --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-6 large-4\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-6 large-4\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-4 large-4\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column show-for-large-up large-4\"</span>&gt;</span>4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Offsets --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-centered small-12\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-6\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-6\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-4\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-offset-4 medium-8\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-4\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Hide and Show --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 show-for-small-only\"</span>&gt;</span>shows for small only<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column medium-16 show-for-medium-only\"</span>&gt;</span>shows for medium only<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column large-16 show-for-large-only\"</span>&gt;</span>shows for large only<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column hide-for-small-only medium-4\"</span>&gt;</span>shows for medium up<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-4\"</span>&gt;</span>shows for all<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column small-16 medium-8 large-4\"</span>&gt;</span>shows for all<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"column large-4 show-for-large-up\"</span>&gt;</span>shows for large up<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>"},"spacing-positions":{"language":"html","template":"--POSITION--\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-[position]-[size]\"</span>&gt;</span>Large Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-large\"</span>&gt;</span>All sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-vert-large\"</span>&gt;</span>Vert. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-horz-large\"</span>&gt;</span>Horz. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-top-large\"</span>&gt;</span>Top side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-bottom-large\"</span>&gt;</span>Horz. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-left-large\"</span>&gt;</span>Left side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-right-large\"</span>&gt;</span>Right side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-large\"</span>&gt;</span>All sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-vert-large\"</span>&gt;</span>Vert. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-horz-large\"</span>&gt;</span>Horz. sides<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-top-large\"</span>&gt;</span>Top side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-bottom-large\"</span>&gt;</span>Bottom side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-left-large\"</span>&gt;</span>Left side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-right-large\"</span>&gt;</span>Right side<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>"},"spacing-sizes":{"language":"html","template":"--SIZING--\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-[size]\"</span>&gt;</span>Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-[size]\"</span>&gt;</span>Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-xsmall\"</span>&gt;</span>XSmall Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-small\"</span>&gt;</span>Small Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-medium\"</span>&gt;</span>Medium Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-large\"</span>&gt;</span>Large Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-xlarge\"</span>&gt;</span>XLarge Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"padding-xxlarge\"</span>&gt;</span>XXLarge Padding<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-xsmall\"</span>&gt;</span>xsmall Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-small\"</span>&gt;</span>Small Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-medium\"</span>&gt;</span>Medium Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-large\"</span>&gt;</span>Large Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-xlarge\"</span>&gt;</span>XLarge Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"margin-xxlarge\"</span>&gt;</span>XXLarge Margin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>"},"dropdowns":{"language":"html","template":""},"forms":{"language":"html","template":""},"headers":{"language":"html","template":"--HEADERS--\n\n<span class=\"hljs-comment\">&lt;!-- Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-[size]\"</span>&gt;</span>Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-1\"</span>&gt;</span>Header 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-2\"</span>&gt;</span>Header 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3\"</span>&gt;</span>Header 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-4\"</span>&gt;</span>Header 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5\"</span>&gt;</span>Header 5<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head--[family]\"</span>&gt;</span>Alternate Gothic<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-1 head--gothic\"</span>&gt;</span>Gothic Header 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-2 head--gothic\"</span>&gt;</span>Gothic Header 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 head--gothic\"</span>&gt;</span>Gothic Header 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-[size] text--[color]\"</span>&gt;</span>Color Modifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3\"</span>&gt;</span>Header Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 text--navy\"</span>&gt;</span>Header Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 text--gray\"</span>&gt;</span>Header Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 text--teal\"</span>&gt;</span>Header Teal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 text--white\"</span>&gt;</span>Header White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Links --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3\"</span>&gt;</span>Header Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 text--navy\"</span>&gt;</span>Header Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 text--gray\"</span>&gt;</span>Header Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 text--teal\"</span>&gt;</span>Header Teal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 text--whit\"</span>&gt;</span>Header White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>"},"icon-names":{"language":"html","template":"--ICONS NAMES--\n\n<span class=\"hljs-comment\">&lt;!-- Icon Names --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-[name]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-teal-download\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-teal-upload\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-amex\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>"},"icon-styles":{"language":"html","template":"--ICONS STYLES--\n\n<span class=\"hljs-comment\">&lt;!-- Icon Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-[name] icon--[size]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span> <span class=\"hljs-comment\">&lt;!-- default is size small --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--xxsmall\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--xsmall\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--xlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-add-member icon--xxlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Icon Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-[name]-[color]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span> <span class=\"hljs-comment\">&lt;!-- default is multi-colored --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity-teal\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity-navy\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity-gray\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon icon-activity-white\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Button Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-[name]-[color] icon--[position]\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--left\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--center\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--right\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"btn-gray icon-product-navy icon--left\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-chevron-right-navy icon--right\"</span>&gt;</span>Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Text Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-[size] icon-[name]-[color] icon--[position] icon--[size]\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-3 icon--left icon--xxsmall icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-3 icon--left icon--xsmall icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 icon--left icon--small icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 icon--left icon--medium icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1 icon--left icon--large icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1 icon--left icon--xlarge icon-product\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- icon right must be wrapped in a block element --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-3 icon--right icon--xsmall icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 icon--right icon--small icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 icon--right icon--medium icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1 icon--right icon--large icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1 icon--right icon--xlarge icon-product margin-bottom-medium\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Header Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-[size] icon-[name]-[color] icon--[position] icon--[size]\"</span>&gt;</span>Text w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5 icon--left icon-product icon--xsmall\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-4 icon--left icon-product icon--small\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 icon--left icon-product icon--medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-2 icon--left icon-product icon--large\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-1 icon--left icon-product icon--xlarge\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- icon right must be wrapped in a block element --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5 icon--right icon--xsmall icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-4 icon--right icon--small icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-3 icon--right icon--medium icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-2 icon--right icon--large icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"block\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-1 icon--right icon--xlarge icon-product margin-bottom-medium\"</span>&gt;</span>Header w/ Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Circle Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-[name]-[color] icon--[size]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--xxsmall\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--xsmall\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--xlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-circle icon-upload icon--xxlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Dot Icons --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon--[size]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon--small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon--medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon--large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot-[color]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--teal\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--gray\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--navy\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--yellow\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"icon-dot icon-dot--red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>"},"images":{"language":"html","template":""},"lists":{"language":"html","template":""},"loaders":{"language":"html","template":"--LOADERS--\n\n<span class=\"hljs-comment\">&lt;!-- Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-teal\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-white\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n\n<span class=\"hljs-comment\">&lt;!-- Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate loader--small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate loader--medium\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate loader--large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader-slate loader--xlarge\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Cover Types --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader--transparent loader-slate is-processing\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader--hide loader-slate is-processing\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Offset --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"loader--hide loader--offset loader-slate is-processing\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>"},"radio-ruby":{"language":"html","template":"--RADIO--\n\n<span class=\"hljs-comment\">&lt;!-- Horizontal Layout (Ruby Helper) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">radio_gray</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">radio_teal</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Stacked Layout (Ruby Helper) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">radio_gray_stacked</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">%=</span> <span class=\"hljs-attr\">radio_teal_stacked</span>(<span class=\"hljs-attr\">name</span>, <span class=\"hljs-attr\">id</span>, <span class=\"hljs-attr\">value</span>, <span class=\"hljs-attr\">is_checked</span>, <span class=\"hljs-attr\">is_disabled</span>, <span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">label</span>) %&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Button Radio --&gt;</span>\nUse Mithril component"},"tables":{"language":"html","template":"<span class=\"hljs-comment\">&lt;!-- Standard --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table table--ticks margin-bottom-large\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>ID<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-5\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>Net Worth<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-4\"</span>&gt;</span>Species<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>324<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>human@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$1.99<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Human<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>41<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>cat@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$0.29<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Cat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>dog@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$121.89<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Dog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Standard w/ Clickable Rows --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table table--ticks margin-bottom-large\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>ID<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-5\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>Net Worth<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-4\"</span>&gt;</span>Species<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>324<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>human@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$1.99<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Human<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>41<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>cat@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$0.29<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Cat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>dog@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$121.89<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Dog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Striped --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table table--ticks table--striped margin-bottom-large\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>ID<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-5\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>Net Worth<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-4\"</span>&gt;</span>Species<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>324<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>human@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$1.99<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Human<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>41<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>cat@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$0.29<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Cat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>dog@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$121.89<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Dog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Striped with Brandon Font Headers --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table table--ticks table--striped margin-bottom-large\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5 text--gray text-right small-2\"</span>&gt;</span>ID<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5 text--gray text-left small-5\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5 text--gray text-right small-5\"</span>&gt;</span>Net Worth<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"head-5 text--gray text-left small-4\"</span>&gt;</span>Species<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>324<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>human@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$1.99<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Human<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>41<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>cat@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$0.29<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Cat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>dog@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$121.89<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Dog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Small/Striped and Truncated --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table table--striped table--ticks table--small table--truncate\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>ID<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-5\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>Net Worth<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-4\"</span>&gt;</span>Species<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>324<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>human@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$1.99<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Human<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>41<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>cat@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$0.29<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Cat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>dog@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$121.89<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Dog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Block --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table table--ticks table--block margin-bottom-large\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>ID<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-5\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>Net Worth<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-4\"</span>&gt;</span>Species<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>324<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"small-5\"</span>&gt;</span>human@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>$1.99<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"small-4\"</span>&gt;</span>Human<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>41<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"small-5\"</span>&gt;</span>cat@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>$0.29<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"small-4\"</span>&gt;</span>Cat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"small-5\"</span>&gt;</span>dog@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>$121.89<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"small-4\"</span>&gt;</span>Dog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Table with Row Head --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">table</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table table--striped table--ticks\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">thead</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-2\"</span>&gt;</span>ID<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-5\"</span>&gt;</span>Email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right small-5\"</span>&gt;</span>Net Worth<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">th</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left small-4\"</span>&gt;</span>Species<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">th</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">thead</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tbody</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table-row-head\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">colspan</span>=<span class=\"hljs-string\">\"4\"</span>&gt;</span>\n        Date\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"table-row-arrow\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>324<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>human@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$1.99<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Human<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>41<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>cat@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$0.29<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Cat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"is-clickable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>dog@vhx.tv<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>$121.89<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Dog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tbody</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">table</span>&gt;</span>\n"},"text":{"language":"html","template":"--TEXT--\n\n<span class=\"hljs-comment\">&lt;!-- Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-[size]\"</span>&gt;</span>Text Size<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-1\"</span>&gt;</span>Text 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2\"</span>&gt;</span>Text 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-3\"</span>&gt;</span>Text 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-4\"</span>&gt;</span>Text 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Alignment --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-left\"</span>&gt;</span>Text left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-center\"</span>&gt;</span>Text center<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-right\"</span>&gt;</span>Text right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-[size] text--[color]\"</span>&gt;</span>Text Color Modifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--gray\"</span>&gt;</span>Text Gray (default)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--gray-light\"</span>&gt;</span>Text Light Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--navy\"</span>&gt;</span>Text Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--teal\"</span>&gt;</span>Text Teal<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--yellow\"</span>&gt;</span>Text Yellow<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--red\"</span>&gt;</span>Text Red<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--green\"</span>&gt;</span>Text Green<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Text White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Text Orange<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Text Debian<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Text Purple<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Text Currant<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Text Blue<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--vimeo-blue\"</span>&gt;</span>Text Vimeo Blue<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--sunset-orange\"</span>&gt;</span>Text Sunset Orange<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--southerly-sky\"</span>&gt;</span>Text Southerly Sky<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--regent-gray\"</span>&gt;</span>Text Regent Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--astro-granite\"</span>&gt;</span>Text Astro Granite<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-comment\">&lt;!-- Styles (for any color) --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-[size] text--[style]\"</span>&gt;</span>Text Style Modifier<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--italic\"</span>&gt;</span>Text Italic<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--bold\"</span>&gt;</span>Text Bold<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--transparent\"</span>&gt;</span>Text Transparent<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n\n\n--LINKS--\n\n<span class=\"hljs-comment\">&lt;!-- Colors --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 block\"</span>&gt;</span>Link Default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--gray\"</span>&gt;</span>Link Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--gray-light\"</span>&gt;</span>Link Light Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--navy\"</span>&gt;</span>Link Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--white\"</span>&gt;</span>Link White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--orange\"</span>&gt;</span>Link Orange<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--debian\"</span>&gt;</span>Link Debian<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--purple\"</span>&gt;</span>Link Purple<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--currant\"</span>&gt;</span>Link Currant<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--blue\"</span>&gt;</span>Link Blue<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--vimeo-blue\"</span>&gt;</span>Link Vimeo Blue Darkened<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--sunset-orange\"</span>&gt;</span>Link Sunset Orange Darkened<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--southerly-sky\"</span>&gt;</span>Link Southerly Sky<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--regent-gray\"</span>&gt;</span>Link Regent Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 text--astro-granite\"</span>&gt;</span>Link Astro Granite<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Disabled --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled \"</span>&gt;</span>Link Default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--gray\"</span>&gt;</span>Link Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--gray-light\"</span>&gt;</span>Link Light Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--navy\"</span>&gt;</span>Link Navy<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--white\"</span>&gt;</span>Link White<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--orange\"</span>&gt;</span>Link Orange<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--debian\"</span>&gt;</span>Link Debian<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--purple\"</span>&gt;</span>Link Purple<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--currant\"</span>&gt;</span>Link Currant<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--blue\"</span>&gt;</span>Link Blue<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--vimeo-blue\"</span>&gt;</span>Link Vimeo Blue<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--sunset-orange\"</span>&gt;</span>Link Sunset Orange<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--southerly-sky\"</span>&gt;</span>Link Southerly Sky<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--regent-gray\"</span>&gt;</span>Link Regent Gray<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"#\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text-2 is-disabled text--astro-granite\"</span>&gt;</span>Link Astro Granite<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n"},"tooltips":{"language":"html","template":"--TOOLTIPS--\n\n<span class=\"hljs-comment\">&lt;!-- Standard Tooltip --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--top-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a standard tooltip. Here is some information.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Fixed Tooltip --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--fixed arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a fixed tooltip. Here is some information.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Sizes --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--small arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a small tooltip.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--medium arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a medium tooltip.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--large arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a large tooltip.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--xlarge arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is an xlarge tooltip.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip tooltip--fill arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>This is a tooltip that fills its container.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- Arrow Positions --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--top-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow top left.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--top-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow top center.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--top-right\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow top right.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--right-top\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow right top.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--right-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow right center.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--right-bottom\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow right bottom.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--left-top\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow left top.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--left-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow left center.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--left-bottom\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow left bottom.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--bottom-left\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow bottom left.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--bottom-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow bottom center.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tooltip arrow--bottom-right\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"text--gray\"</span>&gt;</span>Arrow bottom right.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n"},"mithril-api":{"language":"javascript","template":"<span class=\"hljs-comment\">//--api integration--</span>\n\nvhxm.models.collections = {\n  <span class=\"hljs-attr\">list</span>: m.prop(<span class=\"hljs-literal\">null</span>)\n};\n\nm.initApi(<span class=\"hljs-string\">'collections'</span>);\n\nvhxm.models.listCollections = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  app.api.list({}, vhxm.models.collections.list, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-comment\">// callback</span>\n  });\n};"},"mithril-components":{"language":"javascript","template":"<span class=\"hljs-comment\">//--sidebar.state.js--</span>\n\nvhxm.components.sidebar.state = {\n  <span class=\"hljs-attr\">isOpen</span>: m.prop(<span class=\"hljs-literal\">false</span>),\n  <span class=\"hljs-attr\">isSaving</span>: m.prop(<span class=\"hljs-literal\">false</span>)\n};\n\n<span class=\"hljs-comment\">//--sidebar.constants.js--</span>\n\nvhxm.components.sidebar.constants = {\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'Title'</span>\n};\n\n<span class=\"hljs-comment\">//--sidebar.controller.js--</span>\n\n\nvhxm.components.sidebar.controller = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">var</span> self = <span class=\"hljs-keyword\">this</span>;\n\n  <span class=\"hljs-keyword\">this</span>.helpers = {\n    <span class=\"hljs-attr\">handleEvent</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      <span class=\"hljs-comment\">// handle event (arbitrary example)</span>\n      vhxm.models.collections.saveDoc();\n    }\n  };\n};\n\n<span class=\"hljs-comment\">//--sidebar.ui.js--</span>\n\n\nvhxm.components.sidebar.ui = {\n  <span class=\"hljs-comment\">// sidebar parent component</span>\n  container: {\n    <span class=\"hljs-attr\">controller</span>: vhxm.components.sidebar.controller,\n    <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">ctrl</span>) </span>{\n      <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'div'</span>, [\n        m.component(vhxm.components.sidebar.ui.sub_component, { <span class=\"hljs-attr\">helpers</span>: ctrl.helpers }),\n        m(<span class=\"hljs-string\">'a'</span>, {\n          <span class=\"hljs-attr\">onclick</span>: ctrl.handleEvent\n        }, <span class=\"hljs-string\">'Save'</span>)\n      ]);\n    }\n  },\n  <span class=\"hljs-comment\">// sidebar sub-component</span>\n  sub_component: {\n    <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">ctrl, c</span>) </span>{\n      <span class=\"hljs-comment\">// c.helpers is available in any subcomponent</span>\n      <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'input'</span>, { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'title'</span> }, vhxm.components.sidebar.constants.label);\n    }\n  }\n};"},"mithril-folders":{"language":"markdown","template":"--Folder Structure--\n\n|—application\n  # scope.js\n  # models.js\n  # routes.js\n  |-layouts\n<span class=\"hljs-code\">    # layout.index.js</span>\n<span class=\"hljs-code\">    # layout.edit.js</span>\n  |-components\n<span class=\"hljs-code\">    |-sidebar</span>\n<span class=\"hljs-code\">      # sidebar.ui.js</span>\n<span class=\"hljs-code\">      # sidebar.state.js</span>\n<span class=\"hljs-code\">      # sidebar.controller.js</span>\n<span class=\"hljs-code\">      # sidebar.constants.js</span>\n<span class=\"hljs-code\">    |-table</span>\n<span class=\"hljs-code\">      # table.ui.js</span>\n<span class=\"hljs-code\">      # table.state.js</span>\n<span class=\"hljs-code\">      # table.controller.js</span>\n<span class=\"hljs-code\">      # table.constants.js</span>"},"mithril-intro":{"language":"x","template":"<section id=\"code--js_mithril_intro\" class=\"padding-medium text--white\">\n  <span class=\"logo-mithril\">○</span>\n</section>"},"mithril-layouts":{"language":"javascript","template":"<span class=\"hljs-comment\">//--Layouts--</span>\n\n<span class=\"hljs-comment\">// an empty layout with an empty div</span>\nvhxm.layouts.index = {\n  <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'div'</span>);\n  }\n};\n\n<span class=\"hljs-comment\">// a layout that includes child components</span>\nvhxm.layouts.index = {\n  <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'div'</span>, [\n      m.component(vhxm.components.table.container),\n      m.component(vhxm.components.sidebar.container)\n    ]);\n  }\n};"},"mithril-models":{"language":"javascript","template":"<span class=\"hljs-comment\">//--getting/setter--</span>\n\n<span class=\"hljs-comment\">// set to some default value on creation</span>\n<span class=\"hljs-keyword\">var</span> example = m.prop(<span class=\"hljs-string\">'default_value'</span>);\n\n<span class=\"hljs-comment\">// now you can get</span>\nexample();\n\n<span class=\"hljs-comment\">// or set</span>\nexample(<span class=\"hljs-string\">'new_value'</span>);\n\n\n<span class=\"hljs-comment\">//--simple example model--</span>\n\nvhxm.models.collections = {\n  <span class=\"hljs-attr\">list</span>: m.prop(<span class=\"hljs-literal\">null</span>),\n  <span class=\"hljs-attr\">doc</span>: m.prop(<span class=\"hljs-literal\">null</span>),\n  <span class=\"hljs-attr\">docItems</span>: m.prop(<span class=\"hljs-literal\">null</span>)\n};\n\nvhxm.models.listCollections = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-comment\">// retrieve listing from api/backend</span>\n  <span class=\"hljs-comment\">// and populate vhxm.models.collections.list()</span>\n};\nvhxm.models.retrieveCollection = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-comment\">// retrieve doc from api/backend</span>\n  <span class=\"hljs-comment\">// and populate vhxm.models.collections.doc()</span>\n};\nvhxm.models.retrieveItems = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-comment\">// retrieve doc items from api/backend</span>\n  <span class=\"hljs-comment\">// and populate vhxm.models.collections.docItems()</span>\n};"},"mithril-order":{"language":"markdown","template":"--File order--\n\nscope.js\ncomponents/\nlayouts/\nmodels.js\nroutes.js"},"mithril-requests":{"language":"javascript","template":"<span class=\"hljs-comment\">//--requests--</span>\n\n<span class=\"hljs-comment\">// config for setting headers</span>\nvhxm.models.config = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">request</span>) </span>{\n  request.setRequestHeader(<span class=\"hljs-string\">'Authorization'</span>, <span class=\"hljs-string\">'Bearer '</span> + TOKEN);\n};\n\n<span class=\"hljs-comment\">// handle errors</span>\nvhxm.models.handleError = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">error</span>) </span>{};\n\n<span class=\"hljs-comment\">// populate model on successful response</span>\nvhxm.models.populate = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data, model</span>) </span>{\n  $.each(data, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">key, item</span>) </span>{\n    data[key] = m.prop(item);\n  });\n\n  model(data);\n});\n\n<span class=\"hljs-comment\">// using the above in a model method</span>\nvhxm.models.listCollections = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  m.request({\n    <span class=\"hljs-attr\">method</span>: <span class=\"hljs-string\">'GET'</span>,\n    <span class=\"hljs-attr\">url</span>: <span class=\"hljs-string\">'http://apia.vhx.tv/collections'</span>,\n    <span class=\"hljs-attr\">config</span>: vhxm.models.config\n  }).then(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data</span>) </span>{\n    vhxm.models.populate(data, vhxm.models.collections().list);\n  }, vhxm.models.handleError);\n};"},"mithril-scope":{"language":"javascript","template":"<span class=\"hljs-comment\">// --scope.js--</span>\n\n<span class=\"hljs-keyword\">var</span> vhxm = {\n  <span class=\"hljs-attr\">models</span>: {},\n  <span class=\"hljs-attr\">layouts</span>: {\n    <span class=\"hljs-attr\">index</span>: {},\n    <span class=\"hljs-attr\">edit</span>: {}\n  },\n  <span class=\"hljs-attr\">components</span>: {\n    <span class=\"hljs-attr\">sidebar</span>: {},\n    <span class=\"hljs-attr\">table</span>: {},\n    <span class=\"hljs-attr\">header</span>: {}\n  }\n};"},"autosuggest":{"language":"javascript","template":"m.component(vhxm.components.shared.autosuggest.ui.container, {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'auto_suggest'</span>,\n  <span class=\"hljs-attr\">placeholder</span>: <span class=\"hljs-string\">'Enter name'</span>,\n  <span class=\"hljs-attr\">data</span>: m.prop([<span class=\"hljs-string\">'This'</span>, <span class=\"hljs-string\">'That'</span>, <span class=\"hljs-string\">'Those'</span>, <span class=\"hljs-string\">'Some'</span>, <span class=\"hljs-string\">'More'</span>, <span class=\"hljs-string\">'Left'</span>, <span class=\"hljs-string\">'Right'</span>]),\n  <span class=\"hljs-attr\">focusonready</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">reset</span>: m.prop(<span class=\"hljs-literal\">false</span>),\n  <span class=\"hljs-attr\">onselect</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">selected</span>) </span>{\n    <span class=\"hljs-comment\">// handle event</span>\n  }\n});"},"avatar":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Avatar Component</span>\n\nm.component(vhxm.components.shared.avatar.ui, {\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">'medium'</span>,\n  <span class=\"hljs-attr\">image</span>: <span class=\"hljs-string\">'https://secure.gravatar.com/avatar/image.png'</span>,\n});"},"checkbox":{"language":"javascript","template":"<span class=\"hljs-comment\">// standard checkbox</span>\nm.component(vhxm.components.shared.checkbox.ui.container, {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'standard'</span>,\n  <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">'medium'</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'Label'</span>\n});\n\n<span class=\"hljs-comment\">// toggle checkbox</span>\nm.component(vhxm.components.shared.checkbox.ui.container, {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'toggle'</span>,\n  <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'toggle'</span>,\n  <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">'medium'</span>\n});"},"filter":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Filter Component</span>\n\nm.component(vhxm.components.shared.filter.container, {\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'Customize this table'</span>,\n  <span class=\"hljs-attr\">api</span>: vhxm.component.name.state.filterApi,\n  <span class=\"hljs-attr\">filters</span>: [\n    <span class=\"hljs-string\">'date'</span>,\n    <span class=\"hljs-string\">'location'</span>,\n    {\n      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'test'</span>,\n      <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Test'</span>,\n      <span class=\"hljs-attr\">template</span>: {\n        <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n          <span class=\"hljs-comment\">// custom filter template</span>\n        }\n      }\n    }\n  ]\n});"},"header":{"language":"javascript","template":"m.component(vhxm.components.shared.header.ui.container, {\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Section Title'</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">'product'</span>,\n  <span class=\"hljs-attr\">description</span>: <span class=\"hljs-string\">'This should be a concise summary of what this section does'</span>,\n  <span class=\"hljs-attr\">buttons</span>: m(<span class=\"hljs-string\">'a.btn-teal'</span>, {\n    <span class=\"hljs-attr\">href</span>: <span class=\"hljs-string\">'#'</span>\n  }, <span class=\"hljs-string\">'Action'</span>)\n});"},"load_more":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Load More Component</span>\n\nm.component(vhxm.components.shared.load_more.ui.container, {\n  <span class=\"hljs-attr\">config</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">el</span>) </span>{\n    <span class=\"hljs-comment\">// mithril config for post render actions</span>\n  },\n  <span class=\"hljs-attr\">action</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">callback</span>) </span>{\n    <span class=\"hljs-comment\">// action to perform when load_more el is clicked or</span>\n    <span class=\"hljs-comment\">// (optionally) scrolled into viewport</span>\n    callback();\n  },\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">''</span>, <span class=\"hljs-comment\">// string</span>\n  <span class=\"hljs-comment\">// by default load_more el text is 'Show More', but can be modified via</span>\n  <span class=\"hljs-comment\">// this option</span>\n  onscroll: <span class=\"hljs-literal\">true</span> <span class=\"hljs-comment\">// boolean</span>\n  <span class=\"hljs-comment\">// if true, action occurs when load_more el is scrolled into viewport;</span>\n  <span class=\"hljs-comment\">// if false, user must click load_more el to trigger action</span>\n});\n"},"modal":{"language":"javascript","template":"m.component(vhxm.components.shared.modal.ui.container, {\n  <span class=\"hljs-attr\">hasActions</span>: <span class=\"hljs-number\">1</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">'large'</span>,\n  <span class=\"hljs-attr\">content</span>: {\n    <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Modal A'</span>,\n    <span class=\"hljs-attr\">body</span>: {\n      <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n        <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'p.text--gray'</span>, <span class=\"hljs-string\">'Modal with one action.'</span>);\n      }\n    }\n  },\n  <span class=\"hljs-attr\">actions</span>: {\n    <span class=\"hljs-attr\">singleCallback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'Single callback fired'</span>);\n    },\n    <span class=\"hljs-attr\">leftCallback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'Left callback fired.'</span>);\n    },\n    <span class=\"hljs-attr\">rightCallback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'Right callback fired.'</span>);\n    }\n  }\n});"},"radio":{"language":"javascript","template":"<span class=\"hljs-comment\">// horizontal gray radio</span>\nm.component(vhxm.components.shared.radio.ui.container, {\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">'gray'</span>,\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'horz-gray'</span>,\n  <span class=\"hljs-attr\">items</span>: [\n    {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'This'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'this'</span>,\n      <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>\n    },\n    {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'That'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'that'</span>\n    }\n  ]\n});\n\n<span class=\"hljs-comment\">// stacked teal radio</span>\nm.component(vhxm.components.shared.radio.ui.container, {\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">'teal'</span>,\n  <span class=\"hljs-attr\">stacked</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'horz-teal'</span>,\n  <span class=\"hljs-attr\">items</span>: [\n    {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'Here'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'here'</span>,\n      <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>\n    },\n    {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'There'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'there'</span>\n    }\n  ]\n});\n\n<span class=\"hljs-comment\">// stacked teal button</span>\nm.component(vhxm.components.shared.radio.ui.container, {\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">'teal'</span>,\n  <span class=\"hljs-attr\">buttons</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'stacked-button'</span>,\n  <span class=\"hljs-attr\">items</span>: [\n    {\n      <span class=\"hljs-comment\">// no descriptor</span>\n      label: <span class=\"hljs-string\">'Choice A'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'a'</span>,\n      <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>\n    },\n    {\n      <span class=\"hljs-comment\">// title and descriptor</span>\n      label: {\n        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Choice B'</span>,\n        <span class=\"hljs-attr\">descriptor</span>: <span class=\"hljs-string\">'Descriptor'</span>\n      },\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'b'</span>\n    }\n  ]\n});"},"search_input":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Search Input Component</span>\n\nm.component(vhxm.components.shared.search_input.ui.container, {\n  <span class=\"hljs-attr\">config</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">el</span>) </span>{\n    <span class=\"hljs-comment\">// mithril config for post render actions</span>\n  },\n  <span class=\"hljs-attr\">search</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">query, callback</span>) </span>{\n    <span class=\"hljs-comment\">// method for search ajax request</span>\n    <span class=\"hljs-comment\">// passes a query (the search term)</span>\n    <span class=\"hljs-comment\">// and callback param</span>\n  },\n  <span class=\"hljs-attr\">callback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data</span>) </span>{\n    <span class=\"hljs-comment\">// callback fires when called</span>\n    <span class=\"hljs-comment\">// via the callback param above</span>\n    <span class=\"hljs-comment\">// passes back data from search request</span>\n  },\n  <span class=\"hljs-attr\">placeholder</span>: <span class=\"hljs-string\">'Search'</span>,\n  <span class=\"hljs-attr\">oninput</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-comment\">// input event handler</span>\n  }\n});"},"select":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Select Component</span>\n\nm.component(vhxm.components.shared.select.ui.container, {\n  <span class=\"hljs-attr\">search</span>: mySearch(query, callback),\n  <span class=\"hljs-attr\">placeholder</span>: <span class=\"hljs-string\">'Select Option...'</span>,\n  <span class=\"hljs-attr\">selected</span>: [\n    {\n      <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">1</span>,\n      <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Title'</span>\n    }\n  ],\n  <span class=\"hljs-attr\">items</span>: vhxm.models.section.items,\n  <span class=\"hljs-attr\">prop_map</span>: {\n    <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'id'</span>,\n    <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'title'</span>,\n    <span class=\"hljs-attr\">descriptor</span>: <span class=\"hljs-string\">'details'</span>\n  },\n  <span class=\"hljs-attr\">callback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">obj</span>) </span>{\n    vhxm.models.section.chosen_item = { <span class=\"hljs-attr\">id</span>: obj.value };\n  }\n});\n\n"},"sidebar":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Sidebar Component</span>\n\nm.component(vhxm.components.shared.sidebar.ui.container, {\n  <span class=\"hljs-attr\">loadedState</span>: vhxm.models.customers().single,\n  <span class=\"hljs-attr\">template</span>: vhxm.customers.sidebar.ui.container,\n  <span class=\"hljs-attr\">onClose</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    m.route(<span class=\"hljs-string\">'/admin/customers'</span>);\n  },\n  <span class=\"hljs-attr\">onInit</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    vhxm.components.shared.sidebar.toggle(<span class=\"hljs-string\">'open'</span>);\n    vhxm.models.retrieveCustomer(m.route.param(<span class=\"hljs-string\">'id'</span>));\n  }\n});\n"},"sizes":{"language":"javascript","template":"<span class=\"hljs-comment\">// Size State API</span>\n\nvhxm.components.shared.size.state.media();\nvhxm.components.shared.size.state.mediumUp();\nvhxm.components.shared.size.state.largeUp();\nvhxm.components.shared.size.state.smallOnly();\nvhxm.components.shared.size.state.smallToMedium();\nvhxm.components.shared.size.state.mediumOnly();\nvhxm.components.shared.size.state.smediumOnly();\nvhxm.components.shared.size.state.largeOnly();"},"tag":{"language":"javascript","template":"m.component(vhxm.components.shared.tag.ui.container, {\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'My Series: Complete Series Package'</span>,\n  <span class=\"hljs-attr\">label_length</span>: <span class=\"hljs-number\">20</span>,\n  <span class=\"hljs-attr\">isProcessing</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{},\n  <span class=\"hljs-attr\">onShow</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'show something'</span>);\n  },\n  <span class=\"hljs-attr\">onRemove</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'remove something'</span>);\n  }\n});"}};'use strict';

_.max = function (array) {
  return Math.max.apply(Math, array);
};'use strict';

Q.layouts.standard.ui.container = {
  view: function view() {
    var sidebar = void 0;
    if (m.route.param('type') === 'js' && m.route.param('guide') === 'components') {
      sidebar = m.component(vhxm.components.shared.sidebar.ui.container);
    }

    return m('div.fill-width.margin-reset.container', [sidebar ? sidebar : '', Q.components.route[m.route.param('type')].ui[m.route.param('guide')].items.map(function (item) {
      return m('div.row' + (item.hash ? '#' + item.hash : ''), [m('div.column.small-8.padding-reset', [m('section.guide-bar', [m.component(item.guide)])]), m('div.column.small-8.padding-reset', [m('section.code-bar', [item.code ? m('pre.padding-medium', [m('code.hljs.' + item.code.language, m.trust(item.code.template))]) : ''])])]);
    })]);
  }
};
'use strict';

Q.components.shared.block.ui.container = {
  view: function view(ctrl, opts) {
    return m('div.margin-vert-large', [m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', m.trust(opts.title)), opts.description ? m('div.text-contain.text-2', m.trust(opts.description)) : '', opts.component ? m.component(opts.component) : '']);
  }
};'use strict';

Q.components.shared.intro.ui.container = {
  view: function view(ctrl, opts) {
    return m('header', [opts.title ? m('h3.head-3.head--navy.text--bold', opts.title) : '', opts.intro ? m('div.margin-vert-large', [m('.margin-bottom-medium.text-2', m.trust(opts.intro))]) : '']);
  }
};'use strict';

Q.components.shared.options.ui.container = {
  view: function view(ctrl, opts) {
    return m('div.margin-vert-large', [m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', 'Options'), m('table.table.table--ticks.table--striped.margin-bottom-large', [m('thead', [m('tr', [m('th.text-left.small-5', 'Name'), m('th.text-left.small-11', 'Description')])]), m('tbody', [opts.options.map(function (item) {
      return m('tr', [m('td.text-left', [m('p.text--navy.margin-bottom-xsmall', item.name), m('p.text-4', [item.required ? m('span.text--red', 'required ') : item.type === 'method' ? '' : m('span.text--yellow', 'optional ')]), m('p.text-4', [item.type ? m('span', item.type) : '', item.type && item.default_value ? ', ' : '', item.default_value ? m('span', 'default is ' + item.default_value) : ''])]), m('td.text-left', item.description)]);
    })])])]);
  }
}; // for route /styleguide
Q.components.route.styleguide.ui.all = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.avatars.container),
    code: Q.code.avatars,
    hash: 'avatars'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.borders.container),
    code: Q.code.borders,
    hash: 'borders'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.buttons.container),
    code: Q.code.buttons,
    hash: 'buttons'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.charts.container),
    code: Q.code.charts,
    hash: 'charts'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_core.container),
    code: Q.code['colors-core'],
    hash: 'colors'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_brand.container),
    code: Q.code['colors-brand']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_external.container),
    code: Q.code['colors-external']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_tools.container),
    code: Q.code['colors-tools']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.forms.container),
    code: Q.code.forms,
    hash: 'forms'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.checkbox.container),
    code: Q.code['checkbox-ruby']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.radio.container),
    code: Q.code['radio-ruby']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.grid.container),
    code: Q.code.grid,
    hash: 'grid'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.icons_styles.container),
    code: Q.code['icon-styles'],
    hash: 'icons'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.icons_names.container),
    code: Q.code['icon-names']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.images.container),
    code: Q.code.images,
    hash: 'media'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.loaders.container),
    code: Q.code.loaders,
    hash: 'loaders'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.display.container),
    code: Q.code.display,
    hash: 'display'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.spacing_sizes.container),
    code: Q.code['spacing-sizes'],
    hash: 'spacing'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.spacing_positions.container),
    code: Q.code['spacing-positions']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.tables.container),
    code: Q.code.tables,
    hash: 'tables'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.tooltips.container),
    code: Q.code.tooltips,
    hash: 'tooltips'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.headers.container),
    code: Q.code.headers,
    hash: 'typography'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.text.container),
    code: Q.code.text,
    hash: 'typography'
  }]
};
// for route /js/mithril
Q.components.route.js.ui.mithril = {
  items: [{
    guide: m.component(Q.components.guide.js.ui.mithril_intro.container),
    code: Q.code['mithril-intro']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_folders.container),
    code: Q.code['mithril-folders']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_order.container),
    code: Q.code['mithril-order']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_scope.container),
    code: Q.code['mithril-scope']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_layouts.container),
    code: Q.code['mithril-layouts']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_components.container),
    code: Q.code['mithril-components']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_models.container),
    code: Q.code['mithril-models']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_requests.container),
    code: Q.code['mithril-requests']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_api.container),
    code: Q.code['mithril-api']
  }]
}; // for route /js/components
Q.components.route.js.ui.components = {
  items: [{
    guide: m.component(Q.components.guide.js.ui.checkbox.container),
    code: Q.code.checkbox
  }, {
    guide: m.component(Q.components.guide.js.ui.radio.container),
    code: Q.code.radio
  }, {
    guide: m.component(Q.components.guide.js.ui.select.container),
    code: Q.code.select
  }, {
    guide: m.component(Q.components.guide.js.ui.header.container),
    code: Q.code.header
  }, {
    guide: m.component(Q.components.guide.js.ui.avatar.container),
    code: Q.code.avatar
  }, {
    guide: m.component(Q.components.guide.js.ui.load_more.container),
    code: Q.code.load_more
  }, {
    guide: m.component(Q.components.guide.js.ui.tag.container),
    code: Q.code.tag
  }, {
    guide: m.component(Q.components.guide.js.ui.autosuggest.container),
    code: Q.code.autosuggest
  }, {
    guide: m.component(Q.components.guide.js.ui.filter.container),
    code: Q.code.filter
  }, {
    guide: m.component(Q.components.guide.js.ui.search_input.container),
    code: Q.code.search_input
  }, {
    guide: m.component(Q.components.guide.js.ui.sidebar.container),
    code: Q.code.sidebar
  }, {
    guide: m.component(Q.components.guide.js.ui.modal.container),
    code: Q.code.modal
  }, {
    guide: m.component(Q.components.guide.js.ui.sizes.container),
    code: Q.code.sizes
  }]
};
'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('quartz'), '/', {
  '/:type/:guide': Q.layouts.standard.ui.container
});