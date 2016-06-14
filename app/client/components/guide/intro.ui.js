'use strict';

Q.components.shared.guide.intro.ui.container = {
  controller: function(opts) {},
  view: function(ctrl, opts) {
    return m('header', [
      opts.title ?
        m('h3.head-3.head--navy.text--bold', opts.title) : '',
      opts.intro ?
        m('div.margin-vert-large', [
          m('.margin-bottom-medium.text-2', m.trust(opts.intro))
        ]) : ''
    ]);
  }
};