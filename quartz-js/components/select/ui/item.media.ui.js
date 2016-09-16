/* ................................................
  Media Item Component
.................................................*/
vhxm.components.shared.select.ui.item_media = {
  view: function(c, params) {
    let item  = params.item;
    let index = params.index;
    let ctrl  = params.ctrl;
    let opts  = params.opts;

    return m('.c-media-item--container.padding-horz-medium.padding-vert-small.clearfix', [
      m('.c-media-item--image-container.left', [
        m('img.c-media-item--image.radius.margin-right-medium', {
          src: item[opts.prop_map.img],
          width: 70,
          height: 40
        })
      ]),
      m('.c-media-item--content.clearfix.left', [
        m('p.text--navy', item[opts.prop_map.label]),
        m('p.text--gray', item[opts.prop_map.descriptor])
      ]),
      m('.c-media-item--action.clearfix.right', [
        m('.c-item-toggle.icon--xsmall.icon-check-navy.border' + (ctrl.state.selected() && ctrl.state.selected()[item[opts.prop_map.key]] ? '.is-selected.icon-check-navy' : '.icon-plus-thin-white'), {
          onclick: function(event) {
            ctrl.handleItemClick(event, item);
          }
        })
      ])
    ]);
  }
};
