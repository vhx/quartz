// for route /styleguide/colors
Q.components.route.styleguide.ui.colors = {
  items: [
    {
      guide: m.component(Q.components.guide.styleguide.ui.colors_core.container),
      code: Q.code['colors-core']
    },
    {
      guide: m.component(Q.components.guide.styleguide.ui.colors_brand.container),
      code: Q.code['colors-brand']
    },
    {
      guide: m.component(Q.components.guide.styleguide.ui.colors_external.container),
      code: Q.code['colors-external']
    },
    {
      guide: m.component(Q.components.guide.styleguide.ui.colors_tools.container),
      code: Q.code['colors-tools']
    }
  ]
};