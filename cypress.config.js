// cypress/support/index.js
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  config.db = {
    userName: "",
    password: "",
    server: "",
    options: {
      database: "",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  };

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  const tasks = sqlServer.loadDBPlugin(config.db);
  on('task', {
    ExcelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath), // Fix variable name
      });
      return result;
    }
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "q641ff",
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents,
  },
  env: {
    url: "https://rahulshettyacademy.com/",
  },
});
