'use strict';

vhxm.components.shared.checkbox.ui.container = {
  view: function view(ctrl, opts) {
    return m('fieldset.checkbox.' + (opts.size ? opts.size : 'medium') + (opts.type === 'toggle' ? '.alt' : ''), [m('input[type=checkbox]', {
      checked: opts.checked,
      name: opts.name,
      value: opts.value,
      onchange: opts.onchange,
      id: opts.name
    }), m('label', {
      for: opts.name
    }, [opts.type === 'toggle' ? m('span.checkbox--contain', [m('span.checkbox--icon'), m('span.checkbox--circle', [m('i.circle-top', m.trust('<span></span>')), m('i.circle-bottom', m.trust('<span></span>'))]), m('span.checkbox--label')]) : m('span.checkbox--contain', [m('span.checkbox--icon', [m('span.checkbox-animate')]), opts.label ? m('span.checkbox--label', opts.label) : ''])])]);
  }
};
