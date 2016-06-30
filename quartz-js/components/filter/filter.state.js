vhxm.components.shared.filter.state = function() {
  this.selected = m.prop([]);
  this.applied = m.prop(false);
  this.available = m.prop(null);
  this.dropdown = {
    isOpen: m.prop(false),
    filtersOpen: m.prop([])
  };
};
