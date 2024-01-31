Cypress.Commands.add("SelectProduct", (ProductName) => {
  // Get all elements with class "card-title"
  cy.get(".card-title").each(($el, index, $list) => {
    // Check if the text of the element includes the specified ProductName
    if ($el.text().includes(ProductName)) {
      // If it includes, click the corresponding button with class "btn-info"
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
  // Add a comment to indicate the end of the command
  // (optional, but can be helpful in larger scripts)
  cy.log("Product selection completed");
});

Cypress.Commands.add("LoginAPI", () => {
  cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
    userEmail: "dudekula.khaja9346@gmail.com",
    userPassword: "Kh@jash@el20!00",
  })
  .then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env("token", response.body.token);
  });
});
// Define a custom Cypress command named "LoginAPI"
// Use the Cypress command "cy.request" to send a POST request to the login API endpoint
// Provide user credentials in the request payload
// Use the "then" promise handler to handle the response
// Assert that the HTTP status code of the response is equal to 200
// Set the authentication token from the response body in Cypress environment variables

// cypress/support/commands.js

const csvToJson = require('csvtojson');

Cypress.Commands.add('convertCsvToJson', (csvFilePath, jsonFilePath) => {
  cy.readFile(csvFilePath).then((csvData) => {
    return csvToJson().fromString(csvData);
  }).then((jsonData) => {
    cy.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2));
  });
});
