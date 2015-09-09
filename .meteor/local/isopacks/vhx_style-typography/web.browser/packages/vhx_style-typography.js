(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/vhx:style-typography/docs/template.code.js                                               //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("code__style_typography");                                                      // 2
Template["code__style_typography"] = new Template("Template.code__style_typography", (function() {   // 3
  var view = this;                                                                                   // 4
  return HTML.SECTION({                                                                              // 5
    id: "code--style-typography",                                                                    // 6
    "class": "padding-medium"                                                                        // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {                         // 8
    return '\n\n    --HEADERS--\n\n    <!-- Sizes -->\n    <h1 class="head-[size]">Header</h1>\n\n    <h1 class="head-1">Header 1</h1>\n    <h1 class="head-2">Header 2</h1>\n    <h1 class="head-3">Header 3</h1>\n    <h1 class="head-4">Header 4</h1>\n    <h1 class="head-5">Header 5</h1>\n\n    <!-- Colors -->\n    <h1 class="head--[color]">Color Modifier</h1>\n\n    <h1 class="head-3">Header Navy</h1>\n    <h1 class="head-3 head--navy">Header Navy</h1>\n    <h1 class="head-3 head--gray">Header Gray</h1>\n    <h1 class="head-3 head--white">Header White</h1>\n\n    <!-- Links -->\n    <a href="#" class="head-3">Header Navy</a>\n    <a href="#" class="head-3 head--navy">Header Navy</a>\n    <a href="#" class="head-3 head--gray">Header Gray</a>\n    <a href="#" class="head-3 head--teal">Header Teal</a>\n    <a href="#" class="head-3 head--whit">Header White</a>\n\n\n\n    --TEXT--\n\n    <!-- Sizes -->\n    <h1 class="head-[size]">Text</h1>\n\n    <h1 class="head-1">Header 1</h1>\n    <h1 class="head-2">Header 2</h1>\n    <h1 class="head-3">Header 3</h1>\n    <h1 class="head-4">Header 4</h1>\n    <h1 class="head-5">Header 5</h1>\n\n\n    <!-- Sizes -->\n    <h1 class="head--[color]">Color Modifier</h1>\n\n    <h1 class="head-3">Header Navy</h1>\n    <h1 class="head-3 head--navy">Header Navy</h1>\n    <h1 class="head-3 head--gray">Header Gray</h1>\n    <h1 class="head-3 head--teal">Head Teal</h1>\n    <h1 class="head-3 head--white">Header White</h1>\n\n  ';
  }), "\n  ");                                                                                       // 10
}));                                                                                                 // 11
                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/vhx:style-typography/docs/template.guide.js                                              //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("guide__style_typography");                                                     // 2
Template["guide__style_typography"] = new Template("Template.guide__style_typography", (function() { // 3
  var view = this;                                                                                   // 4
  return HTML.Raw('<section id="guide--style-typography">\n    <h3 class="head-4 border-bottom padding-bottom-medium"><strong>Headers</strong></h3>\n\n    <!-- Headers -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Sizes</strong></h4>\n\n      <h1 class="head-1 margin-bottom-small">Header 1</h1>\n      <h1 class="head-2 margin-bottom-small">Header 2</h1>\n      <h1 class="head-3 margin-bottom-small">Header 3</h1>\n      <h1 class="head-4 margin-bottom-small">Header 4</h1>\n      <h1 class="head-5 margin-bottom-small">Header 5</h1>\n    </div>\n\n    <!-- Colors -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Colors</strong></h4>\n\n      <h1 class="head-3 head--navy margin-bottom-small is-inline">Header Navy</h1><span>(default)</span>\n      <h1 class="head-3 head--gray margin-bottom-small">Header Gray</h1>\n      <h1 class="head-3 head--teal margin-bottom-small">Header Teal</h1>\n      <h1 class="head-3 head--white is-inline margin-bottom-small bg-grid-dark">Header White</h1>\n    </div>\n\n    <!-- Links -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Links</strong></h4>\n\n      <a href="#" class="head-3 margin-bottom-small is-inline">Header Navy</a><span>(default)</span>\n      <a href="#" class="head-3 head--gray is-block margin-bottom-small">Header Gray</a>\n      <a href="#" class="head-3 head--teal is-block margin-bottom-small">Header Teal</a>\n      <a href="#" class="head-3 head--white is-block is-inline margin-bottom-small bg-grid-dark">Header White</a>\n    </div>\n  </section>');
}));                                                                                                 // 6
                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
