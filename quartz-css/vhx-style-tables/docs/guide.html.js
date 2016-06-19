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
                    m('td.text-right', '$5.99')
                    m('td', 'Human')
                  ]),
                  m('tr', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50')
                    m('td', 'Cat')
                  ]),
                  m('tr', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00')
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
                    m('td.text-right', '$5.99')
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50')
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00')
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
                    m('td.text-right', '$5.99')
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50')
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00')
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
                    m('td.text-right', '$5.99')
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50')
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00')
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
              m('table.table.table--ticks.table--striped.table--small.table--truncate.margin-bottom-large', [
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
                    m('td.text-right', '$5.99')
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50')
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00')
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
        description: 'Tables cells/column can make use our alignment classes (<code>text-right</code>, <code>text-left</code>, <code>text-center</code>) as well as our grid system column sizing (e.g. <code>small-8</code>, <code>medium-4</code> etc).',
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
                    m('td.text-right', '$5.99')
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50')
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00')
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
                    }, 'Date ' + m('span.table-row-arrow'))
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '324'),
                    m('td', 'human@vhx.tv'),
                    m('td.text-right', '$5.99')
                    m('td', 'Human')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '41'),
                    m('td', 'cat@vhx.tv'),
                    m('td.text-right', '$7.50')
                    m('td', 'Cat')
                  ]),
                  m('tr.is-clickable', [
                    m('td.text-right', '8'),
                    m('td', 'dog@vhx.tv'),
                    m('td.text-right', '$6.00')
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

