/* JAVASCRIPT ROUTES
.................................................*/

// js conventions
Router.route('/javascript/conventions', {
  name: 'js_conventions' ,
  controller: 'JSConventions'
});

// js mithril conventions
Router.route('/javascript/mithril-conventions', {
  name: 'js_mithril_conventions' ,
  controller: 'JSMithrilConventions'
});

// js components index
Router.route('/javascript/components', {
  name: 'js_components',
  controller: 'JSComponents'
});

// js components show
Router.route('/javascript/components/:id', {
  name: 'js_components_show',
  controller: 'JSComponentsShow'
});

// js unit testing
Router.route('/javascript/unit-testing', {
  name: 'js_unit_testing',
  controller: 'JSUnitTesting'
});

// js but page
Router.route('/javascript/buy', {
  name: 'js_buy',
  controller: 'JSBuy'
});

// js reading
Router.route('/javascript/reading', {
  name: 'js_reading',
  controller: 'JSReading'
});
