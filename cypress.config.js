const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bsbj15',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Relatorio Mocha Awesome'
    },
    baseUrl: "http://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
    // implement node event listeners here
       require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
