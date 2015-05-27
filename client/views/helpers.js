Template.registerHelper('isActiveRoute', function (route_name) {
  if (Router.current().route.getName() === route_name) {
    return 'is-active';
  }
});