/* ROOT CONTROLLERS
.................................................*/

// home
Home = RouteController.extend({
  template: 'home',
  layoutTemplate: 'app_layout',
  waitOn: function () {},
  data: function() {},
  action: function () {
    this.render();
  }
});
