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

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-borders/docs/template.code.js                                            //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("code__style_borders");                                                   // 2
Template["code__style_borders"] = new Template("Template.code__style_borders", (function() {   // 3
  var view = this;                                                                             // 4
  return HTML.SECTION({                                                                        // 5
    id: "code--style-borders",                                                                 // 6
    "class": "padding-medium"                                                                  // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {                   // 8
    return '\n\n    --BORDERS--\n\n    <!-- Positions -->\n    <div class="border-[position]"></div>\n\n    <div class="border"></div>\n    <div class="border-vert"></div>\n    <div class="border-horz"></div>\n    <div class="border-top"></div>\n    <div class="border-bottom"></div>\n    <div class="border-left"></div>\n    <div class="border-right"></div>\n    <div class="border-center">\n      <span class="is-inline bg-white padding-medium"></span>\n    </div>\n\n    <!-- Colors -->\n    <div class="border border--[color]"></div>\n\n    <div class="border border--gray-1"></div>\n    <div class="border border--gray-2"></div>\n    <div class="border border--white"></div>\n    <div class="border border--white-transparent"></div>\n\n    <!-- Other Modifiers -->\n    <div class="border border--[modifier]"></div>\n\n    <div class="border border--thick"></div>\n    <div class="border border--radius"></div>\n\n  ';
  }), "\n  ");                                                                                 // 10
}));                                                                                           // 11
                                                                                               // 12
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-borders/docs/template.guide.js                                           //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("guide__style_borders");                                                  // 2
Template["guide__style_borders"] = new Template("Template.guide__style_borders", (function() { // 3
  var view = this;                                                                             // 4
  return HTML.Raw('<section id="guide--style-borders">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Borders</strong></h3>\n\n    <!-- Positions (Default Color) -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Positions w/ Default Color</strong></h4>\n\n      <span class="square square--medium border margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Border All</strong></span>\n      </span>\n\n      <span class="square square--medium border-vert margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Border Vert.</strong></span>\n      </span>\n\n      <span class="square square--medium border-horz margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Border Horz.</strong></span>\n      </span>\n\n      <span class="square square--medium border-top margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Top</strong></span>\n      </span>\n\n      <span class="square square--medium border-bottom margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Bottom</strong></span>\n      </span>\n\n      <span class="square square--medium border-left margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Left</strong></span>\n      </span>\n\n      <span class="square square--medium border-right margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Right</strong></span>\n      </span>\n\n      <span class="is-inline border-center text-gray text--small padding-large">\n        <strong class="bg-white padding-medium">Center</strong>\n      </span>\n    </div>\n\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Colors</strong></h4>\n\n      <span class="square square--medium border border--gray-1 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Gray 1</strong></span>\n      </span>\n\n      <span class="square square--medium border border--gray-2 margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Gray 2</strong></span>\n      </span>\n\n      <span class="is-inline bg-grid-dark padding-small margin-right-medium margin-bottom-medium">\n        <span class="square square--medium border border--white">\n          <span class="square-tag text-gray text--small"><strong>White</strong></span>\n        </span>\n      </span>\n\n      <span class="is-inline bg-grid-dark padding-small margin-right-medium margin-bottom-medium">\n        <span class="square square--medium border border--white-transparent">\n          <span class="square-tag text-gray text--small"><strong>White 50%</strong></span>\n        </span>\n      </span>\n    </div>\n\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Other Modifiers</strong></h4>\n\n      <span class="square square--medium border border--thick margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Thick</strong></span>\n      </span>\n\n      <span class="square square--medium border border--radius margin-right-medium margin-bottom-medium">\n        <span class="square-tag text-gray text--small"><strong>Radius</strong></span>\n      </span>\n\n    </div>\n  </section>');
}));                                                                                           // 6
                                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['vhx:style-borders'] = {};

})();
