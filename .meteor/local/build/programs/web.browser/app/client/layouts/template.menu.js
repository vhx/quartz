(function(){
Template.__checkName("menu");
Template["menu"] = new Template("Template.menu", (function() {
  var view = this;
  return HTML.NAV({
    "class": "nav-primary"
  }, HTML.Raw('\n    <h1 class="head-4 head--teal text-center padding-vertical-medium">Guides</h1>\n\n    <h2 class="head-4 head--gray margin-top-large padding-bottom-medium">Styleguide</h2>\n    '), HTML.UL({
    "class": "no-bullet"
  }, "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "style_markup");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "style_markup");
    }
  }, "HTML Conventions")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "style_css");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "style_css");
    }
  }, "CSS Conventions")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "style_colors");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "styles_colors");
    }
  }, "Colors")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "style_elements");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "style_elements");
    }
  }, "Style Elements")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "style_utilties");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "style_utilties");
    }
  }, "Style Utilities")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "style_examples");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "style_examples");
    }
  }, "Examples")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "style_reading");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "style_reading");
    }
  }, "Reading")), "\n    "), HTML.Raw('\n\n    <h2 class="head-4 head--gray margin-top-xlarge padding-bottom-medium">Javascript</h2>\n    '), HTML.UL({
    "class": "no-bullet"
  }, "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "js_conventions");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "js_conventions");
    }
  }, "JS Conventions")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "js_components");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "js_components");
    }
  }, "Components")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "js_unit_testing");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "js_unit_testing");
    }
  }, "Unit Testing")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "js_buy");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "js_buy");
    }
  }, "Buy Page")), "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "js_reading");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), "js_reading");
    }
  }, "Reading")), "\n    "), "\n  ");
}));

})();
