'use strict';

Q.components.shared.block.ui.container = {
  view: function(ctrl, opts) {
    return m('div.margin-vert-large', [
      m('h4.margin-bottom-medium.padding-bottom-small.border-bottom.border--gray-light.text--bold.text--gray', m.trust(opts.title)),
      opts.description ?
        m('div.text-contain.text-2', m.trust(opts.description)) : '',
      opts.component ?
        m.component(opts.component) : ''
    ]);
  }
};