/* STYLE ROUTES
.................................................*/

// home
Router.route('/', {
  name: 'home',
  controller: 'Home'
});

// html conventions
Router.route('/styleguide/html', {
  name: 'style_markup' ,
  controller: 'StyleMarkup'
});

// css conventions
Router.route('/styleguide/css', {
  name: 'style_css',
  controller: 'StyleCss'
});

// elements
Router.route('/styleguide/elements', {
  name: 'style_elements',
  controller: 'StyleElements'
});

// utilties
Router.route('/styleguide/utilities', {
  name: 'style_utilties',
  controller: 'StyleUtilities'
});

// reading
Router.route('/styleguide/reading', {
  name: 'style_reading',
  controller: 'StyleReading'
});