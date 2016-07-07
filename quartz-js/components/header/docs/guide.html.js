Q.components.guide.js.ui.header = {};
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

