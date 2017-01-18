Q.components.guide.styleguide.ui.borders = {};

Q.components.guide.styleguide.ui.borders.container = {
  view: function(ctrl) {
    return m('section#guide--style-borders', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Borders'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Positions w/ Default Color',
        component: {
          view: function() {
            return m('div', [
              m('span.square.square--medium.border.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Border All')
                )
              ),
              m('span.square.square--medium.border-vert.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Border Vert.')
                )
              ),
              m('span.square.square--medium.border-horz.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Border Horz.')
                )
              ),
              m('span.square.square--medium.border-top.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Top')
                )
              ),
              m('span.square.square--medium.border-bottom.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Bottom')
                )
              ),
              m('span.square.square--medium.border-left.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Left')
                )
              ),
              m('span.square.square--medium.border-right.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Right')
                )
              ),
              m('span.inline.border-center.text-gray.text--small.padding-large',
                m('strong.bg-white.padding-medium', 'Center')
              )
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Colors',
        component: {
          view: function() {
            return m('div', [
              m('span.square.square--medium.border.border--gray.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Default Gray')
                )
              ),
              m('span.square.square--medium.border.border--gray-light.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Light Gray')
                )
              ),
              m('span.square.square--medium.border.border--navy.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Navy')
                )
              ),
              m('span.inline.bg-grid-dark.padding-small.margin-right-medium.margin-bottom-medium',
                m('span.square.square--medium.border.border--white',
                  m('span.square-tag.text-gray.text--small',
                    m('strong', 'White')
                  )
                )
              ),
              m('span.inline.bg-grid-dark.padding-small.margin-right-medium.margin-bottom-medium',
                m('span.square.square--medium.border.border--white-transparent',
                  m('span.square-tag.text-gray.text--small',
                    m('strong', 'White 50%')
                  )
                )
              )
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Other Modifiers',
        component: {
          view: function() {
            return m('div', [
              m('span.square.square--medium.border.border--thick.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Thick')
                )
              ),
              m('span.square.square--medium.border.border--radius.margin-right-medium.margin-bottom-medium',
                m('span.square-tag.text-gray.text--small',
                  m('strong', 'Radius')
                )
              )
            ]);
          }
        }
      })
    ]);
  }
};