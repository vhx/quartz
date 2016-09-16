'use strict';

vhxm.components.shared.tag.controller = function (opts) {
  var self = this;

  self.state = new vhxm.components.shared.tag.state();
};
vhxm.components.shared.tag.state = function () {
  this.isHover = m.prop(false);
  this.isRemoveHover = m.prop(false);
};

vhxm.components.shared.tag.ui.container = {
  controller: vhxm.components.shared.tag.controller,
  view: function view(ctrl, opts) {
    return m('span.inline.relative.c-tag' + (ctrl.state.isHover() ? '.is-hover' : ''), {
      onmouseover: function onmouseover() {
        ctrl.state.isHover(true);
      },
      onmouseout: function onmouseout() {
        ctrl.state.isHover(false);
      }
    }, [m('button.c-tag--button' + (ctrl.state.isHover() ? '.btn-teal.is-hover' : '.btn-gray'), {
      onclick: function onclick() {
        ctrl.state.onShow();
      }
    }, opts.label ? opts.label : 'Tag'), m('a.c-tag--remove.icon--center.icon-x-white.icon--xxsmall' + (ctrl.state.isRemoveHover() ? '.btn-red' : '.btn-teal'), {
      onclick: function onclick() {
        ctrl.state.onRemove();
      },
      onmouseover: function onmouseover() {
        ctrl.state.isRemoveHover(true);
      },
      onmouseout: function onmouseout() {
        ctrl.state.isRemoveHover(false);
      }
    })]);
  }
};
