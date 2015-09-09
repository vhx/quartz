(function(){
Template.__checkName("js_conventions");
Template["js_conventions"] = new Template("Template.js_conventions", (function() {
  var view = this;
  return HTML.Raw('<h2 class="head primary">Javascript Conventions</h2>');
}));

Template.__checkName("js_components");
Template["js_components"] = new Template("Template.js_components", (function() {
  var view = this;
  return HTML.Raw('<h2 class="head primary">Javascript Components</h2>');
}));

Template.__checkName("js_components_show");
Template["js_components_show"] = new Template("Template.js_components_show", (function() {
  var view = this;
  return "js_components_show";
}));

Template.__checkName("js_unit_testing");
Template["js_unit_testing"] = new Template("Template.js_unit_testing", (function() {
  var view = this;
  return HTML.Raw('<h2 class="head primary">Javascript Unit Testing</h2>');
}));

Template.__checkName("js_buy");
Template["js_buy"] = new Template("Template.js_buy", (function() {
  var view = this;
  return HTML.Raw('<h2 class="head primary">Javascript on Buy Page</h2>');
}));

Template.__checkName("js_reading");
Template["js_reading"] = new Template("Template.js_reading", (function() {
  var view = this;
  return HTML.Raw('<h2 class="head primary">Javascript Recommended Reading</h2>');
}));

})();
