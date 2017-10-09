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
      m('button.c-tag--button' + (ctrl.state.isHover() ? '.btn-vimeo-blue.is-hover' : '.btn-vimeo-secondary') + (ctrl.state.isProcessing() ? '.is-processing': ''), {
        onclick: function(event) {
          event.preventDefault();
          ctrl.state.onShow(event);
        }
      }, (opts.label ? ctrl.formatLabelString(opts) : 'Tag')),
      m('a.c-tag--remove.icon--center.icon-x-white.icon--xxsmall' + (ctrl.state.isRemoveHover() ? '.btn-vimeo-red' : '.btn-vimeo-blue'), {
        onclick: function(event) {
          event.preventDefault();
          ctrl.state.onRemove(event);
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
