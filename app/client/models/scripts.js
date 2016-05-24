Q.models.data.scripts = m.prop(null);

Q.models.getScripts = function() {
  Q.models.data.scripts({
    mithril: [
      { guide: 'guide__js_mithril_intro', code:'code__js_mithril_intro' },
      { guide: 'guide__js_mithril_folders', code:'code__js_mithril_folders' },
      { guide: 'guide__js_mithril_order', code:'code__js_mithril_order' },
      { guide: 'guide__js_mithril_namespace', code:'code__js_mithril_namespace' },
      { guide: 'guide__js_mithril_layouts', code:'code__js_mithril_layouts' },
      { guide: 'guide__js_mithril_components', code:'code__js_mithril_components' },
      { guide: 'guide__js_mithril_models', code:'code__js_mithril_models' },
      { guide: 'guide__js_mithril_requests', code:'code__js_mithril_requests' },
      { guide: 'guide__js_mithril_api', code:'code__js_mithril_api' }
    ]
  });
};