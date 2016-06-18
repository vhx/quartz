Q.components.guide.styleguide.ui.icons_styles = {};
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
};