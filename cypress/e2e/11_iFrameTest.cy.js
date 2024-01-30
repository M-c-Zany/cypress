/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>

import 'cypress-iframe';

describe("Frame Test", () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });

    it("Frame Test", () => {
        // Ensure the iframe with ID "courses-iframe" is loaded
        cy.frameLoaded("#courses-iframe");

        // Alias the iframe for better readability
        cy.iframe().as('coursesFrame');

        // Perform actions inside the iframe using the alias
        cy.get('@coursesFrame').find("a[href$='mentorship']").eq(0).click();

        // Assert that there are two elements with the specified selector inside the iframe
        cy.get('@coursesFrame').find("h1 .pricing-title.text-white.ls-1").should("have.length", 2);
    });
});
