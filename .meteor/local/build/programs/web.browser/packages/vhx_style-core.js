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
// packages/vhx:style-core/docs/template.grid.code.js                                          //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("code__style_grid");                                                      // 2
Template["code__style_grid"] = new Template("Template.code__style_grid", (function() {         // 3
  var view = this;                                                                             // 4
  return HTML.SECTION({                                                                        // 5
    id: "code--style-grid",                                                                    // 6
    "class": "padding-medium"                                                                  // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {                   // 8
    return "\n\n    --GRID--\n  ";                                                             // 9
  }), "\n  ");                                                                                 // 10
}));                                                                                           // 11
                                                                                               // 12
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-core/docs/template.grid.guide.js                                         //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("guide__style_grid");                                                     // 2
Template["guide__style_grid"] = new Template("Template.guide__style_grid", (function() {       // 3
  var view = this;                                                                             // 4
  return HTML.Raw('<section id="guide--style-grid">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Grid</strong></h3>\n\n    <!-- Basic Setup -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Basic Setup</strong></h4>\n\n      <div class="row text-center">\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">1</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">2</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">3</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">4</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">5</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">6</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">7</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">8</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">9</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">10</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">11</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">12</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">13</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">14</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">15</span></div>\n        <div class="column small-1"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">16</span></div>\n      </div>\n    </div>\n\n    <!-- Responsive -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Responsive</strong></h4>\n\n      <div class="row text-center">\n        <div class="column medium-6 large-4"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">1</span></div>\n        <div class="column medium-6 large-4"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">2</span></div>\n        <div class="column medium-4 large-4"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">3</span></div>\n        <div class="column show-for-large-up large-4"><span class="padding-vertical-large is-block bg-gray-2 text-gray text--small">4</span></div>\n      </div>\n\n    </div>\n\n  </section>');
}));                                                                                           // 6
                                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-core/docs/template.spacing.code.js                                       //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("code__style_spacing");                                                   // 2
Template["code__style_spacing"] = new Template("Template.code__style_spacing", (function() {   // 3
  var view = this;                                                                             // 4
  return HTML.SECTION({                                                                        // 5
    id: "code--style-spacing",                                                                 // 6
    "class": "padding-medium"                                                                  // 7
  }, "\n  ", Spacebars.include(view.lookupTemplate("markdown"), function() {                   // 8
    return '\n\n    --SIZING--\n\n    <div class="padding-[size]">Padding</div>\n    <div class="margin-[size]">Margin</div>\n\n    <div class="padding-small">Small Padding</div>\n    <div class="padding-medium">Medium Padding</div>\n    <div class="padding-large">Large Padding</div>\n    <div class="padding-xlarge">XLarge Padding</div>\n\n    <div class="margin-small">Small Margin</div>\n    <div class="margin-medium">Medium Margin</div>\n    <div class="margin-large">Large Margin</div>\n    <div class="margin-xlarge">XLarge Margin</div>\n\n\n    --POSITION--\n\n    <div class="padding-[position]-[size]">Large Padding</div>\n\n    <div class="padding-large">All sides</div>\n    <div class="padding-vertical-large">Vert. sides</div>\n    <div class="padding-horizontal-large">Horz. sides</div>\n    <div class="padding-top-large">Top side</div>\n    <div class="padding-bottom-large">Horz. sides</div>\n    <div class="padding-left-large">Left side</div>\n    <div class="padding-right-large">Right side</div>\n\n    <div class="margin-large">All sides</div>\n    <div class="margin-vertical-large">Vert. sides</div>\n    <div class="margin-horizontal-large">Horz. sides</div>\n    <div class="margin-top-large">Top side</div>\n    <div class="margin-bottom-large">Bottom side</div>\n    <div class="margin-left-large">Left side</div>\n    <div class="margin-right-large">Right side</div>\n\n  ';
  }), "\n  ");                                                                                 // 10
}));                                                                                           // 11
                                                                                               // 12
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/vhx:style-core/docs/template.spacing.guide.js                                      //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__checkName("guide__style_spacing");                                                  // 2
Template["guide__style_spacing"] = new Template("Template.guide__style_spacing", (function() { // 3
  var view = this;                                                                             // 4
  return HTML.Raw('<section id="guide--style-spacing">\n    <h3 class="head-4 head--navy border-bottom padding-bottom-medium"><strong>Spacing</strong></h3>\n\n    <!-- Sizes -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Sizes (Padding | Margin)</strong></h4>\n\n      <div>\n        <span class="square padding-small border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">small (5px)</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white  border margin-small padding-small">small (5px)</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-medium border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">medium (15px)</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white  border margin-medium padding-small">medium (15px)</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-large border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">large (30px)</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white  border margin-large padding-small">large (30px)</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-xlarge border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">xlarge (65px)</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white  border margin-xlarge padding-small">xlarge (65px)</strong>\n        </span>\n      </div>\n    </div>\n\n    <!-- Positions -->\n    <div class="margin-vertical-large padding-bottom-medium border-bottom border-light">\n      <h4 class="margin-bottom-medium text-navy"><strong>Positions (Padding | Margin)</strong></h4>\n\n      <div>\n        <span class="square padding-large border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">all sides</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white border margin-large padding-small">all sides</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-vertical-large border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">vertical sides</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white border margin-vertical-large padding-small">vertical sides</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-horizontal-large border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">horizontal sides</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white border margin-horizontal-large padding-small">horizontal sides</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-top-large border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">top side</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white border margin-top-large padding-small">top side</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-bottom-large border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">bottom side</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white border margin-bottom-large padding-small">bottom side</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-left-large border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">left side</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white border margin-left-large padding-small">left side</strong>\n        </span>\n      </div>\n\n      <div>\n        <span class="square padding-right-large border margin-right-medium margin-bottom-medium">\n          <strong class="text-gray text--small">right side</strong>\n        </span>\n        <span class="is-inline bg-grid-light margin-right-medium margin-bottom-medium">\n          <strong class="is-inline text-gray text--small bg-white border margin-right-large padding-small">right side</strong>\n        </span>\n      </div>\n    </div>\n\n  </section>');
}));                                                                                           // 6
                                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['vhx:style-core'] = {};

})();
