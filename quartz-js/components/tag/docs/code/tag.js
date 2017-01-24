m.component(vhxm.components.shared.tag.ui.container, {
  label: 'My Series: Complete Series Package',
  label_length: 20,
  isProcessing: function() {},
  onShow: function() {
    window.alert('show something');
  },
  onRemove: function() {
    window.alert('remove something');
  }
});