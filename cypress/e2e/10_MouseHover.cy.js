/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("Hover Mouse", () => {

    // Setting up the test environment before each test case
    beforeEach(() => {
        // Set viewport size
        cy.viewport(1920, 1080);
        // Visit the specified URL
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
  
    // Test case for Hovering Mouse using "invoke" to show hidden element
    it("Hover Mouse", () => {
        // Use cy.get to select an element with class "mouse-hover-content" and invoke the "show" method to make it visible
        cy.get(".mouse-hover-content").invoke("show");
        // Click on the element containing the text "Top"
        cy.contains("Top").click();
        // Assert that the current URL includes the string "top"
        cy.url().should("include", "top");
    });

    // Another test case for Hovering Mouse using {force:true} option
    it("Hover Mouse", () => {
        // Click on the element containing the text "Top" and force the click even if the element is hidden or covered by other elements
        cy.contains("Top").click({ force: true });
        // Assert that the current URL includes the string "top"
        cy.url().should("include", "top");
    });
});
