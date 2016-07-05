m.component(vhxm.components.shared.header.ui.container, {
  title: 'Section Title',
  icon: 'product',
  description: 'This should be a concise summary of what this section does',
  buttons: m('a.btn-teal', {
    href: '#'
  }, 'Action')
});
vhxm.components.shared.header.ui.container = {
  view: function(ctrl, data) {
    return m('header.row.padding-bottom-medium.border-bottom', [
      m('.column.small-16.medium-8.large-10', [
        m('.media', [
          m('.media-unit.text-top', [
            m('i.icon.icon--large.icon-' + data.icon)
          ]),
          m('.media-unit.media-fill.padding-left-medium', [
            m('h2.head-3', data.title),
            m('p.text.primary.small-margin-bottom-small', (data.description ? data.description : ''))
          ])
        ])
      ]),
      m('.column.small-16.medium-8.large-6.text-right', (data.buttons ? data.buttons : ''))
    ]);
  }
};

