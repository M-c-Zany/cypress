/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("Building a custom command", () => {
    // Setting up the test environment before each test case
    beforeEach(() => {
      // Set viewport size
      cy.viewport(1920, 1080);
      // Visit the specified URL
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
    });
  
    // Test case for adding products to the cart using custom command
    it("Add products to the cart", () => {
      // Clicking on the shop button in the navigation menu
      cy.get(".nav-link").contains("Shop").click();
  
      // Using custom command to add products to the cart
      cy.SelectProduct("iphone X");
      cy.SelectProduct("Samsung Note 8");
      cy.SelectProduct("Nokia Edge");
      cy.SelectProduct("Blackberry");
  
      // Verify the products are added to the cart (You may add additional assertions)
      cy.get(".nav-link.btn.btn-primary").contains("Checkout").should('be.visible');
    });
  });
  
  