/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("Child Tabs & Combinations", () => {

    // Setting up the test environment before each test case
    beforeEach(() => {
      // Set viewport size
      cy.viewport(1920, 1080);
      // Visit the specified URL
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
  
    // Test case for handling checkboxes
    it("Child Tab Or External Tab", () => {
      cy.get('#opentab').invoke("removeAttr","target").click();
      cy.origin("https://www.qaclickacademy.com/",()=>{
        cy.get('.navbar-nav.ml-auto [href="about.html"]').click();
        cy.get('.section-title.mt-50 h2').should("contain",'Welcome to QAClick Academy ')
      })
    });
  });
  