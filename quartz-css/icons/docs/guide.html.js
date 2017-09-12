Q.components.guide.styleguide.ui.icons_styles = {};
Q.components.guide.styleguide.ui.icons_names = {};

Q.components.guide.styleguide.ui.icons_styles.container = {
  view: function(ctrl) {
    return m('section#guide--style-icons', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Icons'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Sizes',
        component: {
          view: function() {
            return m('div', [
              m('ul.margin-top-large.small-block-grid-6.text-left', [
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'xxsmall'),
                    m('i.icon.icon--xxsmall.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'xsmall'),
                    m('i.icon.icon--xsmall.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'small'),
                    m('i.icon.icon--small.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'medium'),
                    m('i.icon.icon--medium.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'large'),
                    m('i.icon.icon--large.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'xlarge'),
                    m('i.icon.icon--xlarge.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'xxlarge'),
                    m('i.icon.icon--xxlarge.icon-add-member')
                  ]
                )
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Colors',
        component: {
          view: function() {
            return m('div', [
              m('ul.margin-top-large.small-block-grid-6.text-left', [
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'multi'),
                    m('i.icon.icon--xlarge.icon-add-member')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'teal'),
                    m('i.icon.icon--xlarge.icon-add-member-teal')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'navy'),
                    m('i.icon.icon--xlarge.icon-add-member-navy')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'gray'),
                    m('i.icon.icon--xlarge.icon-add-member-gray')
                  ]
                ),
                m('li.margin-bottom-medium', [
                    m('h4.text--gray.text--small', 'white'),
                    m('span.inline.bg-grid-dark',
                      m('i.icon.icon--xlarge.icon-add-member-white')
                    )
                  ]
                )
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Text',
        component: {
          view: function() {
            return m('div', [
              m('ul.no-bullet.text-left.margin-vert-large', [
                m('li.margin-bottom-medium', [
                  m('p.text-3.icon--left.icon--xxsmall.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-3.icon--left.icon--xsmall.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-2.icon--left.icon--small.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-2.icon--left.icon--medium.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-1.icon--left.icon--large.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('p.text-1.icon--left.icon--xlarge.icon-product.margin-bottom-medium', 'Text w/ Icon'),
                  m('div', m('p.text-3.icon--right.icon--xxsmall.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-3.icon--right.icon--xsmall.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-2.icon--right.icon--small.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-2.icon--right.icon--medium.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-1.icon--right.icon--large.icon-product.margin-bottom-medium', 'Text w/ Icon')),
                  m('div', m('p.text-1.icon--right.icon--xlarge.icon-product.margin-bottom-medium', 'Text w/ Icon'))
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Headers',
        component: {
          view: function() {
            return m('div', [
              m('ul.no-bullet.text-left.margin-vert-large', [
                m('li.margin-bottom-medium', [
                  m('h1.head-5.icon--left.icon--xxsmall.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-5.icon--left.icon--xsmall.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-4.icon--left.icon--small.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-3.icon--left.icon--medium.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-2.icon--left.icon--large.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('h1.head-1.icon--left.icon--xlarge.icon-product.margin-bottom-medium', 'Header w/ Icon'),
                  m('div', m('h1.head-5.icon--right.icon--xxsmall.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-5.icon--right.icon--xsmall.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-4.icon--right.icon--small.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-3.icon--right.icon--medium.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-2.icon--right.icon--large.icon-product.margin-bottom-medium', 'Header w/ Icon')),
                  m('div', m('h1.head-1.icon--right.icon--xlarge.icon-product.margin-bottom-medium', 'Header w/ Icon'))
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Circles',
        component: {
          view: function() {
            return m('div.margin-top-xlarge', [
              m('ul.margin-top-large.no-bullet.text-center.row', [
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'xxsmall'),
                  m('i.icon-circle.icon--xxsmall.icon-upload-vimeo')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'xsmall'),
                  m('i.icon-circle.icon--xsmall.icon-upload-vimeo')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'small'),
                  m('i.icon-circle.icon--small.icon-upload-vimeo')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'medium'),
                  m('i.icon-circle.icon--medium.icon-upload-vimeo')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'large'),
                  m('i.icon-circle.icon--large.icon-upload-vimeo')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray margin-bottom-small text--small', 'xlarge'),
                  m('i.icon-circle.icon--xlarge.icon-upload-vimeo')
                ])
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Dots',
        component: {
          view: function() {
            return m('div.margin-top-xlarge', [

              m('ul.margin-top-large.no-bullet.text-center.row', [
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'small'),
                  m('i.icon-dot.icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'medium'),
                  m('i.icon-dot.icon--medium')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'large'),
                  m('i.icon-dot.icon--large')
                ])
              ]),
              m('ul.margin-top-large.no-bullet.text-center.row', [
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'teal'),
                  m('i.icon-dot.icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'gray'),
                  m('i.icon-dot.icon-dot--gray icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'navy'),
                  m('i.icon-dot.icon-dot--navy icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'yellow'),
                  m('i.icon-dot.icon-dot--yellow icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'green'),
                  m('i.icon-dot.icon-dot--green icon--small')
                ]),
                m('li.margin-bottom-medium.margin-right-medium.pull', [
                  m('h4.text--gray.margin-bottom-small.text--small', 'red'),
                  m('i.icon-dot.icon-dot--red icon--small')
                ])
              ])
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
