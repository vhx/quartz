/* ................................................
  Media Item Component
.................................................*/
vhxm.components.shared.select.ui.item_media = {
  view: function(c, params) {
    let item = params.item;
    let index = params.index;
    let ctrl = params.ctrl;
    let opts = params.opts;

    return m('.c-media-item--container.padding-horz-medium.padding-vert-small.clearfix', [
      m('.c-media-item--image-container.left', [
        m('img.c-media-item--image.radius.margin-right-medium', {
          src: item.img_src,
          width: 70,
          height: 40
        })
      ]),
      m('.c-media-item--content.clearfix.left', [
        m('p.text--navy', item.title),
        m('p.text--gray', item.detail)
      ]),

      // by default ctrl.state.selected().value isn't array
      // so on first click, make it one, then do some checks as needed
      m('.c-media-item--action.clearfix.right', [
        m('.c-item-toggle.icon--xsmall.icon-check-navy.border' + (Array.isArray(ctrl.state.selected().value) && (ctrl.state.selected().value.indexOf(item[opts.value_prop]) > -1) ? '.icon-plus-navy' : '.is-selected.icon-check-navy'), {
          onclick: function() {
            if (!Array.isArray(ctrl.state.selected().value)) {
              ctrl.state.selected().value = [];
            }

            if (ctrl.state.selected().value.indexOf(item[opts.value_prop]) > -1) {
              ctrl.state.selected().value.splice(ctrl.state.selected().value.indexOf(item[opts.value_prop]), 1);
            }
            else {
              ctrl.state.selected().value.push(item[opts.value_prop]);
            }

          }
        })
      ])
    ]);
  }
};
