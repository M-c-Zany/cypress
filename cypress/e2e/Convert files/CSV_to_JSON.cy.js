
// 1. First, install the `csvtojson` library, which is a convenient tool for converting CSV to JSON in Node.js:
// npm install csvtojson
// 2. Create a Cypress custom command to read the CSV file and convert it to JSON. In your Cypress project, create a file, for example, `commands.js` in the `cypress/support` directory:
// cypress/support/commands.js
const csvToJson = require('csvtojson');
Cypress.Commands.add('convertCsvToJson', (csvFilePath, jsonFilePath) => {
  cy.readFile(csvFilePath).then((csvData) => {
    return csvToJson().fromString(csvData);
  }).then((jsonData) => {
    cy.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2));
  });
});
// 3. Now, use this custom command in your Cypress test. For example, in one of your test files (`cypress/integration/your_test_spec.js`):
// cypress/integration/your_test_spec.js
describe('CSV to JSON conversion', () => {
  it('should convert CSV to JSON', () => {
    const csvPath = 'cypress/downloads/order-invoice_dudekula.khaja9346.csv';
    const jsonPath = 'cypress/downloads/order-invoice_dudekula.khaja9346.json';
    cy.convertCsvToJson(csvPath, jsonPath);
    // Perform additional assertions or actions as needed
  });
});
