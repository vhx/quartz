(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-buttons/docs/template.code.js                                            //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("code__style_buttons");                                                   // 2
Template["code__style_buttons"] = new Template("Template.code__style_buttons", (function() {   // 3
  var view = this;                                                                             // 4
  return HTML.SECTION({                                                                        // 5
    id: "code--style-buttons",                                                                 // 6
    "class": "padding-medium"                                                                  // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {                   // 8
    return '\n\n    --BUTTONS--\n\n    <!-- Button Colors -->\n    <button class="btn-[color]">Color</button>\n\n    <!-- Core Colors -->\n    <button class="btn-gray">Gray</button>\n    <button class="btn-teal">Teal</button>\n    <button class="btn-white">White</button>\n    <button class="btn-red">Red</button>\n\n\n    <!-- Other Colors -->\n    <button class="btn-purple">Purple</button>\n    <button class="btn-black">Black</button>\n    <button class="btn-transparent">Transparent</button>\n\n    <!-- Brand Colors -->\n    <button class="btn-twitter">Twitter</button>\n    <button class="btn-facebook">Facebook</button>\n    <button class="btn-tumblr">Tumblr</button>\n    <button class="btn-paypal">Paypal</button>\n    <button class="btn-roku">Roku</button>\n\n\n    <!-- Button Sizes -->\n    <button class="btn--[size]">Size Modifier</button>\n\n    <button class="btn-gray btn--small">Small</button>\n    <button class="btn-gray btn--medium">Medium</button>\n    <button class="btn-gray btn--large">Large</button>\n    <button class="btn-gray btn--fill">Large</button>\n\n\n    <!-- Typography -->\n    <button class="btn-gray">Helvetica</button>\n    <button class="btn-gray btn--brandon">Brandon</button>\n\n\n    <!-- Icons -->\n    <button class="btn-gray icon-[name]-[color] icon--[position]">Icon</button>\n    <button class="btn-gray icon-product-mono icon--left">Icon</button>\n    <button class="btn-gray icon-product-mono icon--center">Icon</button>\n    <button class="btn-gray icon-product-mono icon--right">Icon</button>\n    <button class="btn-gray icon-product-mono icon--left icon--right">Icon</button>\n\n\n    <!-- Processing States -->\n    <button class="btn-gray is-processing">Button</button>\n\n\n    <!-- Dropdown Colors -->\n    <button class="btn-dropdown-[color]">Gray</button>\n\n    <button class="btn-dropdown-gray">Gray</button>\n    <button class="btn-dropdown-teal">Teal</button>\n    <button class="btn-dropdown-white">White</button>\n  ';
  }), "\n  ");                                                                                 // 10
}));                                                                                           // 11
                                                                                               // 12
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-buttons/docs/template.guide.js                                           //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("guide__style_buttons");                                                  // 2
Template["guide__style_buttons"] = new Template("Template.guide__style_buttons", (function() { // 3
  var view = this;                                                                             // 4
  return HTML.Raw('<section id="guide--style-buttons">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Buttons</strong></h3>\n\n    <!-- Core Colors -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Core Colors</strong></h4>\n\n      <button class="btn-gray">Gray</button>\n      <button class="btn-teal">Teal</button>\n      <button class="btn-white">White</button>\n      <button class="btn-red">Red</button>\n    </div>\n\n    <!-- Other Colors -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Other Colors</strong></h4>\n\n      <button class="btn-purple">Purple</button>\n      <button class="btn-black">Black</button>\n      <div class="bg-grid-dark padding-small is-inline">\n        <button class="btn-transparent">Transparent</button>\n      </div>\n    </div>\n\n    <!-- Brand Colors -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Brand Colors</strong></h4>\n\n      <button class="btn-twitter">Twitter</button>\n      <button class="btn-facebook">Facebook</button>\n      <button class="btn-tumblr">Tumblr</button>\n      <button class="btn-paypal">Paypal</button>\n      <button class="btn-roku">Roku</button>\n    </div>\n\n    <!-- Sizes -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Sizes</strong></h4>\n\n      <button class="btn-gray btn--small is-block">Small</button>\n      <button class="btn-gray btn--medium is-block">Medium</button>\n      <button class="btn-gray btn--large is-block">Large</button>\n      <button class="btn-gray btn--fill">Fill</button>\n    </div>\n\n    <!-- Typography -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Typography</strong></h4>\n\n      <button class="btn-gray">Helvetica</button>\n      <button class="btn-gray btn--brandon">Brandon</button>\n      <button class="btn-teal">Helvetica</button>\n      <button class="btn-teal btn--brandon">Brandon</button>\n    </div>\n\n    <!-- Icons -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Icons</strong></h4>\n\n      <button class="btn-gray icon-product-mono icon--left">Icon Left</button>\n      <button class="btn-gray icon-product-mono icon--center">Icon Center</button>\n      <button class="btn-gray icon-product-mono icon--right">Icon Right</button>\n      <button class="btn-gray icon-product-mono icon--left icon--right">Icon Both</button>\n\n    </div>\n\n    <!-- Processing States -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Processing States</strong></h4>\n\n      <button class="btn-gray is-processing">Processing</button>\n      <button class="btn-teal is-processing">Processing</button>\n      <button class="btn-white is-processing">Processing</button>\n      <button class="btn-red is-processing">Processing</button>\n    </div>\n\n    <!-- Dropdowns Buttons -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Dropdown Buttons</strong></h4>\n\n      <button class="btn-dropdown-gray">Dropdown</button>\n      <button class="btn-dropdown-teal">Dropdown</button>\n      <button class="btn-dropdown-white">Dropdown</button>\n    </div>\n  </section>');
}));                                                                                           // 6
                                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
