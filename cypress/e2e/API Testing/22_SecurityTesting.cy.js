/// <reference types="Cypress" />

describe("My First Test Suite", function () {
    const baseUrl = Cypress.env("baseUrl") || "https://rahulshettyacademy.com/angularAppdemo/";
    const authorApiUrl = Cypress.env("authorApiUrl") || "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=";
  
    it("My FirstTest case", function () {
      cy.visit(baseUrl);
  
      // Intercept the author API request and modify it
      cy.intercept("GET", `${authorApiUrl}shetty`).as("shettyAuthor");
      
      cy.get("button[class='btn btn-primary']").click();
  
      // Wait for the API response and validate it
      cy.wait("@shettyAuthor").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
        cy.wrap(interception.response.body).should("include", "Some expected content");
        // Add more specific validations based on the actual API response
      });
  
      // Change the authorName parameter in the URL and intercept it again
      cy.intercept("GET", `${authorApiUrl}malhotra`).as("malhotraAuthor");
  
      cy.get("button[class='btn btn-primary']").click();
  
      // Wait for the API response and validate it
      cy.wait("@malhotraAuthor").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
        cy.wrap(interception.response.body).should("include", "Some expected content");
        // Add more specific validations based on the actual API response
      });
    });
  });
  