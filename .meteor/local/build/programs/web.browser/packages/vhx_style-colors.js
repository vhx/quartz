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

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/vhx:style-colors/docs/template.code.js                                           //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
                                                                                             // 1
Template.__checkName("code__style_colors");                                                  // 2
Template["code__style_colors"] = new Template("Template.code__style_colors", (function() {   // 3
  var view = this;                                                                           // 4
  return HTML.SECTION({                                                                      // 5
    id: "code--style-colors",                                                                // 6
    "class": "padding-medium"                                                                // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {                 // 8
    return '\n\n    --NAME--\n\n    <!-- Subtitle -->\n    <div class="code"></div>\n\n  ';  // 9
  }), "\n  ");                                                                               // 10
}));                                                                                         // 11
                                                                                             // 12
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/vhx:style-colors/docs/template.guide.js                                          //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
                                                                                             // 1
Template.__checkName("guide__style_colors");                                                 // 2
Template["guide__style_colors"] = new Template("Template.guide__style_colors", (function() { // 3
  var view = this;                                                                           // 4
  return HTML.Raw('<section id="guide--style-colors">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Colors</strong></h3>\n\n    <!-- Subtitle -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Put some colors here</strong></h4>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium white">\n        <span class="square-tag text-gray text--small"><strong>$white</strong></span>\n      </span>\n      <div class="bg-grid-dark is-inline margin-right-medium margin-bottom-medium">\n        <span class="square square--large white-transparent">\n          <span class="square-tag text-gray text--small"><strong>$white-transparent</strong></span>\n        </span>\n      </div>\n      <span class="square square--large margin-right-medium margin-bottom-medium black">\n        <span class="square-tag text-gray text--small"><strong>$black</strong></span>\n      </span>\n      <div class="bg-grid-dark is-inline margin-right-medium margin-bottom-medium">\n        <span class="square square--large black-transparent">\n          <span class="square-tag text-gray text--small"><strong>$black-transparent</strong></span>\n        </span>\n      </div>\n      <span class="square square--large margin-right-medium margin-bottom-medium gray-1">\n        <span class="square-tag text-gray text--small"><strong>$gray-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium gray-2">\n        <span class="square-tag text-gray text--small"><strong>$gray-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium gray-3">\n        <span class="square-tag text-gray text--small"><strong>$gray-3</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium gray-4">\n        <span class="square-tag text-gray text--small"><strong>$gray-4</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium gray-5">\n        <span class="square-tag text-gray text--small"><strong>$gray-5</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium gray-6">\n        <span class="square-tag text-gray text--small"><strong>$gray-6</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium gray-7">\n        <span class="square-tag text-gray text--small"><strong>$gray-7</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium gray-8">\n        <span class="square-tag text-gray text--small"><strong>$gray-8</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium teal-1">\n        <span class="square-tag text-gray text--small"><strong>$teal-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium teal-2">\n        <span class="square-tag text-gray text--small"><strong>$teal-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium teal-3">\n        <span class="square-tag text-gray text--small"><strong>$teal-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium red-1">\n        <span class="square-tag text-gray text--small"><strong>$red-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium red-2">\n        <span class="square-tag text-gray text--small"><strong>$red-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium red-3">\n        <span class="square-tag text-gray text--small"><strong>$red-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium navy">\n        <span class="square-tag text-gray text--small"><strong>$navy</strong></span>\n      </span>\n\n      <div class="bg-grid-dark is-inline margin-right-medium margin-bottom-medium">\n        <span class="square square--large navy-transparent">\n          <span class="square-tag text-gray text--small"><strong>$navy-transparent</strong></span>\n        </span>\n      </div>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-orange-1">\n        <span class="square-tag text-gray text--small"><strong>$vhx-orange-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-orange-2">\n        <span class="square-tag text-gray text--small"><strong>$vhx-orange-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-orange-3">\n        <span class="square-tag text-gray text--small"><strong>$vhx-orange-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-debian-1">\n        <span class="square-tag text-gray text--small"><strong>$vhx-debian-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-debian-2">\n        <span class="square-tag text-gray text--small"><strong>$vhx-debian-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-debian-3">\n        <span class="square-tag text-gray text--small"><strong>$vhx-debian-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-purple-1">\n        <span class="square-tag text-gray text--small"><strong>$vhx-purple-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-purple-2">\n        <span class="square-tag text-gray text--small"><strong>$vhx-purple-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-purple-3">\n        <span class="square-tag text-gray text--small"><strong>$vhx-purple-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-currant-1">\n        <span class="square-tag text-gray text--small"><strong>$vhx-currant-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-currant-2">\n        <span class="square-tag text-gray text--small"><strong>$vhx-currant-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-currant-3">\n        <span class="square-tag text-gray text--small"><strong>$vhx-currant-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-blue-1">\n        <span class="square-tag text-gray text--small"><strong>$vhx-blue-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-blue-2">\n        <span class="square-tag text-gray text--small"><strong>$vhx-blue-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-blue-3">\n        <span class="square-tag text-gray text--small"><strong>$vhx-blue-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-teal-1">\n        <span class="square-tag text-gray text--small"><strong>$vhx-teal-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-teal-2">\n        <span class="square-tag text-gray text--small"><strong>$vhx-teal-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-teal-3">\n        <span class="square-tag text-gray text--small"><strong>$vhx-teal-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-green-1">\n        <span class="square-tag text-gray text--small"><strong>$vhx-green-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-green-2">\n        <span class="square-tag text-gray text--small"><strong>$vhx-green-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-green-3">\n        <span class="square-tag text-gray text--small"><strong>$vhx-green-3</strong></span>\n      </span>\n\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-yellow-1">\n        <span class="square-tag text-gray text--small"><strong>$vhx-yellow-1</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-yellow-2">\n        <span class="square-tag text-gray text--small"><strong>$vhx-yellow-2</strong></span>\n      </span>\n      <span class="square square--large margin-right-medium margin-bottom-medium vhx-yellow-3">\n        <span class="square-tag text-gray text--small"><strong>$vhx-yellow-3</strong></span>\n      </span>\n\n\n    </div>\n\n  </section>');
}));                                                                                         // 6
                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['vhx:style-colors'] = {};

})();
