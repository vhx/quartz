'use strict';

Q.components.shared.options.ui.container = {
  view: function(ctrl, opts) {
    return m('div.margin-vert-large', [
      m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', 'Options'),
      m('table.table.table--ticks.table--striped.margin-bottom-large', [
        m('thead', [
          m('tr', [
            m('th.text-left.small-5', 'Name'),
            m('th.text-left.small-11', 'Description')
          ])
        ]),
        m('tbody', [
          opts.options.map(function(item) {
            return m('tr', [
              m('td.text-left', [
                m('p.text--navy.margin-bottom-xsmall', item.name),
                m('p.text-4', [
                  item.required ? m('span.text--red', 'required ') : m('span.text--yellow', 'optional ')
                ]),
                m('p.text-4', [
                  item.type ? m('span', item.type) : '',
                  item.type && item.default_value ? ', ' : '',
                  item.default_value ? m('span', 'default is ' + item.default_value) : ''
                ])
              ]),
              m('td.text-left', item.description)
            ]);
          })
        ])
      ])
    ]);
  }
};