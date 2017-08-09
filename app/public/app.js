'use strict';

window.Q = {
  components: {
    route: {
      styleguide: { ui: {} },
      js: { ui: {} }
    },
    shared: {
      intro: { ui: {} },
      block: { ui: {} },
      options: { ui: {} }
    },
    guide: {
      styleguide: {
        ui: {}
      },
      js: {
        ui: {}
      }
    }
  },
  layouts: {
    standard: {
      ui: {}
    }
  }
};;Q.components.guide.js.ui.mithril_intro = {};
Q.components.guide.js.ui.mithril_intro.container = {
  view: function(ctrl) {
    return m('section#guide--style-header', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Mithril',
        intro: '<p class="margin-bottom-medium text-2">Mithril is our frontend framework of choice. It is a tiny framework (only 7kb gzipped) with no dependencies, has a small focused API, and virtual DOM diffing (like React). It was created by <a href="https://github.com/lhorie">Leo Horie</a>. For more info see <a href="http://mithril.js.org">http://mithril.js.org</a>.</p>' +
               '<p class="margin-bottom-medium text-2">Mithril is designed so you can use as little or as much of the framework as you need. It allows a lot of flexiblity in how you organize your application. In this light, we\'ve established some conventions for how to setup Mithril projects. Read below for details.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_folders = {};
Q.components.guide.js.ui.mithril_folders.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '1. Folder Structure',
        description: '<p class="margin-bottom-medium text-2">In order to organize our Mithril application files in a consistent manner, setup your application directory as shown. Substitute with the unique components in your application. Arbitrary components (<code class="text--yellow">sidebar</code> and <code class="text--yellow">table</code>) and layouts (<code class="text--yellow">index</code> and <code class="text--yellow">edit</code>) are shown as examples.</p>' +
                     '<p class="margin-bottom-medium text-2">Be sure to make the files <code class="text--yellow">ui</code>, <code class="text--yellow">state</code>, <code class="text--yellow">controller</code>, and <code class="text--yellow">constants</code> for each component/layout. See the next sections for definitions of what each of the parts of a component are.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_order = {};
Q.components.guide.js.ui.mithril_order.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '2. File Order',
        description: '<p class="margin-bottom-medium text-2">When setting up your application manifest, be sure to include your app scripts in the order shown to ensure proper initialization.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_scope = {};
Q.components.guide.js.ui.mithril_scope.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '3. Namespace ( <code class="text--yellow">scope.js</code> )',
        description: '<p class="margin-bottom-medium text-2">To both avoid polluting the global namespace and for providing an organized way to keep our Mithril code in one place we use the <code class="text--yellow">vhxm</code> namespace. All components, layouts, and models live within the <code class="text--yellow">vhxm</code> object.</p>' +
                     '<p class="margin-bottom-medium text-2">The <code class="text--yellow">vhxm</code> object should be setup in a <code class="text--yellow">scope.js</code> file. Here you establish a broad overview/map by defining the high-level components of your application.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_layouts = {};
Q.components.guide.js.ui.mithril_layouts.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '4. Layouts',
        description: '<p class="margin-bottom-medium text-2">Layouts are just Mithril Components that we use as our top level components, initiated in our routes and that contain all other components.</p>' +
                     '<p class="margin-bottom-medium text-2">They aren\'t any different than other components in their structure, but we name and put them under the layouts object for organizational purposes.</p>' +
                     '<p class="margin-bottom-medium text-2">In Mithril, a component is an object that has at the very least a view method that returns a Mithril Virtual DOM tree (via <code class="text--yellow">m()</code>). Components are the building blocks of a Mithril application. You can include sub components in a component by using Mithril\'s <code class="text--yellow">m.component()</code> method.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_components = {};
Q.components.guide.js.ui.mithril_components.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-folders', [
      m.component(Q.components.shared.block.ui.container, {
        title: '5. Components',
        description: '<p class="margin-bottom-medium text-2">We divide up each of a component\'s parts into different files to keep our files as lean as possible. These parts are:</p>',
        component: {
          view: function() {
            return m('ul', [
              m('li.margin-bottom-medium', [
                m('h4.text--navy', 'state'),
                m('code.text--italic.margin-bottom-small', 'component_name.state.js'),
                m('p', m.trust('An object of Mithril reactive properties (<code class="text--yellow">m.prop()</code>) for keeping track of a components UI State.'))
              ]),
              m('li.margin-bottom-medium', [
                m('h4.text--navy', 'constants'),
                m('code.text--italic.margin-bottom-small', 'component_name.constants.js'),
                m('p', m.trust('An object of static strings, arrays, or objects for static content (such has copy).'))
              ]),
              m('li.margin-bottom-medium', [
                m('h4.text--navy', 'controller'),
                m('code.text--italic.margin-bottom-small', 'component_name.controller.js'),
                m('p', m.trust('A component can also have an optional controller function. This function is run once when a component is rendered. It can be used to provide helper methods, event handler methods, and model calls for the component.'))
              ]),
              m('li.margin-bottom-medium', [
                m('h4.text--navy', 'ui'),
                m('code.text--italic.margin-bottom-small', 'component_name.ui.js'),
                m('p', m.trust('The view layer of the component, found in a component\'s view method. It must return either a virtual DOM element (<code class="text--yellow">m()</code>) or another component (<code class="text--yellow">m.component()</code>).'))
              ])
            ]);
          }
        }
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_models = {};
Q.components.guide.js.ui.mithril_models.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-models', [
      m.component(Q.components.shared.block.ui.container, {
        title: '6. Models',
        description: '<p class="margin-bottom-medium text-2">Our models are our source of truth. It is the canonical data we get from the backend (typically our Public or Internal API). Our models contain both our data objects as well as methods that can be called from our controllers for listing, retrieving, updating, creating, or deleting data.</p>' +
                     '<p class="margin-bottom-medium text-2">We utilize Mithril\'s <code class="text--yellow">m.prop()</code> method to create all our model properties. This method creates a reactive getter/setter property. We set a property by calling the method and passing a value. We get a property\'s value by calling its method without a value (see example to the right).</p>' +
                     '<p class="margin-bottom-medium text-2">To setup our models we put everything under our <code class="text--yellow">vhxm.models</code> namespace. We define our model so it correlates with our data model, ensuring we also have methods for working with our model objects. See below for making api/ajax requests.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_requests = {};
Q.components.guide.js.ui.mithril_requests.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-requests', [
      m.component(Q.components.shared.block.ui.container, {
        title: '7. Requests',
        description: '<p class="margin-bottom-medium text-2">To integrate your models with a backend endpoint, you can use Mithril\'s <code class="text--yellow">request</code> method. Any headers that need to be set (e.g. for authorization, content type, etc) can be done by using the request\'s <code class="text--yellow">config</code> property as shown to the right.</p>' +
                     '<p class="margin-bottom-medium text-2">We handle the response using Mithril\'s chained <code class="text--yellow">then</code> method, which has two callbacks. The first is a function for a successful response, and the second is for an error.</p>' +
                     '<p class="margin-bottom-medium text-2">Upon receiving the response, we iterate over each property ensuring each model property is reactive using a helper method (<code class="text--yellow">)vhxm.models.populate</code>.</p>' +
                     '<p class="margin-bottom-medium text-2">For convenience, when working with the VHX Public API, you can use our <code class="text--yellow">VHX.Request</code> class for making API calls.</p>'
      })
    ]);
  }
};

Q.components.guide.js.ui.mithril_api = {};
Q.components.guide.js.ui.mithril_api.container = {
  view: function(ctrl) {
    return m('section#guide--js-mithril-requests', [
      m.component(Q.components.shared.block.ui.container, {
        title: '8. Api Integration',
        description: '<p class="margin-bottom-medium text-2">For convenience, when working with the VHX Public API, you can also use our <code class="text--yellow">VHX.Request</code> class for making API calls. This class was built using Mithril\'s built-in methods listed above. Authorization, error handling, populating the model, and caching are all handled for you automatically.</p>'
      })
    ]);
  }
};Q.components.guide.js.ui.autosuggest = {};
Q.components.guide.js.ui.autosuggest.container = {
  view: function(ctrl) {
    return m('section#guide--component-autosuggest', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Auto-suggest',
        intro: ''
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.autosuggest.ui.container, {
                data: m.prop(['This', 'That', 'Those', 'Some', 'More', 'Left', 'Right']),
                focusonready: false,
                reset: m.prop(false),
                onselect: function(selected) {},
                name: 'auto_suggest',
                placeholder: 'Enter name'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', type: 'string', required: true, description: m.trust('A unique key used as the name of the input field') },
          { name: 'data', type: 'm.prop', required: true, description: m.trust('A mithril prop (<span class="text--navy text--bold text-4">m.prop()</span>) containing an array of autosuggest items (words, phrases, etc).') },
          { name: 'focusonready', type: 'boolean', default_value: 'false', description: m.trust('If the input field should be focused on first render (e.g. say when the auto-suggest field is in a modal)') },
          { name: 'reset', type: 'm.prop', default_value: 'null', description: m.trust('A mithril prop (<span class="text--navy text--bold text-4">m.prop()</span>) that forces a reset of the selected value on the next render.') },
          { name: 'onselect', type: 'function', default_value: 'null', description: m.trust('An event handler that fires when an auto-suggest item is selected. The handler returns one argument, the <span class="text--navy text--bold text-4">name</span> of the selected item.') },
          { name: 'placeholder', type: 'string', default_value: 'null', description: m.trust('Input placeholder text to display.') }
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.avatar = {};
Q.components.guide.js.ui.avatar.container = {
  view: function(ctrl) {
    return m('section#guide--component-avatar', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Avatar',
        intro: 'User avatar.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div', [
              m('span.inline.padding-right-small', [
                m.component(vhxm.components.shared.avatar.ui, {
                  size: 'small',
                })
              ]),
              m('span.inline.padding-right-small', [
                m.component(vhxm.components.shared.avatar.ui, {
                  size: 'medium',
                  image: 'https://secure.gravatar.com/avatar/74b978ed4f10e05a6c2898c4f5516189.png',
                })
              ]),
              m('span.inline.padding-right-small', [
                m.component(vhxm.components.shared.avatar.ui, {
                  size: 'large',
                  image: 'https://secure.gravatar.com/avatar/460c13d4904dc7f889f00d2cd4c3e6e8.png',
                })
              ]),
              m('span.inline.padding-right-small', [
                m.component(vhxm.components.shared.avatar.ui, {
                  size: 'xlarge',
                  image: 'https://vhx.imgix.net/assets/1f843fdc-34da-4302-bd4f-06e5bd7ef2c3/IMG_7891.GIF'
                })
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'image', type: 'string', default_value: null, description: 'A url referencing an avatar image for the user.' },
          { name: 'size', type: 'string', default_value: 'medium', description: m.trust('The size of the avatar. Can be <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">medium</span>, <span class="text--bold text--navy text-4">large</span> or <span class="text--bold text--navy text-4">xlarge</span>.') }
        ]
      })
    ]);
  }
};
Q.components.guide.js.ui.checkbox = {};
Q.components.guide.js.ui.checkbox.container = {
  view: function(ctrl) {
    return m('section#guide--component-checkbox', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Checkbox',
        intro: 'The Checkbox component can be used for either a standard checkbox or toggle style checkbox in various sizes.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div.form', [
              m('.row', [
                m('.column.small-thirds', [
                  m.component(vhxm.components.shared.checkbox.ui.container, {
                    name: 'standard',
                    checked: true,
                    size: 'small',
                    label: 'Can you lift at least 50 pounds?'
                  })
                ]),
                m('.column.small-thirds', [
                  m.component(vhxm.components.shared.checkbox.ui.container, {
                    name: 'standard',
                    checked: true,
                    size: 'medium',
                    label: 'My preferred mode of transportation is an airplane'
                  })
                ]),
                m('.column.small-thirds', [
                  m.component(vhxm.components.shared.checkbox.ui.container, {
                    name: 'standard',
                    checked: true,
                    size: 'medium',
                    label: 'Label'
                  })
                ])
              ]),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'standard',
                checked: true,
                size: 'large',
                label: 'Label'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'toggle-large',
                type: 'toggle',
                checked: true,
                size: 'small'
              }),
              m.component(vhxm.components.shared.checkbox.ui.container, {
                name: 'toggle-medium',
                type: 'toggle',
                checked: true,
                size: 'medium'
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', type: 'string', required: true, description: m.trust('A unique name for the checkbox used for the input name as well as the id + for attr pairing to ensure the checkbox works properly.') },
          { name: 'type', type: 'string', default_value: 'standard', description: m.trust('The type of the checkbox style. Either <span class="text--bold text--navy text-4">standard</span> (the default style if type is not provided), or <span class="text--bold text--navy text-4">toggle</span>.') },
          { name: 'value', type: 'string', default_value: 'null', description: m.trust('The value of the checkbox (if checked).') },
          { name: 'checked', type: 'boolean', default_value: 'false', description: m.trust('The starting state of the checkbox, either checked (<span class="text--bold text--navy text-4">true</span>) or unchecked (<span class="text--bold text--navy text-4">false</span>).') },
          { name: 'size', type: 'string', default_value: 'medium', description: m.trust('The size of the checkbox. Can be <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">medium</span>, <span class="text--bold text--navy text-4">large</span> for <span class="text-4">type=standard</span> and <span class="text--bold text--navy text-4">small</span> and <span class="text--bold text--navy text-4">medium</span> for <span class="text-4">type=toggle</span>.') }
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.filter = {};
Q.components.guide.js.ui.filter.container = {
  view: function(ctrl) {
    return m('section#guide--component-filter', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Filter',
        intro: 'The Filter component can be use for sections that require ways to request smaller subsets of content for a given resource. An example is our Customers section where we have a table of customers. You may want to only see customers from a specific location, or who purchased a specific product.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.filter.ui.container, {
                api: m.prop(),
                label: 'Customize',
                filtersStartOpen: true,
                filterHandler: function() {
                },
                filters: [
                  {
                    type: 'location',
                    title: 'Location',
                    data: m.prop([
                      { value: 'US', label: 'United States', checked: false },
                      { value: 'AF', label: 'Afghanistan', checked: false },
                      { value: 'AX', label: 'Aland Islands', checked: false },
                      { value: 'AL', label: 'Albania', checked: false },
                      { value: 'DZ', label: 'Algeria', checked: false },
                      { value: 'AS', label: 'American Samoa', checked: false },
                      { value: 'AD', label: 'Andorra', checked: false },
                      { value: 'AO', label: 'Angola', checked: false },
                      { value: 'AI', label: 'Anguilla', checked: false },
                      { value: 'AQ', label: 'Antarctica', checked: false },
                      { value: 'AG', label: 'Antigua and Barbuda', checked: false },
                      { value: 'AR', label: 'Argentina', checked: false },
                      { value: 'AM', label: 'Armenia', checked: false },
                      { value: 'AW', label: 'Aruba', checked: false },
                      { value: 'AU', label: 'Australia', checked: false },
                      { value: 'AT', label: 'Austria', checked: false },
                      { value: 'AZ', label: 'Azerbaijan', checked: false }
                    ])
                  }
                ]
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'filters', type: 'array', required: true, description: m.trust('An array of filters to include. Each filter must be of a different type. Strings for predefined filters (<span class="text--bold text--navy text-4">no predefined filters availabe yet</span>) or objects for custom filters. Custom filters must have the properties <span class="text--bold text--navy text-4">title</span>, <span class="text--bold text--navy text-4">type</span>, and either <span class="text--bold text--navy text-4">template</span> (a Mithril view function) or <span class="text--bold text--navy text-4">data</span> (an array of objects). Each item in a <span class="text--bold text--navy text-4">data</span> array custom filter, must have a <span class="text-4 text--bold text--navy">label</span>, <span class="text-4 text--bold text--navy">value</span>, and optional <span class="text-4 text--bold text--navy">checked</span> property.') },
          { name: 'size', type: 'string', default_value: 'large', description: 'The size (applies to the width) of the filter component.' },
          { name: 'label', type: 'string', default_value: 'null', description: 'A label to appear to the right of the filter, that shows when no filters are selected.' },
          { name: 'filterHandler', type: 'function', default_value: 'null', description: m.trust('A handler that is fired when a filter has been applied, either from hitting the <span class="text--italic">Apply</span> button or when removing a filter. The callback has one argument, <span class="text--bold text--navy text-4">filters</span>, an array of the current selected filters.') },
          { name: 'api', type: 'variable', default_value: 'null', description: m.trust('A reference variable that will make available the reactive <span class="text--bold text--navy text-4">state</span> and <span class="text--bold text--navy text-4">model</span> of the component. In addition, two methods are available — <span class="text--bold text--navy text-4">addFilter</span> and <span class="text--bold text--navy text-4">removeFilter</span> — for adding and removing filters with your custom filters.') }
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.header = {};
Q.components.guide.js.ui.header.container = {
  view: function(ctrl) {
    return m('section#guide--component-header', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Header',
        intro: 'This is a section header'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.header.ui.container, {
                title: 'Section Title',
                icon: 'product',
                description: 'A concise summary of this section',
                buttons: m('a.btn-teal', {
                  href: '#'
                }, 'Action')
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'title', type: 'string', required: true, description: 'The section title.' },
          { name: 'icon', type: 'string', required: true, description: 'Section icon class name.' },
          { name: 'border', type: 'boleean', default_value: 'true', description: 'Option to show a border at the bottom of the header.' },
          { name: 'description', type: 'string', default_value: 'null', description: 'The section subtitle or description.' },
          { name: 'buttons', type: 'component', default_value: 'null', description: 'A Mithril component that fills the space on on the right-side of header (i.e. action buttons).' }
        ]
      })
    ]);
  }
};

Q.components.guide.js.ui.load_more = {};
Q.components.guide.js.ui.load_more.container = {
  view: function(ctrl) {
    return m('section#guide--search_input', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Load More',
        intro: 'An element mainly for paginated data. When scrolled into viewport, or clicked on, triggers a user-defined function.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function(ctrl, opts) {
            return m('div', [
              m.component(vhxm.components.shared.load_more.ui.container, {
                onscroll: false,
                action: function(callback) {
                  alert('Load More!');
                  setTimeout(function() {
                    callback();
                    m.redraw();
                  }, 1000);
                }
              })
            ]);
          }
        }
      })
    ]);
  }
};Q.components.guide.js.ui.modal = {};
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
};Q.components.guide.js.ui.radio = {};
Q.components.guide.js.ui.radio.container = {
  view: function(ctrl) {
    return m('section#guide--component-radio', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Radio',
        intro: 'The Radio component is a stylized version of the the standard HTML form element. A stacked or horizontal (side-by-side) layout can be used.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Examples',
        component: {
          view: function() {
            return m('div.form', [
              m.component(vhxm.components.shared.radio.ui.container, {
                color: 'gray',
                name: 'horz-gray',
                items: [
                  {
                    label: 'Option A',
                    value: 'a',
                    checked: true
                  },
                  {
                    label: 'Option B',
                    value: 'b'
                  }
                ]
              }),
              m('div.margin-vert-medium', [
                m.component(vhxm.components.shared.radio.ui.container, {
                  color: 'teal',
                  name: 'stacked-teal',
                  stacked: true,
                  items: [
                    {
                      label: 'Choice A',
                      value: 'a',
                      checked: true
                    },
                    {
                      label: 'Choice B',
                      value: 'b'
                    }
                  ]
                })
              ]),
              m('div.margin-vert-medium', [
                m.component(vhxm.components.shared.radio.ui.container, {
                  color: 'teal',
                  buttons: true,
                  name: 'stacked-button',
                  items: [
                    {
                      label: 'Choice A',
                      value: 'a',
                      checked: true
                    },
                    {
                      label: {
                        title: 'Choice B',
                        descriptor: 'Descriptor'
                      },
                      value: 'b'
                    }
                  ]
                })
              ])
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'name', required: true, type: 'string', description: m.trust('A unique name for the checkbox used for the input name as well as the id + for attr pairing to ensure the radio works properly.') },
          { name: 'items', type: 'array', required: true, description: m.trust('An array of objects for each radio item. Object must have a <span class="text--navy text--bold text-4">label</span> and <span class="text--navy text--bold text-4">value</span> properties. The <span class="text--navy text--bold text-4">checked</span> and <span class="text--navy text--bold text-4">template</span> properties are optional.') },
          { name: 'onchange', type: 'function', default_value: null, description: m.trust('Callback fired when the the radio value changes.') },
          { name: 'stacked', type: 'boolean', default_value: 'false', description: m.trust('Whether the radio elements are stacked vertically. Defaults to <span class="text--bold text--navy text-4">false</span> (horizontal layout).') },
          { name: 'color', type: 'string', default_value: 'teal', description: m.trust('The color of the radio buttons. Either <span class="text--navy text--bold text-4">teal</span> or <span class="text--navy text--bold text-4">gray</span>.') },
          { name: 'checkedByDefault', type: 'boolean', default_value: 'true', description: m.trust('Dictates whether a radio should be set as checked by default or not') },
          { name: 'api', type: 'Mithril prop', default_value: 'null', description: m.trust('When set, surfaces direct access to internal component state') },
        ]
      })
    ]);
  }
};
Q.components.guide.js.ui.search_input = {};
Q.components.guide.js.ui.search_input.container = {
  view: function(ctrl) {
    return m('section#guide--search_input', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Search Input',
        intro: 'A text input for submitting a query and handling results. Initially created for usage within the select component.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div.form', [
              m.component(vhxm.components.shared.search_input.ui.container, {
                config: function(el) { },
                queryParam: true,
                callback: ctrl.searchCallback,
                search: function() { },
                placeholder: 'Search',
                oninput: function() { }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'search', type: 'function', required: true, description: m.trust('A request function for handling query submission (debounced at 300ms). Parameters available are <span class="text--bold text--navy text-4">query</span> and <span class="text--bold text--navy text-4">callback</span>.') },
          { name: 'config', type: 'function', default_value: 'null', description: 'Populates Mithril config attribute, which is called after element gets created.' },
          { name: 'placeholder', type: 'string', default_value: 'Search', description: 'Option to set the input\'s placeholder.' },
          { name: 'oninput', type: 'function', default_value: 'null', description: 'Event handler fired immediately on field input.' },
          { name: 'callback', type: 'function', default_value: 'null', description: 'A callback function that runs once fired from within the search request (above).' }
        ]
      })
    ]);
  }
};Q.components.guide.js.ui.select = {};
Q.components.guide.js.ui.select.container = {
  view: function(ctrl) {
    return m('section#guide--component-filter', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Select',
        intro: 'A select dropdown with an option for built-in ajax search.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                placeholder: 'Select Option...',
                selected: null,
                position: m.prop('top'),
                caret: 'center',
                items: m.prop([
                  {
                    id: 1,
                    title: 'Item #1'
                  },
                  {
                    id: 2,
                    title: 'Item #2'
                  }
                ]),
                remove: 'Remove Trailer',
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id'
                },
                onSelect: function(data) {}
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example (w/ search)',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                search: function(query, callback) {
                  callback([
                    {
                      id: 3,
                      title: 'Item #3',
                      detail: 'Descriptor',
                    }
                  ]);
                },
                placeholder: 'Nothing selected',
                selected: null,
                caret: 'right',
                items: m.prop([
                  {
                    id: 1,
                    title: 'Item #1',
                    detail: 'Descriptor',
                  },
                  {
                    id: 2,
                    title: 'Item #2',
                    detail: 'Descriptor',
                  }
                ]),
                api: m.prop(),
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id',
                  descriptor: 'detail'
                },
                onSelect: function(data) {}
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example (w/ search, custom trigger, multi-select & media)',
        component: {
          view: function() {
            return m('div', [
              m.component(vhxm.components.shared.select.ui.container, {
                trigger: m('a', { href: '#', }, '+ Add Video'),
                search: function(query, callback) {
                  callback([
                    {
                      id: 3,
                      title: 'Media Item #3',
                      detail: 'Search Reesult',
                      img_src: 'https://placekitten.com/g/300/200'
                    }
                  ]);
                },
                caret: 'left',
                multiselect: true,
                type: 'media',
                placeholder: 'Nothing selected',
                selected: null,
                action: 'Create new category',
                label_length: 40,
                items: m.prop([
                  {
                    id: 1,
                    title: 'Media Item #1: The First Media Item Listed',
                    detail: 'Item detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 2,
                    title: 'Media Item #2: Numero Dos',
                    detail: 'Item #2 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 3,
                    title: 'Media Item #3',
                    detail: 'Item #3 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 4,
                    title: 'Media Item #4',
                    detail: 'Item #4 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 5,
                    title: 'Media Item #5',
                    detail: 'Item #5 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  },
                  {
                    id: 6,
                    title: 'Media Item #6',
                    detail: 'Item #6 detail line',
                    img_src: 'https://placekitten.com/g/300/200'
                  }
                ]),
                api: m.prop(),
                prop_map: {
                  key: 'title',
                  label: 'title',
                  value: 'id',
                  descriptor: 'detail',
                  image: 'img_src'
                },
                caret_position: 'left',
                onAction: function(done) {
                  setTimeout(function() {
                    window.alert('Create callback');
                    done();
                  }, 1000);
                },
                onSelect: function() {}
              }),
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'items', type: 'm.prop', required: true, description: m.trust('A mithril prop (m.prop()) containing an array of objects to populate options. Each object must map to the defined <span class="text--bold text--navy text-4">prop_map.label</span> and <span class="text--bold text--navy text-4">prop_map.value</span>.') },
          { name: 'type', type: 'string', default_value: 'standard', description: m.trust('Sets UI of the items in the dropdown list. Either <span class="text--bold text--navy text-4">standard</span> OR <span class="text--bold text--navy text-4">media</span>. The default is <span class="text--bold text--navy text-4">standard</span>.') },
          { name: 'color', type: 'string', default_value: 'gray', description: m.trust('The color of the dropdown button. Can be <span class="text--bold text--navy text-4">gray</span>, <span class="text--bold text--navy text-4">white</span>, or <span class="text--bold text--navy text-4">teal</span>') },
          { name: 'multiselect', type: 'boolean', required: false, default_value: 'false', description: 'Set whether the dropdown allows for selected multiple values.' },
          { name: 'action', type: 'boolean', default_value: 'false', description: 'Whether to show an action button or not, at the bottom of the dropdown. If turned on, it will appear upon typing a value in the search input.' },
          { name: 'trigger', type: 'mithril element', default_value: 'null', required: false, description: 'Trigger element that will replace default button dropdown' },
          { name: 'onSelect', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called after an option is chosen.' },
          { name: 'onAction', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called after the action button is clicked.' },
          { name: 'onClose', type: 'function', required: false, default_value: 'null', description: 'Callback function that is called when the select dropdown closes.' },
          { name: 'isProcessing', type: 'prop', required: false, default_value: '[]', description: 'An array of values for any items that are in a processing state. Add or remove values to trigger the processing state of an item.' },
          { name: 'selected', type: 'array', required: false, default_value: 'null', description: 'Array that contains a 1 or more objects with selected values for initializing the dropdown pre-selected. Each object should have a label and value property (as defined in the prop_map).' },
          { name: 'placeholder', type: 'string', required: false, default_value: 'Select...', description: 'Text displayed in dropdown when no option is selected' },
          { name: 'caret', type: 'string', default_value: 'right', description: m.trust('Specify the position of the caret. Either <span class="text--bold text--navy text-4">left</span>, <span class="text--bold text--navy text-4">center</span>, or <span class="text--bold text--navy text-4">right</span>.') },
          { name: 'offset', type: 'integer', default_value: '40', description: m.trust('Specify the offset of the dropdown from the trigger.') },
          { name: 'position', type: 'prop', default_value: 'bottom', description: m.trust('Specify the position of the dropdown. Either <span class="text--bold text--navy text-4">top</span> or <span class="text--bold text--navy text-4">bottom</span>.') },
          { name: 'label_length', type: 'integer', default_value: '0 (unlimited)', description: m.trust('(Media Item only) Length of string to truncate after.') },
          { name: 'prop_map.key', type: 'string', required: true, description: 'The unique identifier (key) for each item selected (the selected object). The selected object will be returned in the onSelect callback method.' },
          { name: 'prop_map.value', type: 'string', required: true, description: 'Item key to look for in the provided items for the item value.' },
          { name: 'prop_map.label', type: 'string', required: true, description: 'Item key to look for in the provided items to display a label.' },
          { name: 'prop_map.search', type: 'boolean', default_value: 'false', description: 'Toggles inclusion of search input.' },
          { name: 'prop_map.image', type: 'string', default_value: 'null', description: m.trust('Item key to display an image for each item when using type <span class="text--bold text--navy text-4">media</span>.') },
          { name: 'prop_map.descriptor', type: 'string', default_value: 'null', description: 'Item key to display a descriptor for each item.' },
        ]
      })
    ]);
  }
};
Q.components.guide.js.ui.sidebar = {};
Q.components.guide.js.ui.sidebar.container = {
  view: function(ctrl) {
    return m('section#guide--component-sidebar', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Sidebar',
        intro: 'A sidebar which slides out and contains content.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m('button.block.margin-bottom-medium.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.sidebar.setTemplate({
                    view: function() {
                      return m('h5.text-center.padding-medium.head-4', 'Sidebar');
                    }
                  });
                  vhxm.components.shared.sidebar.setLoadedState(m.prop(false));
                  vhxm.components.shared.sidebar.toggle('open');
                }
              }, 'Open sidebar (loading)'),
              m('button.block.btn-white', {
                onclick: function(event) {
                  event.preventDefault();
                  vhxm.components.shared.sidebar.setTemplate({
                    view: function() {
                      return m('h5.text-center.padding-medium.head-4', 'Sidebar');
                    }
                  });
                  vhxm.components.shared.sidebar.setLoadedState(m.prop(true));
                  vhxm.components.shared.sidebar.toggle('open');
                }
              }, 'Open sidebar (loaded)')
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'loadedState', type: 'function', description: 'Pass this a mithril prop (e.g. a model) that tracks the loaded state of the sidebar. If none is passed, a loader will be displayed.' },
          { name: 'template', type: 'function', description: 'Pass this a component, which is then rendered within the sidebar.' },
          { name: 'onOpen', type: 'function', description: 'Takes a callback function called once the sidebar has been opened.' },
          { name: 'onClose', type: 'function', description: 'Takes a callback function called once the sidebar has been closed.' },
          { name: 'clickBlackList', type: 'string', description: 'A string of comma separated classes or ids of elements that should be ignored when clicked (that would otherwise close the sidebar).' },
          { name: 'toggle', type: 'method', description: m.trust('Call directly on sidebar object <span class="text--bold text--navy text-4">vhxm.components.shared.sidebar.toggle()</span>. Accepts two params- the first being "open" or "closed" and the next being the subsequent route.') },
        ]
      })
    ]);
  }
};
Q.components.guide.js.ui.sizes = {};
Q.components.guide.js.ui.sizes.container = {
  view: function(ctrl) {
    return m('section#guide--component-sizes', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Sizes',
        intro: 'Helper state component that gives a means of checking the current size of the view. This is useful for delivering different UI components based on the media size.'
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'media', type: 'method', description: m.trust('The current media (screen) size. Either <span class="text--bold text--navy text-4">small</span>, <span class="text--bold text--navy text-4">smedium</span>, <span class="text--bold text--navy text-4">medium</span>, or <span class="text--bold text--navy text-4">large</span>') },
          { name: 'smallOnly', type: 'method', description: m.trust('The screen size is 40em (640px) or less.') },
          { name: 'smallToMedium', type: 'method', description: m.trust('The screen size is 64em (1024px) or less.') },
          { name: 'smediumOnly', type: 'method', description: m.trust('The screen size is between 40.063em (641px) and 54em (864px)') },
          { name: 'mediumOnly', type: 'method', description: m.trust('The screen size is between 40.063em (641px) and 64em (1024px).') },
          { name: 'mediumUp', type: 'method', description: m.trust('The screen size is 40.063em (641px) or greater.') },
          { name: 'largeOnly', type: 'method', description: m.trust('The screen size is between 64.063em (1025px) and 90em (1440px)') },
          { name: 'largeUp', type: 'method', description: m.trust('The screen size is 64.063em (1025px) or greater.') }
        ]
      })
    ]);
  }
};Q.fun = m.prop(false);
Q.components.guide.js.ui.tag = {};
Q.components.guide.js.ui.tag.container = {
  view: function(ctrl) {
    return m('section#guide--component-tag', [
      m.component(Q.components.shared.intro.ui.container, {
        title: 'Tags',
        intro: 'Tags or applied filters, having the appearance of a button but give you a hover state with a remove action.'
      }),
      m.component(Q.components.shared.block.ui.container, {
        title: 'Example',
        component: {
          view: function() {
            return m('div', [
              m('.margin-right-medium.left',
                m.component(vhxm.components.shared.tag.ui.container, {
                  label: 'My Series: Complete Series Package',
                  label_length: 20,
                  isProcessing: Q.fun,
                  onShow: function() {
                    window.alert('show something');
                  },
                  onRemove: function() {
                    window.alert('remove something');
                  }
                })
              ),
              m.component(vhxm.components.shared.tag.ui.container, {
                label: 'Episode 1',
                isProcessing: Q.fun,
                onShow: function() {
                  window.alert('show something');
                },
                onRemove: function() {
                  window.alert('remove something');
                }
              })
            ]);
          }
        }
      }),
      m.component(Q.components.shared.options.ui.container, {
        options: [
          { name: 'label', type: 'string', default_value: 'Tag', description: m.trust('Text label of tag.') },
          { name: 'label_length', type: 'integer', default_value: '0 (unlimited)', description: m.trust('Length of string to truncate after.') },
          { name: 'isProcessing', type: 'prop', required: false, default_value: 'false', description: 'Whether or not in a processing state. Requires redraw upon changing.' },
          { name: 'onShow', type: 'function', default_value: 'null', description: m.trust('Fired when the tag is clicked.') },
          { name: 'onRemove', type: 'function', default_value: 'null', description: m.trust('Fired when the remove action is clicked.') },
        ]
      })
    ]);
  }
};
;;Q.code={"mithril-api":{"language":"javascript","template":"<span class=\"hljs-comment\">//--api integration--</span>\n\nvhxm.models.collections = {\n  <span class=\"hljs-attr\">list</span>: m.prop(<span class=\"hljs-literal\">null</span>)\n};\n\nm.initApi(<span class=\"hljs-string\">'collections'</span>);\n\nvhxm.models.listCollections = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  app.api.list({}, vhxm.models.collections.list, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-comment\">// callback</span>\n  });\n};"},"mithril-components":{"language":"javascript","template":"<span class=\"hljs-comment\">//--sidebar.state.js--</span>\n\nvhxm.components.sidebar.state = {\n  <span class=\"hljs-attr\">isOpen</span>: m.prop(<span class=\"hljs-literal\">false</span>),\n  <span class=\"hljs-attr\">isSaving</span>: m.prop(<span class=\"hljs-literal\">false</span>)\n};\n\n<span class=\"hljs-comment\">//--sidebar.constants.js--</span>\n\nvhxm.components.sidebar.constants = {\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'Title'</span>\n};\n\n<span class=\"hljs-comment\">//--sidebar.controller.js--</span>\n\n\nvhxm.components.sidebar.controller = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">var</span> self = <span class=\"hljs-keyword\">this</span>;\n\n  <span class=\"hljs-keyword\">this</span>.helpers = {\n    <span class=\"hljs-attr\">handleEvent</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      <span class=\"hljs-comment\">// handle event (arbitrary example)</span>\n      vhxm.models.collections.saveDoc();\n    }\n  };\n};\n\n<span class=\"hljs-comment\">//--sidebar.ui.js--</span>\n\n\nvhxm.components.sidebar.ui = {\n  <span class=\"hljs-comment\">// sidebar parent component</span>\n  container: {\n    <span class=\"hljs-attr\">controller</span>: vhxm.components.sidebar.controller,\n    <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">ctrl</span>) </span>{\n      <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'div'</span>, [\n        m.component(vhxm.components.sidebar.ui.sub_component, { <span class=\"hljs-attr\">helpers</span>: ctrl.helpers }),\n        m(<span class=\"hljs-string\">'a'</span>, {\n          <span class=\"hljs-attr\">onclick</span>: ctrl.handleEvent\n        }, <span class=\"hljs-string\">'Save'</span>)\n      ]);\n    }\n  },\n  <span class=\"hljs-comment\">// sidebar sub-component</span>\n  sub_component: {\n    <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">ctrl, c</span>) </span>{\n      <span class=\"hljs-comment\">// c.helpers is available in any subcomponent</span>\n      <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'input'</span>, { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'title'</span> }, vhxm.components.sidebar.constants.label);\n    }\n  }\n};"},"mithril-folders":{"language":"markdown","template":"--Folder Structure--\n\n|—application\n  # scope.js\n  # models.js\n  # routes.js\n  |-layouts\n<span class=\"hljs-code\">    # layout.index.js</span>\n<span class=\"hljs-code\">    # layout.edit.js</span>\n  |-components\n<span class=\"hljs-code\">    |-sidebar</span>\n<span class=\"hljs-code\">      # sidebar.ui.js</span>\n<span class=\"hljs-code\">      # sidebar.state.js</span>\n<span class=\"hljs-code\">      # sidebar.controller.js</span>\n<span class=\"hljs-code\">      # sidebar.constants.js</span>\n<span class=\"hljs-code\">    |-table</span>\n<span class=\"hljs-code\">      # table.ui.js</span>\n<span class=\"hljs-code\">      # table.state.js</span>\n<span class=\"hljs-code\">      # table.controller.js</span>\n<span class=\"hljs-code\">      # table.constants.js</span>"},"mithril-intro":{"language":"x","template":"<section id=\"code--js_mithril_intro\" class=\"padding-medium text--white\">\n  <span class=\"logo-mithril\">○</span>\n</section>"},"mithril-layouts":{"language":"javascript","template":"<span class=\"hljs-comment\">//--Layouts--</span>\n\n<span class=\"hljs-comment\">// an empty layout with an empty div</span>\nvhxm.layouts.index = {\n  <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'div'</span>);\n  }\n};\n\n<span class=\"hljs-comment\">// a layout that includes child components</span>\nvhxm.layouts.index = {\n  <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'div'</span>, [\n      m.component(vhxm.components.table.container),\n      m.component(vhxm.components.sidebar.container)\n    ]);\n  }\n};"},"mithril-models":{"language":"javascript","template":"<span class=\"hljs-comment\">//--getting/setter--</span>\n\n<span class=\"hljs-comment\">// set to some default value on creation</span>\n<span class=\"hljs-keyword\">var</span> example = m.prop(<span class=\"hljs-string\">'default_value'</span>);\n\n<span class=\"hljs-comment\">// now you can get</span>\nexample();\n\n<span class=\"hljs-comment\">// or set</span>\nexample(<span class=\"hljs-string\">'new_value'</span>);\n\n\n<span class=\"hljs-comment\">//--simple example model--</span>\n\nvhxm.models.collections = {\n  <span class=\"hljs-attr\">list</span>: m.prop(<span class=\"hljs-literal\">null</span>),\n  <span class=\"hljs-attr\">doc</span>: m.prop(<span class=\"hljs-literal\">null</span>),\n  <span class=\"hljs-attr\">docItems</span>: m.prop(<span class=\"hljs-literal\">null</span>)\n};\n\nvhxm.models.listCollections = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-comment\">// retrieve listing from api/backend</span>\n  <span class=\"hljs-comment\">// and populate vhxm.models.collections.list()</span>\n};\nvhxm.models.retrieveCollection = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-comment\">// retrieve doc from api/backend</span>\n  <span class=\"hljs-comment\">// and populate vhxm.models.collections.doc()</span>\n};\nvhxm.models.retrieveItems = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-comment\">// retrieve doc items from api/backend</span>\n  <span class=\"hljs-comment\">// and populate vhxm.models.collections.docItems()</span>\n};"},"mithril-order":{"language":"markdown","template":"--File order--\n\nscope.js\ncomponents/\nlayouts/\nmodels.js\nroutes.js"},"mithril-requests":{"language":"javascript","template":"<span class=\"hljs-comment\">//--requests--</span>\n\n<span class=\"hljs-comment\">// config for setting headers</span>\nvhxm.models.config = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">request</span>) </span>{\n  request.setRequestHeader(<span class=\"hljs-string\">'Authorization'</span>, <span class=\"hljs-string\">'Bearer '</span> + TOKEN);\n};\n\n<span class=\"hljs-comment\">// handle errors</span>\nvhxm.models.handleError = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">error</span>) </span>{};\n\n<span class=\"hljs-comment\">// populate model on successful response</span>\nvhxm.models.populate = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data, model</span>) </span>{\n  $.each(data, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">key, item</span>) </span>{\n    data[key] = m.prop(item);\n  });\n\n  model(data);\n});\n\n<span class=\"hljs-comment\">// using the above in a model method</span>\nvhxm.models.listCollections = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  m.request({\n    <span class=\"hljs-attr\">method</span>: <span class=\"hljs-string\">'GET'</span>,\n    <span class=\"hljs-attr\">url</span>: <span class=\"hljs-string\">'http://apia.vhx.tv/collections'</span>,\n    <span class=\"hljs-attr\">config</span>: vhxm.models.config\n  }).then(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data</span>) </span>{\n    vhxm.models.populate(data, vhxm.models.collections().list);\n  }, vhxm.models.handleError);\n};"},"mithril-scope":{"language":"javascript","template":"<span class=\"hljs-comment\">// --scope.js--</span>\n\n<span class=\"hljs-keyword\">var</span> vhxm = {\n  <span class=\"hljs-attr\">models</span>: {},\n  <span class=\"hljs-attr\">layouts</span>: {\n    <span class=\"hljs-attr\">index</span>: {},\n    <span class=\"hljs-attr\">edit</span>: {}\n  },\n  <span class=\"hljs-attr\">components</span>: {\n    <span class=\"hljs-attr\">sidebar</span>: {},\n    <span class=\"hljs-attr\">table</span>: {},\n    <span class=\"hljs-attr\">header</span>: {}\n  }\n};"},"autosuggest":{"language":"javascript","template":"m.component(vhxm.components.shared.autosuggest.ui.container, {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'auto_suggest'</span>,\n  <span class=\"hljs-attr\">placeholder</span>: <span class=\"hljs-string\">'Enter name'</span>,\n  <span class=\"hljs-attr\">data</span>: m.prop([<span class=\"hljs-string\">'This'</span>, <span class=\"hljs-string\">'That'</span>, <span class=\"hljs-string\">'Those'</span>, <span class=\"hljs-string\">'Some'</span>, <span class=\"hljs-string\">'More'</span>, <span class=\"hljs-string\">'Left'</span>, <span class=\"hljs-string\">'Right'</span>]),\n  <span class=\"hljs-attr\">focusonready</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">reset</span>: m.prop(<span class=\"hljs-literal\">false</span>),\n  <span class=\"hljs-attr\">onselect</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">selected</span>) </span>{\n    <span class=\"hljs-comment\">// handle event</span>\n  }\n});"},"avatar":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Avatar Component</span>\n\nm.component(vhxm.components.shared.avatar.ui, {\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">'medium'</span>,\n  <span class=\"hljs-attr\">image</span>: <span class=\"hljs-string\">'https://secure.gravatar.com/avatar/image.png'</span>,\n});"},"checkbox":{"language":"javascript","template":"<span class=\"hljs-comment\">// standard checkbox</span>\nm.component(vhxm.components.shared.checkbox.ui.container, {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'standard'</span>,\n  <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">'medium'</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'Label'</span>\n});\n\n<span class=\"hljs-comment\">// toggle checkbox</span>\nm.component(vhxm.components.shared.checkbox.ui.container, {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'toggle'</span>,\n  <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'toggle'</span>,\n  <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">'medium'</span>\n});"},"filter":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Filter Component</span>\n\nm.component(vhxm.components.shared.filter.container, {\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'Customize this table'</span>,\n  <span class=\"hljs-attr\">api</span>: vhxm.component.name.state.filterApi,\n  <span class=\"hljs-attr\">filters</span>: [\n    <span class=\"hljs-string\">'date'</span>,\n    <span class=\"hljs-string\">'location'</span>,\n    {\n      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'test'</span>,\n      <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Test'</span>,\n      <span class=\"hljs-attr\">template</span>: {\n        <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n          <span class=\"hljs-comment\">// custom filter template</span>\n        }\n      }\n    }\n  ]\n});"},"header":{"language":"javascript","template":"m.component(vhxm.components.shared.header.ui.container, {\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Section Title'</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">'product'</span>,\n  <span class=\"hljs-attr\">description</span>: <span class=\"hljs-string\">'This should be a concise summary of what this section does'</span>,\n  <span class=\"hljs-attr\">buttons</span>: m(<span class=\"hljs-string\">'a.btn-teal'</span>, {\n    <span class=\"hljs-attr\">href</span>: <span class=\"hljs-string\">'#'</span>\n  }, <span class=\"hljs-string\">'Action'</span>)\n});"},"load_more":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Load More Component</span>\n\nm.component(vhxm.components.shared.load_more.ui.container, {\n  <span class=\"hljs-attr\">config</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">el</span>) </span>{\n    <span class=\"hljs-comment\">// mithril config for post render actions</span>\n  },\n  <span class=\"hljs-attr\">action</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">callback</span>) </span>{\n    <span class=\"hljs-comment\">// action to perform when load_more el is clicked or</span>\n    <span class=\"hljs-comment\">// (optionally) scrolled into viewport</span>\n    callback();\n  },\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">''</span>, <span class=\"hljs-comment\">// string</span>\n  <span class=\"hljs-comment\">// by default load_more el text is 'Show More', but can be modified via</span>\n  <span class=\"hljs-comment\">// this option</span>\n  onscroll: <span class=\"hljs-literal\">true</span> <span class=\"hljs-comment\">// boolean</span>\n  <span class=\"hljs-comment\">// if true, action occurs when load_more el is scrolled into viewport;</span>\n  <span class=\"hljs-comment\">// if false, user must click load_more el to trigger action</span>\n});\n"},"modal":{"language":"javascript","template":"m.component(vhxm.components.shared.modal.ui.container, {\n  <span class=\"hljs-attr\">hasActions</span>: <span class=\"hljs-number\">1</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">'large'</span>,\n  <span class=\"hljs-attr\">content</span>: {\n    <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Modal A'</span>,\n    <span class=\"hljs-attr\">body</span>: {\n      <span class=\"hljs-attr\">view</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n        <span class=\"hljs-keyword\">return</span> m(<span class=\"hljs-string\">'p.text--gray'</span>, <span class=\"hljs-string\">'Modal with one action.'</span>);\n      }\n    }\n  },\n  <span class=\"hljs-attr\">actions</span>: {\n    <span class=\"hljs-attr\">singleCallback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'Single callback fired'</span>);\n    },\n    <span class=\"hljs-attr\">leftCallback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'Left callback fired.'</span>);\n    },\n    <span class=\"hljs-attr\">rightCallback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n      <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'Right callback fired.'</span>);\n    }\n  }\n});"},"radio":{"language":"javascript","template":"<span class=\"hljs-comment\">// horizontal gray radio</span>\nm.component(vhxm.components.shared.radio.ui.container, {\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">'gray'</span>,\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'horz-gray'</span>,\n  <span class=\"hljs-attr\">items</span>: [\n    {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'This'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'this'</span>,\n      <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>\n    },\n    {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'That'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'that'</span>\n    }\n  ]\n});\n\n<span class=\"hljs-comment\">// stacked teal radio</span>\nm.component(vhxm.components.shared.radio.ui.container, {\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">'teal'</span>,\n  <span class=\"hljs-attr\">stacked</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'horz-teal'</span>,\n  <span class=\"hljs-attr\">items</span>: [\n    {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'Here'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'here'</span>,\n      <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>\n    },\n    {\n      <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'There'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'there'</span>\n    }\n  ]\n});\n\n<span class=\"hljs-comment\">// stacked teal button</span>\nm.component(vhxm.components.shared.radio.ui.container, {\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">'teal'</span>,\n  <span class=\"hljs-attr\">buttons</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'stacked-button'</span>,\n  <span class=\"hljs-attr\">items</span>: [\n    {\n      <span class=\"hljs-comment\">// no descriptor</span>\n      label: <span class=\"hljs-string\">'Choice A'</span>,\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'a'</span>,\n      <span class=\"hljs-attr\">checked</span>: <span class=\"hljs-literal\">true</span>\n    },\n    {\n      <span class=\"hljs-comment\">// title and descriptor</span>\n      label: {\n        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Choice B'</span>,\n        <span class=\"hljs-attr\">descriptor</span>: <span class=\"hljs-string\">'Descriptor'</span>\n      },\n      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'b'</span>\n    }\n  ]\n});"},"search_input":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Search Input Component</span>\n\nm.component(vhxm.components.shared.search_input.ui.container, {\n  <span class=\"hljs-attr\">config</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">el</span>) </span>{\n    <span class=\"hljs-comment\">// mithril config for post render actions</span>\n  },\n  <span class=\"hljs-attr\">search</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">query, callback</span>) </span>{\n    <span class=\"hljs-comment\">// method for search ajax request</span>\n    <span class=\"hljs-comment\">// passes a query (the search term)</span>\n    <span class=\"hljs-comment\">// and callback param</span>\n  },\n  <span class=\"hljs-attr\">callback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data</span>) </span>{\n    <span class=\"hljs-comment\">// callback fires when called</span>\n    <span class=\"hljs-comment\">// via the callback param above</span>\n    <span class=\"hljs-comment\">// passes back data from search request</span>\n  },\n  <span class=\"hljs-attr\">placeholder</span>: <span class=\"hljs-string\">'Search'</span>,\n  <span class=\"hljs-attr\">oninput</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-comment\">// input event handler</span>\n  }\n});"},"select":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Select Component</span>\n\nm.component(vhxm.components.shared.select.ui.container, {\n  <span class=\"hljs-attr\">search</span>: mySearch(query, callback),\n  <span class=\"hljs-attr\">placeholder</span>: <span class=\"hljs-string\">'Select Option...'</span>,\n  <span class=\"hljs-attr\">selected</span>: [\n    {\n      <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">1</span>,\n      <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Title'</span>\n    }\n  ],\n  <span class=\"hljs-attr\">items</span>: vhxm.models.section.items,\n  <span class=\"hljs-attr\">prop_map</span>: {\n    <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'id'</span>,\n    <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'title'</span>,\n    <span class=\"hljs-attr\">descriptor</span>: <span class=\"hljs-string\">'details'</span>\n  },\n  <span class=\"hljs-attr\">callback</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">obj</span>) </span>{\n    vhxm.models.section.chosen_item = { <span class=\"hljs-attr\">id</span>: obj.value };\n  }\n});\n\n"},"sidebar":{"language":"javascript","template":"<span class=\"hljs-comment\">// Example Sidebar Component</span>\n\nm.component(vhxm.components.shared.sidebar.ui.container, {\n  <span class=\"hljs-attr\">loadedState</span>: vhxm.models.customers().single,\n  <span class=\"hljs-attr\">template</span>: vhxm.customers.sidebar.ui.container,\n  <span class=\"hljs-attr\">onClose</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    m.route(<span class=\"hljs-string\">'/admin/customers'</span>);\n  },\n  <span class=\"hljs-attr\">onInit</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    vhxm.components.shared.sidebar.toggle(<span class=\"hljs-string\">'open'</span>);\n    vhxm.models.retrieveCustomer(m.route.param(<span class=\"hljs-string\">'id'</span>));\n  }\n});\n"},"sizes":{"language":"javascript","template":"<span class=\"hljs-comment\">// Size State API</span>\n\nvhxm.components.shared.size.state.media();\nvhxm.components.shared.size.state.mediumUp();\nvhxm.components.shared.size.state.largeUp();\nvhxm.components.shared.size.state.smallOnly();\nvhxm.components.shared.size.state.smallToMedium();\nvhxm.components.shared.size.state.mediumOnly();\nvhxm.components.shared.size.state.smediumOnly();\nvhxm.components.shared.size.state.largeOnly();"},"tag":{"language":"javascript","template":"m.component(vhxm.components.shared.tag.ui.container, {\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'My Series: Complete Series Package'</span>,\n  <span class=\"hljs-attr\">label_length</span>: <span class=\"hljs-number\">20</span>,\n  <span class=\"hljs-attr\">isProcessing</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{},\n  <span class=\"hljs-attr\">onShow</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'show something'</span>);\n  },\n  <span class=\"hljs-attr\">onRemove</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-built_in\">window</span>.alert(<span class=\"hljs-string\">'remove something'</span>);\n  }\n});"}};'use strict';

_.max = function (array) {
  return Math.max.apply(Math, array);
};'use strict';

Q.layouts.standard.ui.container = {
  view: function view() {
    var sidebar = void 0;
    if (m.route.param('type') === 'js' && m.route.param('guide') === 'components') {
      sidebar = m.component(vhxm.components.shared.sidebar.ui.container);
    }

    return m('div.fill-width.margin-reset.container', [sidebar ? sidebar : '', Q.components.route[m.route.param('type')].ui[m.route.param('guide')].items.map(function (item) {
      return m('div.row' + (item.hash ? '#' + item.hash : ''), [m('div.column.small-8.padding-reset', [m('section.guide-bar', [m.component(item.guide)])]), m('div.column.small-8.padding-reset', [m('section.code-bar', [item.code ? m('pre.padding-medium', [m('code.hljs.' + item.code.language, m.trust(item.code.template))]) : ''])])]);
    })]);
  }
};
'use strict';

Q.components.shared.block.ui.container = {
  view: function view(ctrl, opts) {
    return m('div.margin-vert-large', [m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', m.trust(opts.title)), opts.description ? m('div.text-contain.text-2', m.trust(opts.description)) : '', opts.component ? m.component(opts.component) : '']);
  }
};'use strict';

Q.components.shared.intro.ui.container = {
  view: function view(ctrl, opts) {
    return m('header', [opts.title ? m('h3.head-3.head--navy.text--bold', opts.title) : '', opts.intro ? m('div.margin-vert-large', [m('.margin-bottom-medium.text-2', m.trust(opts.intro))]) : '']);
  }
};'use strict';

Q.components.shared.options.ui.container = {
  view: function view(ctrl, opts) {
    return m('div.margin-vert-large', [m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', 'Options'), m('table.table.table--ticks.table--striped.margin-bottom-large', [m('thead', [m('tr', [m('th.text-left.small-5', 'Name'), m('th.text-left.small-11', 'Description')])]), m('tbody', [opts.options.map(function (item) {
      return m('tr', [m('td.text-left', [m('p.text--navy.margin-bottom-xsmall', item.name), m('p.text-4', [item.required ? m('span.text--red', 'required ') : item.type === 'method' ? '' : m('span.text--yellow', 'optional ')]), m('p.text-4', [item.type ? m('span', item.type) : '', item.type && item.default_value ? ', ' : '', item.default_value ? m('span', 'default is ' + item.default_value) : ''])]), m('td.text-left', item.description)]);
    })])])]);
  }
}; // for route /styleguide
Q.components.route.styleguide.ui.all = {
  items: [{
    guide: m.component(Q.components.guide.styleguide.ui.avatars.container),
    code: Q.code.avatars,
    hash: 'avatars'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.borders.container),
    code: Q.code.borders,
    hash: 'borders'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.buttons.container),
    code: Q.code.buttons,
    hash: 'buttons'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.charts.container),
    code: Q.code.charts,
    hash: 'charts'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_core.container),
    code: Q.code['colors-core'],
    hash: 'colors'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_brand.container),
    code: Q.code['colors-brand']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_external.container),
    code: Q.code['colors-external']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.colors_tools.container),
    code: Q.code['colors-tools']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.forms.container),
    code: Q.code.forms,
    hash: 'forms'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.checkbox.container),
    code: Q.code['checkbox-ruby']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.radio.container),
    code: Q.code['radio-ruby']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.grid.container),
    code: Q.code.grid,
    hash: 'grid'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.icons_styles.container),
    code: Q.code['icon-styles'],
    hash: 'icons'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.icons_names.container),
    code: Q.code['icon-names']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.images.container),
    code: Q.code.images,
    hash: 'media'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.loaders.container),
    code: Q.code.loaders,
    hash: 'loaders'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.display.container),
    code: Q.code.display,
    hash: 'display'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.spacing_sizes.container),
    code: Q.code['spacing-sizes'],
    hash: 'spacing'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.spacing_positions.container),
    code: Q.code['spacing-positions']
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.tables.container),
    code: Q.code.tables,
    hash: 'tables'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.tooltips.container),
    code: Q.code.tooltips,
    hash: 'tooltips'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.headers.container),
    code: Q.code.headers,
    hash: 'typography'
  }, {
    guide: m.component(Q.components.guide.styleguide.ui.text.container),
    code: Q.code.text,
    hash: 'typography'
  }]
};
// for route /js/mithril
Q.components.route.js.ui.mithril = {
  items: [{
    guide: m.component(Q.components.guide.js.ui.mithril_intro.container),
    code: Q.code['mithril-intro']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_folders.container),
    code: Q.code['mithril-folders']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_order.container),
    code: Q.code['mithril-order']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_scope.container),
    code: Q.code['mithril-scope']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_layouts.container),
    code: Q.code['mithril-layouts']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_components.container),
    code: Q.code['mithril-components']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_models.container),
    code: Q.code['mithril-models']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_requests.container),
    code: Q.code['mithril-requests']
  }, {
    guide: m.component(Q.components.guide.js.ui.mithril_api.container),
    code: Q.code['mithril-api']
  }]
}; // for route /js/components
Q.components.route.js.ui.components = {
  items: [{
    guide: m.component(Q.components.guide.js.ui.checkbox.container),
    code: Q.code.checkbox
  }, {
    guide: m.component(Q.components.guide.js.ui.radio.container),
    code: Q.code.radio
  }, {
    guide: m.component(Q.components.guide.js.ui.select.container),
    code: Q.code.select
  }, {
    guide: m.component(Q.components.guide.js.ui.header.container),
    code: Q.code.header
  }, {
    guide: m.component(Q.components.guide.js.ui.avatar.container),
    code: Q.code.avatar
  }, {
    guide: m.component(Q.components.guide.js.ui.load_more.container),
    code: Q.code.load_more
  }, {
    guide: m.component(Q.components.guide.js.ui.tag.container),
    code: Q.code.tag
  }, {
    guide: m.component(Q.components.guide.js.ui.autosuggest.container),
    code: Q.code.autosuggest
  }, {
    guide: m.component(Q.components.guide.js.ui.filter.container),
    code: Q.code.filter
  }, {
    guide: m.component(Q.components.guide.js.ui.search_input.container),
    code: Q.code.search_input
  }, {
    guide: m.component(Q.components.guide.js.ui.sidebar.container),
    code: Q.code.sidebar
  }, {
    guide: m.component(Q.components.guide.js.ui.modal.container),
    code: Q.code.modal
  }, {
    guide: m.component(Q.components.guide.js.ui.sizes.container),
    code: Q.code.sizes
  }]
};
'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('quartz'), '/', {
  '/:type/:guide': Q.layouts.standard.ui.container
});