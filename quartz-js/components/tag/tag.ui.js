vhxm.components.shared.tag.ui.container = {
  controller: vhxm.components.shared.tag.controller,
  view: function(ctrl, opts) {
    return m('span.inline.relative.c-tag' + (ctrl.state.isHover() ? '.is-hover' : ''), {
      onmouseover: function() {
        ctrl.state.isHover(true);
      },
      onmouseout: function() {
        ctrl.state.isHover(false);
      }
    }, [
      m('button.c-tag--button' + (ctrl.state.isHover() ? '.btn-teal.is-hover' : '.btn-gray'), {
        onclick: function() {
          ctrl.state.onShow();
        }
      }, (opts.label ? opts.label : 'Tag')),
      m('a.c-tag--remove.icon--center.icon-x-white.icon--xxsmall' + (ctrl.state.isRemoveHover() ? '.btn-red' : '.btn-teal'), {
        onclick: function() {
          ctrl.state.onRemove();
        },
        onmouseover: function() {
          ctrl.state.isRemoveHover(true);
        },
        onmouseout: function() {
          ctrl.state.isRemoveHover(false);
        }
      })
    ]);
  }
};