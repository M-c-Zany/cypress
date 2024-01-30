/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("Completing End-to-End Test", () => {
    // Setting up the test environment before each test case
    beforeEach(() => {
      // Set viewport size
      cy.viewport(1920, 1080);
      // Visit the specified URL
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
    });
  
    // Test case for adding products to the cart using custom command
    it("Completing End-to-End Test", () => {
      // Clicking on the shop button in the navigation menu
      cy.get(".nav-link").contains("Shop").click();
  
      // Using custom command to add products to the cart
      cy.SelectProduct("iphone X");
      cy.SelectProduct("Samsung Note 8");
      cy.SelectProduct("Nokia Edge");
      cy.SelectProduct("Blackberry");
  
      // Verify the products are added to the cart (You may add additional assertions)
      cy.get(".nav-link.btn.btn-primary")
        .contains("Checkout")
        .should("be.visible")
        .click();
  
      cy.wait(2000);
      cy.contains("Checkout").click();
  
      // Getting the Selector for dropdown and selecting India
      cy.get("#country").type("India");
  
      // Selecting the option by clicking on the dropdown
      cy.get(".suggestions > ul > li > a").click();
      cy.get("#checkbox2").check({ force: true });
      cy.get(".btn.btn-success.btn-lg").click();
  
      // Asserting the success message
      cy.get(".alert").then((success_message) => {
        const actual_message = success_message.text();
        expect(actual_message.includes("Success")).to.be.true;
      });
    });
  });
  