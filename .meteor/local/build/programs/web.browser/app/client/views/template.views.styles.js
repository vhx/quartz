(function(){
Template.__checkName("style_markup");
Template["style_markup"] = new Template("Template.style_markup", (function() {
  var view = this;
  return "style markup";
}));

Template.__checkName("style_css");
Template["style_css"] = new Template("Template.style_css", (function() {
  var view = this;
  return "style css";
}));

Template.__checkName("style_examples");
Template["style_examples"] = new Template("Template.style_examples", (function() {
  var view = this;
  return "style examples";
}));

Template.__checkName("style_colors");
Template["style_colors"] = new Template("Template.style_colors", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("styleColors"));
  }, function() {
    return [ "\n  ", HTML.DIV({
      "class": "row fill-width margin-reset"
    }, "\n    ", HTML.DIV({
      "class": "column small-8 padding-reset"
    }, "\n      ", HTML.SECTION({
      "class": "guide-bar"
    }, "\n      ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("guide"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({
      "class": "column small-8 padding-reset"
    }, "\n      ", HTML.SECTION({
      "class": "code-bar"
    }, "\n      ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("code"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      "), "\n    "), "\n  "), "\n  " ];
  });
}));

Template.__checkName("style_elements");
Template["style_elements"] = new Template("Template.style_elements", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("styleElements"));
  }, function() {
    return [ "\n  ", HTML.DIV({
      "class": "row fill-width margin-reset"
    }, "\n    ", HTML.DIV({
      "class": "column small-8 padding-reset"
    }, "\n      ", HTML.SECTION({
      "class": "guide-bar"
    }, "\n      ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("guide"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({
      "class": "column small-8 padding-reset"
    }, "\n      ", HTML.SECTION({
      "class": "code-bar"
    }, "\n      ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("code"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      "), "\n    "), "\n  "), "\n  " ];
  });
}));

Template.__checkName("style_utilities");
Template["style_utilities"] = new Template("Template.style_utilities", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("styleUtilities"));
  }, function() {
    return [ "\n  ", HTML.DIV({
      "class": "row fill-width margin-reset"
    }, "\n    ", HTML.DIV({
      "class": "column small-8 padding-reset"
    }, "\n      ", HTML.SECTION({
      "class": "guide-bar"
    }, "\n      ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("guide"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({
      "class": "column small-8 padding-reset"
    }, "\n      ", HTML.SECTION({
      "class": "code-bar"
    }, "\n      ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("code"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      "), "\n    "), "\n  "), "\n  " ];
  });
}));

Template.__checkName("style_reading");
Template["style_reading"] = new Template("Template.style_reading", (function() {
  var view = this;
  return "style reading";
}));

})();
