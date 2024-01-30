/// <reference types="cypress"/>

// Handling web controls UI using Cypress
describe("Handling Tables", () => {

    // Setting up the test environment before each test case
    beforeEach(() => {
        // Set viewport size
        cy.viewport(1920, 1080);
        // Visit the specified URL
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
  
    // Test case for Handling Tables
    it("Handling Tables", () => {
        // Using cy.get to select all the second column cells within each row
        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
            // Get the text content of the current cell
            const text = $el.text()

            // Check if the text includes "Python"
            if(text.includes("Python")){
                // If true, select the next cell in the same row and perform actions
                cy.get("tr td:nth-child(2)").eq(index).next().then((price)=>{
                    // Get the text content of the selected cell
                    const PriceText = price.text()

                    // print if result needed
                    // cy.log(PriceText)
                    // Assert that the text content is equal to "25"
                    expect(PriceText).to.equal("25")
                })
            }
        });
    });
});
