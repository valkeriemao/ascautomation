const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9xwcu1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
