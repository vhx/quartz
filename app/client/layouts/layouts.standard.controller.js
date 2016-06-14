'use strict';

Q.layouts.standard.controller = function(opts) {
  let self = this;

  self.init = function() {
    if (m.route.param('style')) {
      // Q.models.getStyleDoc(m.route.param('style'));
    }
    // if (m.route.param('js')) {
    //   Q.models.getScriptDoc(m.route.param('js'));
    // }
    // $(window).on('resize', function() {
    //   $('.row.fill-width').each(function() {
    //     var arr = [],
    //         bars = $(this).find('.code-bar, .guide-bar');
    //
    //     bars.height('');
    //     $(this).children('.small-8').each(function() {
    //       arr.push($(this).height());
    //     });
    //
    //     bars.height(_.max(arr));
    //   });
    // });
    //
    // $(window).trigger('resize');
  };

  if (opts.init) {
    self.init();
  }
};