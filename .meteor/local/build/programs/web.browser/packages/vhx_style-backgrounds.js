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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/vhx:style-backgrounds/docs/template.code.js                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("code__style_backgrounds");                                                       // 2
Template["code__style_backgrounds"] = new Template("Template.code__style_backgrounds", (function() {   // 3
  var view = this;                                                                                     // 4
  return HTML.SECTION({                                                                                // 5
    id: "code--style-backgrounds",                                                                     // 6
    "class": "padding-medium"                                                                          // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {                           // 8
    return '\n\n    --BACKGROUNDS--\n\n    <!-- Background Convention -->\n    <div class="bg-[color]"></div>\n\n    <!-- Teal Backgrounds -->\n    <div class="bg-teal-1"></div>\n    <div class="bg-teal-2"></div>\n\n    <!-- Black & White Backgrounds -->\n    <div class="bg-white"></div>\n    <div class="bg-white-transparent"></div>\n    <div class="bg-black"></div>\n    <div class="bg-black-transparent"></div>\n\n    <!-- Gray Backgrounds -->\n    <div class="bg-gray-1"></div>\n    <div class="bg-gray-2"></div>\n    <div class="bg-gray-3"></div>\n    <div class="bg-gray-4"></div>\n    <div class="bg-gray-5"></div>\n    <div class="bg-gray-6"></div>\n\n    <!-- Navy Backgrounds -->\n    <div class="bg-navy"></div>\n    <div class="bg-navy-transparent"></div>\n\n    <!-- Brand Backgrounds -->\n    <div class="bg-red"></div>\n    <div class="bg-green"></div>\n    <div class="bg-yellow"></div>\n    <div class="bg-orange"></div>\n    <div class="bg-currant"></div>\n\n  ';
  }), "\n  ");                                                                                         // 10
}));                                                                                                   // 11
                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/vhx:style-backgrounds/docs/template.guide.js                                               //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("guide__style_backgrounds");                                                      // 2
Template["guide__style_backgrounds"] = new Template("Template.guide__style_backgrounds", (function() { // 3
  var view = this;                                                                                     // 4
  return HTML.Raw('<section id="guide--style-backgrounds">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Backgrounds</strong></h3>\n\n    <!-- Teal Colors -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Teal Backgrounds</strong></h4>\n\n      <span class="square square--medium bg-teal-1 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Teal 1</strong></span>\n      </span>\n\n      <span class="square square--medium bg-teal-2 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Teal 2</strong></span>\n      </span>\n    </div>\n\n    <!-- Black & White Colors -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Black &amp; White</strong></h4>\n\n      <span class="square square--medium bg-white margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>White</strong></span>\n      </span>\n\n      <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n        <span class="square square--medium bg-white-transparent">\n          <span class="square-tag text-gray text--small"><strong>White 50%</strong></span>\n        </span>\n      </span>\n\n      <span class="square square--medium bg-black margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Black</strong></span>\n      </span>\n\n      <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n        <span class="square square--medium bg-black-transparent">\n          <span class="square-tag text-gray text--small"><strong>Black 50%</strong></span>\n        </span>\n      </span>\n\n    </div>\n\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Gray Backgrounds</strong></h4>\n\n      <span class="square square--medium bg-gray-1 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Gray 1</strong></span>\n      </span>\n\n      <span class="square square--medium bg-gray-2 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Gray 2</strong></span>\n      </span>\n\n      <span class="square square--medium bg-gray-3 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Gray 3</strong></span>\n      </span>\n\n      <span class="square square--medium bg-gray-4 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Gray 4</strong></span>\n      </span>\n\n      <span class="square square--medium bg-gray-5 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Gray 5</strong></span>\n      </span>\n\n      <span class="square square--medium bg-gray-6 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Gray 6</strong></span>\n      </span>\n    </div>\n\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Navy Backgrounds</strong></h4>\n\n      <span class="square square--medium bg-navy margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Navy</strong></span>\n      </span>\n\n      <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n        <span class="square square--medium bg-navy-transparent">\n          <span class="square-tag text-gray text--small"><strong>Navy 50%</strong></span>\n        </span>\n      </span>\n    </div>\n\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Brand Backgrounds</strong></h4>\n\n      <span class="square square--medium bg-red margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Red</strong></span>\n      </span>\n\n      <span class="square square--medium bg-green margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Green</strong></span>\n      </span>\n\n      <span class="square square--medium bg-yellow margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Yellow</strong></span>\n      </span>\n\n      <span class="square square--medium bg-orange margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Orange</strong></span>\n      </span>\n\n      <span class="square square--medium bg-currant margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Currant</strong></span>\n      </span>\n    </div>\n  </section>');
}));                                                                                                   // 6
                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['vhx:style-backgrounds'] = {};

})();
