'use strict';

vhxm.components.shared.avatar.ui = {
  view: function view(ctrl, opts) {
    return m('span.avatar.color-teal.avatar--' + (opts.size ? opts.size : 'medium'), [m('span.avatar-user.user-avatar', {
      style: {
        backgroundImage: 'url(' + opts.image + ')'
      }
    })]);
  }
};
