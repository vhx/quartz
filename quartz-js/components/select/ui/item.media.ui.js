/* ................................................
  Media Item Component
.................................................*/
vhxm.components.shared.select.ui.item_media = {
  view: function(c, params) {
    let item  = params.item;
    let index = params.index;
    let ctrl  = params.ctrl;
    let opts  = params.opts;

    return m('.c-media-item--container.padding-horz-medium.padding-vert-small.clearfix' + (index === ctrl.state.highlightIndex() ? '.is-selected' : ''), {
      config: function(el) {
        ctrl.state.optionHeight($(el).outerHeight());
      },
      onmouseover: function() {
        ctrl.state.highlightIndex(index);
      },
      onclick: function(event) {
        ctrl.handleItemClick(event, item);
      }
    }, [
      m('.c-media-item--image-container.left', [
        m('div.c-media-item--image.radius.margin-right-medium.img', {
          style: {
            width: '70px',
            height: '40px',
            backgroundImage: 'url(' + item[opts.prop_map.image] + ')'
          }
        })
      ]),
      m('.c-media-item--content.clearfix.left', [
        m('p.text--navy.line-medium.truncate.block', ctrl.formatLabelString({
          label: item[opts.prop_map.label],
          label_length: opts.label_length
        })),
        m('p.text--gray.line-medium.truncate.block', item[opts.prop_map.descriptor])
      ]),
      ctrl.parent.multiselect ? m('.c-media-item--action.clearfix.right', [
        ctrl.state.isProcessing().indexOf(item[opts.prop_map.value]) >= 0 ?
        m('.c-item-toggle.loader-white.loader--small') :
        m('.c-item-toggle.icon--xsmall.icon-check-navy.border' + (ctrl.state.selected() && ctrl.state.selected()[item[opts.prop_map.key]] ? '.is-selected.icon-check-navy' : '.icon-plus-thin-white'))
      ]) : ''
    ]);
  }
};
