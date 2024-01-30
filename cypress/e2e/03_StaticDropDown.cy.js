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

  // Test case for handling static dropdowns
  it("Static DropDowns", () => {
    // Selecting the option with value "option1" from the first select element
    cy.get("select").select("option1").and("have.value", "option1");

    // Selecting the option with value "option1" from the dropdown with ID "dropdown-class-example"
    cy.get("#dropdown-class-example")
      .select("option1")
      .and("have.value", "option1");

    // Selecting the option with value "option2" from the dropdown with ID "dropdown-class-example"
    cy.get("#dropdown-class-example")
      .select("option2")
      .and("have.value", "option2");

    // Selecting the option with value "option3" from the dropdown with ID "dropdown-class-example"
    cy.get("#dropdown-class-example")
      .select("option3")
      .and("have.value", "option3");
  });
});
