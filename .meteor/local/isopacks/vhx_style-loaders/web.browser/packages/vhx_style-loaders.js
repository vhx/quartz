(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-loaders/docs/template.code.js                                            //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("code__style_loaders");                                                   // 2
Template["code__style_loaders"] = new Template("Template.code__style_loaders", (function() {   // 3
  var view = this;                                                                             // 4
  return HTML.SECTION({                                                                        // 5
    id: "code--style-buttons",                                                                 // 6
    "class": "padding-medium"                                                                  // 7
  }, "\n    ", Spacebars.include(view.lookupTemplate("markdown"), function() {                 // 8
    return '\n\n      --LOADERS--\n\n      <!-- Colors -->\n      <span class="loader-teal"></span>\n      <span class="loader-white"></span>\n      <span class="loader-slate"></span>\n\n\n      <!-- Sizes -->\n      <span class="loader-teal loader--small"></span>\n      <span class="loader-teal loader--medium"></span>\n      <span class="loader-teal loader--large"></span>\n      <span class="loader-teal loader--xlarge"></span>\n\n    ';
  }), "\n  ");                                                                                 // 10
}));                                                                                           // 11
                                                                                               // 12
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-loaders/docs/template.guide.js                                           //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("guide__style_loaders");                                                  // 2
Template["guide__style_loaders"] = new Template("Template.guide__style_loaders", (function() { // 3
  var view = this;                                                                             // 4
  return HTML.Raw('<section id="guide--style-buttons">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Loaders</strong></h3>\n\n    <!-- Colors -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Core Colors</strong></h4>\n\n      <span class="loader-teal"></span>\n      <span class="bg-grid-dark is-inline"><span class="loader-white"></span></span>\n      <span class="loader-slate"></span>\n    </div>\n\n    <!-- Sizes -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Sizes</strong></h4>\n\n      <span class="loader-teal loader--small"></span>\n      <span class="loader-teal loader--medium"></span>\n      <span class="loader-teal loader--large"></span>\n      <span class="loader-teal loader--xlarge"></span>\n\n    </div>\n  </section>');
}));                                                                                           // 6
                                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
