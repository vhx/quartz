//--api integration--

vhxm.models.collections = {
  list: m.prop(null)
};

m.initApi('collections');

vhxm.models.listCollections = function() {
  app.api.list({}, vhxm.models.collections.list, function() {
    // callback
  });
};