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