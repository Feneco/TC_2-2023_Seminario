import VueCytoscape from 'vue-cytoscape'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(VueCytoscape)
})
