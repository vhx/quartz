// for route /styleguide/layout
Q.components.route.styleguide.ui.layout = {
  items: [
    {
      guide: m.component(Q.components.guide.styleguide.ui.grid.container),
      code: Q.code.grid
    },
    {
      guide: m.component(Q.components.guide.styleguide.ui.display.container),
      code: Q.code.display
    },
    {
      guide: m.component(Q.components.guide.styleguide.ui.images.container),
      code: Q.code.images
    },
    {
      guide: m.component(Q.components.guide.styleguide.ui.spacing_sizes.container),
      code: Q.code['spacing-sizes']
    },
    {
      guide: m.component(Q.components.guide.styleguide.ui.spacing_positions.container),
      code: Q.code['spacing-positions']
    }
  ]
};