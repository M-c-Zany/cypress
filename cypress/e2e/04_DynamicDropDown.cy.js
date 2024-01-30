/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("CheckBoxes, Static DropDowns, Dynamic DropDowns, Invisible Elements ", () => {

  // Setting up the test environment before each test case
  beforeEach(() => {
    // Set viewport size
    cy.viewport(1920, 1080);
    // Visit the specified URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  // Test case for handling dynamic dropdown
  it.only("Dynamic DropDown", () => {
    // Typing "Ind" into the autocomplete input field
    cy.get("#autocomplete").type("Ind");

    // Iterating over each element with class "ui-menu-item div" (dropdown options)
    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
      // Checking if the text of the current option is "India"
      if ($e1.text() === "India") {
        // Clicking on the option if it matches "India"
        cy.wrap($e1).click();
      }
    });

    // Asserting that the autocomplete input field has the value "India"
    cy.get("#autocomplete").should("have.value", "India");
  });
});
