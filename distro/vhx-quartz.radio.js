vhxm.components.shared.radio.ui.container = {
  view: function(ctrl, opts) {
    return m('form.form', [
      m('ul.radio-' + (opts.color ? opts.color : 'teal') + (opts.stacked ? '.radio--stacked' : ''), [
        opts.items.map(function(item, index) {
          return m('li', [
            m('input', {
              id: opts.name + '-' + index,
              type: 'radio',
              name: opts.name,
              value: item.value,
              checked: item.checked ? item.checked : null
            }),
            m('label', {
              for: opts.name + '-' + index,
            }, [
              m('span.radio--icon', [
                m('i.circle-top', [
                  m('span')
                ]),
                m('i.circle-bottom', [
                  m('span')
                ])
              ]),
              m('span.radio--label', item.label)
            ])
          ]);
        })
      ])
    ]);
  }
};