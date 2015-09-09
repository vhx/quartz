(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/vhx:style-checkbox/docs/template.code.js                                             //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("code__style_checkbox");                                                    // 2
Template["code__style_checkbox"] = new Template("Template.code__style_checkbox", (function() {   // 3
  var view = this;                                                                               // 4
  return HTML.SECTION({                                                                          // 5
    id: "code--style-checkbox",                                                                  // 6
    "class": "padding-medium"                                                                    // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {                     // 8
    return "\n\n    --CHECKBOXES--\n\n    <!-- Standard (Ruby Helper) -->\n    <%= checkbox_small(name, id, value, is_checked, is_disabled, data, label) %>\n    <%= checkbox_medium(name, id, value, is_checked, is_disabled, data, label) %>\n    <%= checkbox_large(name, id, value, is_checked, is_disabled, data, label) %>\n\n    <!-- Alt (Ruby Helper) -->\n    <%= checkbox_alt_small(name, id, value, is_checked, is_disabled, data, label) %>\n    <%= checkbox_alt(name, id, value, is_checked, is_disabled, data, label) %>\n\n  ";
  }), "\n  ");                                                                                   // 10
}));                                                                                             // 11
                                                                                                 // 12
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/vhx:style-checkbox/docs/template.guide.js                                            //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("guide__style_checkbox");                                                   // 2
Template["guide__style_checkbox"] = new Template("Template.guide__style_checkbox", (function() { // 3
  var view = this;                                                                               // 4
  return HTML.Raw('<section id="guide--style-checkbox">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Checkbox</strong></h3>\n\n    <!-- Standard -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Standard</strong></h4>\n\n      <form class="form">\n        <fieldset class="checkbox small">\n          <input type="checkbox" name="" id="name-a" value="" checked="">\n          <label for="name-a" class="ready">\n            <span class="checkbox--contain">\n              <span class="checkbox--icon"><span class="checkbox-animate"></span></span>\n              <span class="checkbox--label"></span>\n            </span>\n          </label>\n        </fieldset>\n\n        <fieldset class="checkbox medium">\n          <input type="checkbox" name="" id="name-b" value="" checked="">\n          <label for="name-b" class="ready">\n            <span class="checkbox--contain">\n              <span class="checkbox--icon"><span class="checkbox-animate"></span></span>\n              <span class="checkbox--label"></span>\n            </span>\n          </label>\n        </fieldset>\n\n        <fieldset class="checkbox large">\n          <input type="checkbox" name="" id="name-c" value="" checked="">\n          <label for="name-c" class="ready">\n            <span class="checkbox--contain">\n              <span class="checkbox--icon"><span class="checkbox-animate"></span></span>\n              <span class="checkbox--label"></span>\n            </span>\n          </label>\n        </fieldset>\n      </form>\n\n    </div>\n\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Alternate</strong></h4>\n\n      <form class="form">\n      <fieldset class="checkbox small alt">\n          <input type="checkbox" name="" id="name-d" value="" checked="">\n          <label for="name-d" class="ready">\n            <span class="checkbox--contain">\n              <span class="checkbox--icon"></span>\n              <span class="checkbox--circle"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="checkbox--label">Label</span>\n            </span>\n          </label>\n        </fieldset>\n        <fieldset class="checkbox medium alt">\n          <input type="checkbox" name="" id="name-e" value="" checked="">\n          <label for="name-e" class="ready">\n            <span class="checkbox--contain">\n              <span class="checkbox--icon"></span>\n              <span class="checkbox--circle"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="checkbox--label">Label</span>\n            </span>\n          </label>\n        </fieldset>\n      </form>\n    </div>\n  </section>');
}));                                                                                             // 6
                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
