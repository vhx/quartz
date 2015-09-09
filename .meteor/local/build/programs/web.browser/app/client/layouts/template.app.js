(function(){
Template.__checkName("app_layout");
Template["app_layout"] = new Template("Template.app_layout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("menu")), "\n\n  ", HTML.SECTION({
    "class": "stage"
  }, "\n    ", Spacebars.include(view.lookupTemplate("yield")), "\n  ") ];
}));

})();
