/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("CheckBoxes, Static DropDowns, Dynamic DropDowns, Visible And Invisible Elements ", () => {

  // Setting up the test environment before each test case
  beforeEach(() => {
    // Set viewport size
    cy.viewport(1920, 1080);
    // Visit the specified URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  // Test case for handling visible and invisible elements
  it("Visible And Invisible Elements", () => {
    // Assert that the element with ID "displayed-text" is initially visible
    cy.get("#displayed-text").should("be.visible");

    // Click on the hide button to hide the element
    cy.get("#hide-textbox").click();

    // Assert that the element with ID "displayed-text" is not visible after clicking hide
    cy.get("#displayed-text").should("not.be.visible");

    // Clicking on the show button to make the element visible again
    cy.get("#show-textbox").click();

    // Assert that the element with ID "displayed-text" is visible again after clicking show
    cy.get("#displayed-text").should("be.visible");
  });
});
