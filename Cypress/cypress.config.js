const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl" : "https://gallery-app.vivifyideas.com/",
    "env" : {
      "validLogEmail" : "testiranje@test.com",
      "validLogPassword" : "12345678"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
