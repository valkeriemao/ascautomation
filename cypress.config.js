const { defineConfig } = require("cypress");
// import { defineConfig } from "cypress";

module.exports = defineConfig({
// export default defineConfig({
  projectId: '9xwcu1',  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
    //specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}"
  },
  env: {
    url: 'http://18.140.158.179:1313/'
  },
  viewportWidth: 1400,  
  viewportHeight: 900
});
