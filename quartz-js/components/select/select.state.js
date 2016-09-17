vhxm.components.shared.select.state = function() {
  this.selected = m.prop(null);
  this.highlighted = m.prop({});
  this.isDropdownOpen = m.prop(false);
  this.highlightIndex = m.prop(null);
  this.scrollIndex = m.prop(0);
  this.optionHeight = m.prop(0);
  this.optionsHeight = m.prop(0);
  this.isLoading = m.prop(false);
  this.searchInputValue = m.prop('');
  this.footerLoading = m.prop(false);
  this.focusInput = m.prop(true);
  this.onSelect = function() {};
  this.onAction = function(done) { done(); };
};
