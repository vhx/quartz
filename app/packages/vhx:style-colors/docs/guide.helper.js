Template.guide__style_colors.helpers({
  core_bw_colors: function() {
    return [
      { name: 'white', css: 'bg-grid-dark', sub_css: 'box-shadow' },
      { name: 'white-transparent', css: 'bg-grid-dark' },
      { name: 'black' },
      { name: 'black-transparent', css: 'bg-grid-light' }
    ];
  },

  core_gray_colors: function() {
    return [
      { name: 'gray-1' },
      { name: 'gray-2' },
      { name: 'gray-3' },
      { name: 'gray-4' },
      { name: 'gray-5' },
      { name: 'gray-6' },
      { name: 'gray-7' },
      { name: 'gray-8' }
    ];
  },

  core_other_colors: function() {
    return [
      { name: 'teal-1' },
      { name: 'teal-2' },
      { name: 'teal-3' },
      { name: 'red' },
      { name: 'navy' },
      { name: 'navy-transparent', css: 'bg-grid-light' },
    ];
  }
});

Template.guide__style_brand_colors.helpers({
  brand_colors: function() {
    return [
      { name: 'orange' },
      { name: 'debian' },
      { name: 'purple' },
      { name: 'currant' },
      { name: 'blue' },
      { name: 'teal' },
      { name: 'green' },
      { name: 'yellow' }
    ];
  }
});

Template.guide__style_external_colors.helpers({
  external_colors: function() {
    return [
      { name: 'facebook-blue' },
      { name: 'twitter-blue' },
      { name: 'tumblr-blue' },
      { name: 'paypal-blue' },
      { name: 'roku-purple' }
    ];
  }
});
