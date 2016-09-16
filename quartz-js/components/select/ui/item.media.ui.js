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
          src: item[opts.img_prop],
          width: 70,
          height: 40
        })
      ]),
      m('.c-media-item--content.clearfix.left', [
        m('p.text--navy', item[opts.label_prop]),
        m('p.text--gray', item[opts.descriptor_prop])
      ]),
      m('.c-media-item--action.clearfix.right', [
        m('.c-item-toggle.icon--xsmall.icon-check-navy.border' + (ctrl.state.selected() && ctrl.state.selected()[item[opts.key_prop]] ? '.is-selected.icon-check-navy' : '.icon-plus-navy'), {
          onclick: function(event) {
            ctrl.handleItemClick(event, item);
          }
        })
      ])
    ]);
  }
};
