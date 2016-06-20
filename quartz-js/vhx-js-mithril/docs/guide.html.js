Q.components.guide.js.ui.mithril_intro = {};
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
};