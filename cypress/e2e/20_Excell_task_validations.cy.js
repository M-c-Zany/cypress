/// <reference types="cypress"/>
const neatCSV = require("neat-csv");

// Variables to store data for assertions
let productName;
let expectedInvoiceNumber;

// Describe block for the test suite
describe("Session test", () => {
  // Test case for checking if the user is logged in through local storage
  it("Is logged in through local storage", () => {
    // Set the viewport size
    cy.viewport(1920, 1080);

    // Custom Cypress command to perform login via API and set the token in local storage
    cy.LoginAPI().then(() => {
      // Visit the specified URL with token set in local storage
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: (window) => {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });

      // Get the text of the second bold element inside '.card-body' and store it in productName variable
      cy.get(".card-body b")
        .eq(1)
        .then((ele) => {
          productName = ele.text();
        });

      // Click the second button inside '.card-body'
      cy.get(".card-body button:last-of-type").eq(1).click();

      // Navigate to the cart and click on "Checkout"
      cy.get("[routerlink*='/dashboard/cart']").contains("Cart").click();
      cy.contains("Checkout").click();

      // Type "India" in the input with placeholder containing 'Select Country'
      cy.get("[placeholder*='Select Country']").type("India");

      // Click on the button containing "India" in '.ta-results'
      cy.get(".ta-results button").contains("India").click({ force: true });

      // Click on the button with class '.btnn.action__submit.ng-star-inserted'
      cy.get(".btnn.action__submit.ng-star-inserted").click();

      // Click on the button containing "Click To Download Order Details in Excel" in '.order-summary'
      cy.get(".order-summary button")
        .contains("Click To Download Order Details in Excel")
        .click();

      // Construct the file path for the downloaded Excel file
      const filePath = Cypress.config("fileServerFolder")+"\\cypress\\downloads\\order-invoice_dudekula.khaja9346.xlsx";

      // Use Cypress task to convert Excel to JSON and log the result
      cy.task("ExcelToJsonConverter", filePath).then((result)=>{
        cy.log(result);
        // You can log specific data from the result if needed
        // cy.log(result.data[1].A);
      });
      cy.readFile(filePath).then((text)=>{
        expect(text).to.includes(productName); 
      })
    });
  });
});
