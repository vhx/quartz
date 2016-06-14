'use strict';

Q.components.shared.guide.color.ui.container = {
  controller: function(opts) {},
  view: function(ctrl, opts) {
    return m('inline.margin-right-medium.margin-bottom-medium' + (opts.css ? opts.css : ''), [
      m('span.square.square--large.' + opts.name + (opts.inner_css ? opts.inner_css : ''), [
        m('span.square-tag.tag.text-3', opts.name)
      ])
    ]);
  }
};