/// <reference types="cypress"/>

let data; // Declare 'data' variable using let, to be used for storing test data

// Handling web controls UI using Cypress
describe("Parameterizing the test Data from Json files using each command", () => {
    // Setting up the test environment before each test case
    beforeEach(() => {
      // Set viewport size
      cy.viewport(1920, 1080);
      // Visit the specified URL
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
      // Load data from the fixture file and set it to the 'data' variable
      cy.fixture("products.json").then((products) => {
        data = products; // Assign the loaded data to the 'data' variable
      });
    });
  
    it("Parameterizing the test Data from Json files using each command", () => {
        // Click on the second navigation link
        cy.get(':nth-child(2) > .nav-link').click();
        
        // Iterate over each product name in the 'productName' array from the loaded data
        data.productName.forEach(element => {
            // Call a custom Cypress command 'SelectProduct' and pass the current product name
            cy.SelectProduct(element);
        });
    });
});
