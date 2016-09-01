Q.components.guide.js.ui.modal = {};
Q.components.guide.js.ui.modal.container = {
  view: function(ctrl) {
    return m('section#guide--component-modal', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Modal',
        intro: 'An overlay/popup component for confirmation dialogs, information purposes, etc.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.modal.ui.container, {
                size: 'large',
                onOpen: function() {
                  console.log('opened');
                },
                onClose: function() {
                  console.log('closed');
                },
                actions: {
                  singleCallback: function() {
                    window.alert('Single callback fired');
                  },
                  leftCallback: function() {
                    window.alert('Left callback fired.');
                  },
                  rightCallback: function() {
                    window.alert('Right callback fired.');
                  }
                }
              }),
              m('button.block.margin-bottom-medium.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.modal.setTo({
                    hasActions: 1,
                    content: {
                      title: 'Modal A',
                      body: {
                        view: function() {
                          return m('p.text--gray', 'Modal with one action.');
                        }
                      }
                    }
                  });

                  vhxm.components.shared.modal.open();
                }
              }, 'Open modal (single action)'),
              m('button.block.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.modal.setTo({
                    hasActions: 2,
                    content: {
                      title: 'Modal B',
                      body: {
                        view: function() {
                          return m('p.text--gray', 'Modal with two actions.');
                        }
                      }
                    }
                  });

                  vhxm.components.shared.modal.open();
                }
              }, 'Open modal (two actions)'),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'size', type: 'string', default_value: 'medium', description: m.trust('The size of the modal, either <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">medium</span>, or <span class="text--bold text--navy text-4">large</span>') },
          { name: 'hasActions', type: 'integer', default_value: 2, description: m.trust('The number of actions (buttons at the bottom of the modal). Specifiy <span class="text--bold text--navy text-4">0</span> or <span class="text--bold text--navy text-4">false</span> will show now actions. Specifying <span class="text--bold text--navy text-4">1</span> will show one teal button. Specifiy <span class="text--bold text--navy text-4">2</span> or more will show one gray and one teal button (side-by-side).') },
          { name: 'content.title', type: 'string', default_value: 'null', description: m.trust('The title of the modal to appear at the top with a full width border underneath.') },
          { name: 'content.body', type: 'component', required: true, description: m.trust('The body of the modal. This options is required, and must be a mithril component.') },
          { name: 'actions.single', type: 'string', default_value: 'OK', description: m.trust('Single action button label.') },
          { name: 'actions.singleCallback', type: 'function', default_value: 'null', description: m.trust('Callback method fired when clicking a single action button.') },
          { name: 'actions.left', type: 'string', default_value: 'Cancel', description: m.trust('Left action button label.') },
          { name: 'actions.leftCallback', type: 'function', default_value: 'null', description: m.trust('Callback method fired when clicking the left action button.') },
          { name: 'actions.right', type: 'string', default_value: 'OK', description: m.trust('Right action button label.') },
          { name: 'actions.rightCallback', type: 'function', default_value: 'null', description: m.trust('Callback method fired when clicking the right action button.') },
          { name: 'onOpen', type: 'function', default_value: 'null', description: m.trust('Fired when the modal opens.') },
          { name: 'onClose', type: 'function', default_value: 'null', description: m.trust('Fired when the modal closes.') },
          { name: 'open', type: 'method', description: m.trust('Opens the modal. Call directly on modal object <span class="text--bold text--navy text-4">vhxm.components.shared.modal.open()</span>.') },
          { name: 'close', type: 'method', description: m.trust('Closes the modal. Call directly on modal object <span class="text--bold text--navy text-4">vhxm.components.shared.modal.close()</span>.') },
          { name: 'setTo', type: 'method', description: m.trust('Sets the options of the modal. Any of the options listed above can be set. Call directly on modal object <span class="text--bold text--navy text-4">vhxm.components.shared.modal.setTo()</span>.') },
        ]
      })
    ]);
  }
};