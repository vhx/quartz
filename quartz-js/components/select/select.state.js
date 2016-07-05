vhxm.components.shared.select.state = function() {
  this.selected = m.prop({});
  this.highlighted = m.prop({});
  this.isDropdownOpen = m.prop(false);
  this.highlightIndex = m.prop(null);
  this.scrollIndex = m.prop(0);
  this.optionHeight = m.prop(0);
  this.optionsHeight = m.prop(0);
  this.isLoadingResults = m.prop(false);
};
