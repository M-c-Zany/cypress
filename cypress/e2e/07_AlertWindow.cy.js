/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("Validating the alert window", () => {

    // Setting up the test environment before each test case
    beforeEach(() => {
      // Set viewport size
      cy.viewport(1920, 1080);
      // Visit the specified URL
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
  
    // Test case for handling the Alert window
    it("Alert Window", () => {
      // Triggering a click on the element with ID "alertbtn"
      cy.get("#alertbtn").click();
  
      // Listening for the window:alert event to capture the alert message
      cy.on("window:alert", (str) => {
        // Asserting that the alert message is as expected
        expect(str).to.equal("Hello , share this practice page and share your knowledge");
      });
    });
  
    // Test case for handling the Confirm window
    it("Confirm Window", () => {
      // Triggering a click on the element with ID "confirmbtn"
      cy.get("#confirmbtn").click();
  
      // Listening for the window:confirm event to capture the confirm message
      cy.on("window:confirm", (str) => {
        // Asserting that the confirm message is as expected
        expect(str).to.equal("Hello , Are you sure you want to confirm?");
      });
    });
  });
  