// Example Search Input Component

m.component(vhxm.components.shared.search_input.ui.container, {
  config: function(el) {
    // mithril config for post render actions
  },
  search: function(query, callback) {
    // method for search ajax request
    // passes a query (the search term)
    // and callback param
  },
  callback: function(data) {
    // callback fires when called
    // via the callback param above
    // passes back data from search request
  },
  placeholder: 'Search',
  oninput: function() {
    // input event handler
  }
});