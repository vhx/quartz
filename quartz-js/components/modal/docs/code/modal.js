m.component(vhxm.components.shared.modal.ui.container, {
  hasActions: 1,
  size: 'large',
  content: {
    title: 'Modal A',
    body: {
      view: function() {
        return m('p.text--gray', 'Modal with one action.');
      }
    }
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
});