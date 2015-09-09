(function(){Template.registerHelper('isActiveRoute', function (route_name) {
  if (Router.current().route.getName() === route_name) {
    return 'is-active';
  }
});

Template.style_colors.helpers({
  styleColors: function() {
    return [
      { guide: 'guide__style_colors', code:'code__style_colors' }
    ]
  }
});

Template.style_elements.helpers({
  styleElements: function() {
    return [
      { guide: 'guide__style_typography', code:'code__style_typography' },
      { guide: 'guide__style_buttons', code:'code__style_buttons' },
      { guide: 'guide__style_loaders', code:'code__style_loaders' },
      { guide: 'guide__style_checkbox', code:'code__style_checkbox' },
      { guide: 'guide__style_radio', code:'code__style_radio' }
    ]
  }
});

Template.style_utilities.helpers({
  styleUtilities: function() {
    return [
      { guide: 'guide__style_grid', code:'code__style_grid' },
      { guide: 'guide__style_spacing', code:'code__style_spacing' },
      { guide: 'guide__style_backgrounds', code:'code__style_backgrounds' },
      { guide: 'guide__style_borders', code:'code__style_borders' }
    ]
  }
})

})();
