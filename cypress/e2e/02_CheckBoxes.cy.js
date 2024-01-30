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

  // Test case for handling checkboxes
  it("CheckBoxes", () => {
    // Checkbox 1
    cy.get("#checkBoxOption1")
      .check() // Check the checkbox
      .should("be.checked") // Assert that the checkbox is checked
      .and("have.value", "option1"); // Assert that the checkbox has the value "option1"
    
    cy.get("#checkBoxOption1")
      .uncheck() // Uncheck the checkbox
      .should("not.be.checked"); // Assert that the checkbox is not checked

    // Check multiple checkboxes with values "option1" and "option2"
    cy.get("input[type='checkbox']").check("option1", "option2");
  });
});
