vhxm.components.shared.autosuggest.state = function() {
  this.selected = m.prop({});
  this.highlighted = m.prop({});
  this.highlightIndex = m.prop(null);
  this.scrollIndex = m.prop(0);
  this.optionHeight = m.prop(0);
  this.optionsHeight = m.prop(0);
  this.hasFocus = m.prop(false);
};
