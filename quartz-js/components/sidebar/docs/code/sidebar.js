// Example Sidebar Component

m.component(vhxm.components.shared.sidebar.ui.container, {
  loadedState: vhxm.models.customers().single,
  template: vhxm.customers.sidebar.ui.container,
  onClose: function() {
    m.route('/admin/customers');
  },
  onInit: function() {
    vhxm.components.shared.sidebar.toggle('open');
    vhxm.models.retrieveCustomer(m.route.param('id'));
  }
});
