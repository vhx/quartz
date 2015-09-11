_.max = function( array ){
  return Math.max.apply( Math, array );
};

Meteor.startup(function(){
  $(window).on('resize', function() {
    $('.row.fill-width').each(function() {
      var arr = [],
          bars = $(this).find('.code-bar, .guide-bar');

      bars.height('');
      $(this).children('.small-8').each(function() {
        arr.push($(this).height());
      });

      bars.height(_.max(arr));
    });
  });

  for (var property in Template){
    if (Blaze.isTemplate(Template[property])) {
      var template= Template[property];
      template.onRendered(function(){
        $(window).trigger('resize');
      });
    }
  }
});
