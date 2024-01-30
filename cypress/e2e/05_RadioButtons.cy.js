/// <reference types="cypress"/>
// Handling web controls UI using cypress
describe("CheckBoxes, Static DropDowns, Dynamic DropDowns, Visible And Invisible Elements, Radio Buttons", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });
  it("Presence of the DropDowns", () => {
    // Validate the existence of the fieldset
    cy.get("fieldset").should("exist");

    // // Validate the legend text
    // cy.get("fieldset legend").should("have.text", "Radio Button Example");

    // Validate the presence of radio buttons
    cy.get(".radioButton").should("have.length", 3);

    // Validate each radio button
    cy.get(".radioButton").eq(0).should("have.value", "radio1");
    cy.get(".radioButton").eq(1).should("have.value", "radio2");
    cy.get(".radioButton").eq(2).should("have.value", "radio3");
  });

  it("Should select a specific radio button", () => {
    // Select a specific radio button by value
    cy.get('.radioButton[value="radio2"]').check();

    // Validate that the selected radio button is checked
    cy.get('.radioButton[value="radio2"]').should("be.checked");
  });
  
  it("Should check all radio buttons and assert they are turned on", () => {
    // Get all radio buttons and iterate over them
    cy.get(".radioButton").each(($radioButton) => {
      // Check the current radio button
      cy.wrap($radioButton).check();

      // Assert that the checked status is true
      cy.wrap($radioButton).should("be.checked");
    });
  });
});
