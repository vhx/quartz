vhxm.components.shared.filter.state = function() {
  this.applied = m.prop([]);
  this.available = m.prop(null);
  this.dropdown = {
    isOpen: m.prop(false),
    filtersOpen: m.prop([])
  };
};
