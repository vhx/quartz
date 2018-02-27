vhxm.components.shared.avatar.ui = {
  view: function(ctrl, opts) {
    return m('span.new-avatar.color-teal.avatar--' + (opts.size ? opts.size : 'medium' ), [
      m('span.default-avatar', opts.initial),
      m('span.avatar-user.user-avatar', {
        style: {
          backgroundImage: 'url(' + opts.image + ')'
        }
      })
    ]);
  }
};