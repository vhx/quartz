Q.components.guide.js.ui.header = {};
Q.components.guide.js.ui.header.container = {
  view: function(ctrl) {
    return m('section#guide--component-header', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Header',
        intro: 'This is a section header'
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'title', description: 'string, section title' },
          { name: 'icon', description: 'string, section icon class name' },
          { name: 'description', description: 'string, section subtitle/description' },
          { name: 'buttons', description: 'mithril component, has section actions on right-side of header' }
        ]
      }),
      m.component(vhxm.components.shared.header.ui.container, {
        title: 'Section Title Here',
        icon: 'product',
        description: 'This should be a concise summary of what this section does',
        buttons: m('a.btn-teal', {
          href: '#'
        }, 'Action Here')
      })
    ]);
  }
};

