//--requests--

// config for setting headers
vhxm.models.config = function(request) {
  request.setRequestHeader('Authorization', 'Bearer ' + TOKEN);
};

// handle errors
vhxm.models.handleError = function(error) {};

// populate model on successful response
vhxm.models.populate = function(data, model) {
  $.each(data, function(key, item) {
    data[key] = m.prop(item);
  });

  model(data);
});

// using the above in a model method
vhxm.models.listCollections = function() {
  m.request({
    method: 'GET',
    url: 'http://apia.vhx.tv/collections',
    config: vhxm.models.config
  }).then(function(data) {
    vhxm.models.populate(data, vhxm.models.collections().list);
  }, vhxm.models.handleError);
};