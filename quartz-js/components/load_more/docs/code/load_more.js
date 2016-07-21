// Example Load More Component

m.component(vhxm.components.shared.load_more.ui.container, {
  config: function(el) {
    // mithril config for post render actions
  },
  action: function(callback) {
    // action to perform when load_more el is clicked or
    // (optionally) scrolled into viewport
    callback();
  },
  label: '', // string
  // by default load_more el text is 'Show More', but can be modified via
  // this option
  onscroll: true // boolean
  // if true, action occurs when load_more el is scrolled into viewport;
  // if false, user must click load_more el to trigger action
});
