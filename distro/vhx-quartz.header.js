'use strict';

vhxm.components.shared.header.ui.container = {
  view: function view(ctrl, opts) {
    var has_border = opts.border === false ? false : true;

    return m('header.row.padding-bottom-medium' + (has_border ? '.border-bottom' : ''), [m('.column.small-16.medium-8.large-10', [m('.media', [m('.media-unit.text-top', [m('i.icon.icon--large.icon-' + opts.icon)]), m('.media-unit.media-fill.padding-left-medium', [m('h2.head-3', opts.title), m('p.text.primary.small-margin-bottom-small', opts.description ? opts.description : '')])])]), m('.column.small-16.medium-8.large-6.text-right', opts.buttons ? opts.buttons : '')]);
  }
};
