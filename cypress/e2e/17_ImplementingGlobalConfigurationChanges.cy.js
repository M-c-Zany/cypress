/// <reference types="cypress"/>

let data;

// Handling web controls UI using Cypress
describe("Parameterizing the test Data from Json files using each command", () => {
    // Setting up the test environment before each test case
    beforeEach(()=> {
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
        data.productName.forEach((element) => {
            // Call a custom Cypress command 'SelectProduct' and pass the current product name
            cy.SelectProduct(element);
        });

        // Clicking on the checkout button
        cy.contains("Checkout").click();
        cy.wait(2000);
        cy.contains("Checkout").click();

        // Getting the Selector for dropdown and selecting India
        cy.get("#country").type("India");

        // Selecting the option by clicking on the dropdown
        cy.get('.suggestions > ul > li > a').click();
    });
});
