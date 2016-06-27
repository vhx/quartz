vhxm.components.shared.filter.ui.date = {
  controller: function(opts) {
    return new vhxm.components.shared.filter.date.controller(opts);
  },
  view: function(ctrl, opts) {
    return m('.c-filter--date.padding-medium', [
      m('a.icon-calendar-navy.icon--small.icon--left.border.radius.fill-width.inline.padding-small.text-center', 'January 1, 2014'),
      m('span.block.text-center.padding-vert-small', 'to'),
      m('a.icon-calendar-navy.icon--small.icon--left.border.radius.fill-width.inline.padding-small.text-center', 'January 1, 2014'),
    ]);
  }
};