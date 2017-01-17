'use strict';

vhxm.components.shared.radio.controller = function (opts) {
  var self = this;

  self.state = new vhxm.components.shared.radio.state();

  opts.items.map(function (item) {
    if (item.checked) {
      self.state.isChecked(item.value);
    }
  });

  if (!self.state.isChecked()) {
    self.state.isChecked(opts.items[0].value);
  }
};

vhxm.components.shared.radio.state = function () {
  this.isChecked = m.prop(null);
};
vhxm.components.shared.radio.ui.container = {
  controller: vhxm.components.shared.radio.controller,
  view: function view(ctrl, opts) {
    return m('form.form', [m('ul.radio-' + (opts.color ? opts.color : 'teal') + (opts.stacked ? '.radio--stacked' : opts.buttons ? '.radio--buttons' : ''), [opts.items.map(function (item, index) {
      var is_checked = ctrl.state.isChecked() === item.value;
      return m('li', [m('input', {
        id: opts.name + '-' + index,
        type: 'radio',
        onchange: function onchange(event) {
          ctrl.state.isChecked(item.value);
          if (opts.onchange) {
            opts.onchange(event);
          }
        },
        name: opts.name,
        value: item.value,
        checked: is_checked
      }), m('label' + (opts.buttons ? '.btn-' + (is_checked ? 'teal' : 'gray') + '.btn--fill.btn-radio.margin-bottom-medium' : ''), {
        for: opts.name + '-' + index
      }, [m.component(vhxm.components.shared.radio.ui.icon), m('span.radio--label.text-left' + (opts.buttons ? '.padding-left-small' : ''), {
        style: {
          marginTop: !opts.buttons || opts.buttons && item.label.title ? '0px' : '8px'
        }
      }, opts.buttons ? [m('strong.text-2' + (is_checked ? '.text--white' : '.text--navy'), item.label.title ? item.label.title : item.label), item.label.descriptor ? m('p.text-4' + (is_checked ? '.text--white' : ''), item.label.descriptor) : ''] : item.label)]), item.template ? m('div.clear.padding-top-xsmall', [item.template]) : '']);
    })])]);
  }
};

vhxm.components.shared.radio.ui.icon = {
  view: function view() {
    return m('span.radio--icon', [m('i.circle-top', [m('span')]), m('i.circle-bottom', [m('span')])]);
  }
};
