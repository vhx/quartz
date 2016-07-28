'use strict';

vhxm.components.shared.size.state = {
  media: m.prop(null),
  mediumUp: m.prop(null),
  largeUp: m.prop(null),
  smallOnly: m.prop(null),
  smallToMedium: m.prop(null),
  mediumOnly: m.prop(null),
  smediumOnly: m.prop(null),
  largeOnly: m.prop(null)
};

$(window).on('resize', function () {
  m.startComputation();
  var size = window.getComputedStyle(document.body, ':after').getPropertyValue('content').replace(/['"]/g, '');
  vhxm.components.shared.size.state.media(size);
  vhxm.components.shared.size.state.mediumUp(!!size.match(/medium|large/));
  vhxm.components.shared.size.state.smallToMedium(!!size.match(/small|smedium|medium/));
  vhxm.components.shared.size.state.largeUp(!!size.match(/large|xlarge/));
  vhxm.components.shared.size.state.smallOnly(size === 'small');
  vhxm.components.shared.size.state.mediumOnly(size === 'medium');
  vhxm.components.shared.size.state.smediumOnly(size === 'smedium');
  vhxm.components.shared.size.state.largeOnly(!!size.match(/large/));
  m.endComputation();
});

$(window).trigger('resize');
