/* ................................................
  Media Item Component
.................................................*/
vhxm.components.shared.select.ui.media_item.container = {
  controller: function(opts) {},
  view: function(ctrl, opts) {
    return m('div.media-items', [
      opts.items.map(function(item) {
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
          m('.c-media-item--action.clearfix.right', [
            // checkmark component here
          ])
        ])
      })
    ]);
  }
};
