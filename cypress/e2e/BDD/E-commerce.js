/// <reference types="cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Setting up the test environment before each test case
Given("I visit the application", () => {
  cy.viewport(1920, 1080);
  cy.visit("/");
});

// Test case for adding products to the cart using custom command
When("I click on the {string} button in the navigation menu", (buttonText) => {
  cy.get(".nav-link").contains(buttonText).click();
});

When("I select product {string}", (productName) => {
  cy.SelectProduct(productName);
});

Then("I should see the {string} button", (buttonText) => {
  cy.get(".nav-link.btn.btn-primary").contains(buttonText).should("be.visible");
});

When("I click the {string} button", (buttonText) => {
  cy.get(".nav-link.btn.btn-primary").contains(buttonText).click();
});

When("I wait for {int} seconds", (seconds) => {
  cy.wait(seconds * 1000);
});

When("I click on {string}", (buttonText) => {
  cy.contains(buttonText).click();
});

When("I type {string} in the country field", (country) => {
  cy.get("#country").type(country);
});

When("I select {string} from the suggestions", (country) => {
  cy.get(".suggestions > ul > li > a").contains(country).click();
});

When("I check the checkbox with id {string}", (checkboxId) => {
  cy.get(`#${checkboxId}`).check({ force: true });
});

When("I click the {string} button", (buttonText) => {
  cy.get(".btn.btn-success.btn-lg").contains(buttonText).click();
});

Then("I should see a success message containing {string}", (message) => {
  cy.get(".alert").then((success_message) => {
    const actual_message = success_message.text();
    expect(actual_message.includes(message)).to.be.true;
  });
});
