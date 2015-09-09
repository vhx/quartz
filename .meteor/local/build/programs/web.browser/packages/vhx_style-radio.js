//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Template = Package.templating.Template;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Spacebars = Package.spacebars.Spacebars;
var Iron = Package['iron:core'].Iron;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/vhx:style-radio/docs/template.code.js                                          //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
                                                                                           // 1
Template.__checkName("code__style_radio");                                                 // 2
Template["code__style_radio"] = new Template("Template.code__style_radio", (function() {   // 3
  var view = this;                                                                         // 4
  return HTML.SECTION({                                                                    // 5
    id: "code--style-radio",                                                               // 6
    "class": "padding-medium"                                                              // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {               // 8
    return "\n\n    --RADIO--\n\n    <!-- Horizontal Layout (Ruby Helper) -->\n    <%= radio_gray(name, id, value, is_checked, is_disabled, data, label) %>\n    <%= radio_teal(name, id, value, is_checked, is_disabled, data, label) %>\n\n    <!-- Stacked Layout (Ruby Helper) -->\n    <%= radio_gray_stacked(name, id, value, is_checked, is_disabled, data, label) %>\n    <%= radio_teal_stacked(name, id, value, is_checked, is_disabled, data, label) %>\n\n  ";
  }), "\n  ");                                                                             // 10
}));                                                                                       // 11
                                                                                           // 12
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/vhx:style-radio/docs/template.guide.js                                         //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
                                                                                           // 1
Template.__checkName("guide__style_radio");                                                // 2
Template["guide__style_radio"] = new Template("Template.guide__style_radio", (function() { // 3
  var view = this;                                                                         // 4
  return HTML.Raw('<section id="guide--style-radio">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Radio</strong></h3>\n\n    <!-- Standard -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Horizontal Layout</strong></h4>\n\n      <form class="form">\n        <ul class="radio-gray">\n          <li>\n            <input id="one" type="radio" name="num" value="One" checked="">\n            <label for="one">\n              <span class="radio--icon"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="radio--label">One</span>\n            </label>\n          </li>\n          <li>\n            <input id="two" type="radio" name="num" value="Two">\n            <label for="two">\n              <span class="radio--icon"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="radio--label">Two</span>\n            </label>\n            </li>\n        </ul>\n        <ul class="radio-teal">\n          <li>\n            <input id="left" type="radio" name="dir" value="left" checked="">\n            <label for="left">\n              <span class="radio--icon"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="radio--label">Left</span>\n            </label>\n          </li>\n          <li>\n            <input id="right" type="radio" name="dir" value="right">\n            <label for="right">\n              <span class="radio--icon"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="radio--label">Right</span>\n            </label>\n            </li>\n        </ul>\n      </form>\n    </div>\n\n    <!-- Stacked -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border--gray-1">\n      <h4 class="margin-bottom-medium text-navy"><strong>Stacked Layout</strong></h4>\n\n      <form class="form">\n        <ul class="radio-gray radio--stacked">\n          <li>\n            <input id="oneA" type="radio" name="numA" value="One" checked="">\n            <label for="oneA">\n              <span class="radio--icon"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="radio--label">One</span>\n            </label>\n          </li>\n          <li>\n            <input id="twoA" type="radio" name="numA" value="Two">\n            <label for="twoA">\n              <span class="radio--icon"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="radio--label">Two</span>\n            </label>\n            </li>\n        </ul>\n        <ul class="radio-teal radio--stacked">\n          <li>\n            <input id="leftA" type="radio" name="leftA" value="left" checked="">\n            <label for="leftA">\n              <span class="radio--icon"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="radio--label">One</span>\n            </label>\n          </li>\n          <li>\n            <input id="rightA" type="radio" name="rightA" value="right">\n            <label for="rightA">\n              <span class="radio--icon"><i class="circle-top"><span></span></i><i class="circle-bottom"><span></span></i></span>\n              <span class="radio--label">Two</span>\n            </label>\n            </li>\n        </ul>\n      </form>\n    </div>\n  </section>');
}));                                                                                       // 6
                                                                                           // 7
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['vhx:style-radio'] = {};

})();
