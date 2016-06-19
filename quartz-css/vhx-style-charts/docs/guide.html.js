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
};