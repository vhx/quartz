'use strict';

Q.components.shared.guide.block.ui.container = {
  controller: function(opts) {},
  view: function(ctrl, opts) {
    return m('div.margin-vert-large', [
      m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', opts.title),
      opts.description ?
        m('div.text-contain.text-2', [
          m('p', opts.description)
        ]) : '',
      opts.component ?
        m.component(opts.component) : ''
    ]);
  }
};