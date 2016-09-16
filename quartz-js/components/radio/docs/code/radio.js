// horizontal gray radio
m.component(vhxm.components.shared.radio.ui.container, {
  color: 'gray',
  name: 'horz-gray',
  items: [
    {
      label: 'This',
      value: 'this',
      checked: true
    },
    {
      label: 'That',
      value: 'that'
    }
  ]
});

// stacked teal radio
m.component(vhxm.components.shared.radio.ui.container, {
  color: 'teal',
  stacked: true,
  name: 'horz-teal',
  items: [
    {
      label: 'Here',
      value: 'here',
      checked: true
    },
    {
      label: 'There',
      value: 'there'
    }
  ]
});

// stacked teal button
m.component(vhxm.components.shared.radio.ui.container, {
  color: 'teal',
  buttons: true,
  name: 'stacked-button',
  items: [
    {
      // no descriptor
      label: 'Choice A',
      value: 'a',
      checked: true
    },
    {
      // title and descriptor
      label: {
        title: 'Choice B',
        descriptor: 'Descriptor'
      },
      value: 'b'
    }
  ]
});