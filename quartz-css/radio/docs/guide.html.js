Q.components.guide.styleguide.ui.radio = {};

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
