const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents,
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://www.demoblaze.com",
    chromeWebSecurity: false,
    reporter: "mocha-junit-reporter",
    reporterOptions: {
      mochaFile: "cypress/results/test-results-[hash].xml",
      toConsole: true
    }
  },
});


