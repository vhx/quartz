//--getting/setter--

// set to some default value on creation
var example = m.prop('default_value');

// now you can get
example();

// or set
example('new_value');


//--simple example model--

vhxm.models.collections = {
  list: m.prop(null),
  doc: m.prop(null),
  docItems: m.prop(null)
};

vhxm.models.listCollections = function() {
  // retrieve listing from api/backend
  // and populate vhxm.models.collections.list()
};
vhxm.models.retrieveCollection = function() {
  // retrieve doc from api/backend
  // and populate vhxm.models.collections.doc()
};
vhxm.models.retrieveItems = function() {
  // retrieve doc items from api/backend
  // and populate vhxm.models.collections.docItems()
};