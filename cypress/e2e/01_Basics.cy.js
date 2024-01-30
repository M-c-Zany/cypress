/// <reference types="cypress"/>

// Describe block for Greenkart test cases
describe('Greenkart', () => {
  
  // Test case
  it('Test cases', () => {
    // Set viewport size
    cy.viewport(1920, 1080);

    // Visit Greenkart website
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Click on the search button and search for "ca"
    cy.get('.search-keyword').click().type("ca");

    // Check the number of visible products with class 'product'
    cy.get('.product:visible').should("have.length", 4);

    // 
    cy.get(".products").as("productElement")

    // Check the number of products within the 'products' class
    cy.get("@productElement").find(".product").should("have.length", 4);

    // Click on "ADD TO CART" button for the second product
    cy.get("@productElement").find(".product").eq(1).contains("ADD TO CART").click();

    // Loop through each product and perform actions based on product name
    cy.get("@productElement").find(".product").each(($e1, index, $list) => {
      // Get the text content of the product name
      const h4value = $e1.find("h4.product-name").text();

      // Check if the product name includes "Cashews"
      if (h4value.includes("Cashews")) {
        // Click on the button within the current product
        cy.wrap($e1).find("button").click();
        // Log a message indicating that the element is found
        cy.log("element found");
      } else {
        // Log a message indicating that the element is not found
        cy.log("element not found");
      }
    });

    cy.get(".brand").then((logoElement)=>{
      cy.log((logoElement).text())
    })

    cy.get(".brand").should("have.text","GREENKART");

    
    // Clicking on the back to proceed to checkout
    cy.get('.cart-icon > img').click();

    // Clicking on the proceed to checkout button
    cy.contains("PROCEED TO CHECKOUT").click();

    // Clicking on the place order button
    cy.contains("Place Order").click();
  });
});
