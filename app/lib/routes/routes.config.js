Router.configure({
  layoutTemplate: 'app_layout',
  onBeforeAction: function() {
    $('body').scrollTop(0);
    this.next();
  }
});