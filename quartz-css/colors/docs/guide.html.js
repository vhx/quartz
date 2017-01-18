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