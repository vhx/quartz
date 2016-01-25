Template.registerHelper('isActiveRoute', function (route_name) {
  if (Router.current().route.getName() === route_name) {
    return 'is-active';
  }
});

Template.style_colors.helpers({
  styleColors: function() {
    return [
      { guide: 'guide__style_colors', code:'code__style_colors' },
      { guide: 'guide__style_tools_colors', code:'code__style_tools_colors' },
      { guide: 'guide__style_brand_colors', code:'code__style_brand_colors' },
      { guide: 'guide__style_external_colors', code:'code__style_external_colors' }
    ]
  }
});

Template.style_elements.helpers({
  styleElements: function() {
    return [
      { guide: 'guide__style_buttons', code:'code__style_buttons' },
      { guide: 'guide__style_loaders', code:'code__style_loaders' },
      { guide: 'guide__style_checkbox', code:'code__style_checkbox' },
      { guide: 'guide__style_radio', code:'code__style_radio' },
      { guide: 'guide__style_tooltips', code:'code__style_tooltips' }
    ];
  }
});

Template.style_typography.helpers({
  styleTypography: function() {
    return [
      { guide: 'guide__style_headers', code:'code__style_headers' },
      { guide: 'guide__style_text', code:'code__style_text' }
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
});

Template.style_icons.helpers({
  styleIcons: function() {
    return [
      { guide: 'guide__style_icons', code:'code__style_icons' },
      { guide: 'guide__style_icons_names', code:'code__style_icons_names' },
    ]
  }
});

Template.style_tables.helpers({
  styleTables: function() {
    return [
      { guide: 'guide__style_tables', code:'code__style_tables' },
    ]
  }
});
