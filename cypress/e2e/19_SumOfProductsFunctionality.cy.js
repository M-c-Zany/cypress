/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("Building a custom command", () => {
    // Setting up the test environment before each test case
    beforeEach(() => {
      // Set viewport size
      cy.viewport(1920, 1080);
      // Visit the specified URL
      cy.visit(Cypress.env("url")+"/angularpractice");
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
      cy.get(".nav-link.btn.btn-primary")
        .contains("Checkout")
        .should("be.visible")
        .click();
      
      // Summing the product amounts
      let sum = 0;
      cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount = $el.text();
        var res = amount.split(" ");
        res = parseFloat(res[1].trim()); // Convert to float
        sum += res;
        cy.log(res);
      });

      cy.log("Total amount: " + sum);

      // Additional assertions or actions with the sum
      // For example, assert the total amount is correct
      cy.get('.text-right h3 strong').invoke('text').then((totalAmount) => {
        const formattedTotalAmount = parseFloat(totalAmount.split(" ")[1].trim());
        expect(sum).to.equal(formattedTotalAmount);
      });

      cy.wait(2000);
      cy.contains("Checkout").click();
  
      // Getting the Selector for dropdown and selecting India
      cy.get("#country").type("India");
  
      // Selecting the option by clicking on the dropdown
      cy.get(".suggestions > ul > li > a").click();
      cy.get("#checkbox2").check({ force: true });
      cy.get(".btn.btn-success.btn-lg").click();
    });
  });
