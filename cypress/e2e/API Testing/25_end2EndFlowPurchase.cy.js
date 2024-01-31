/// <reference types="cypress"/>
const neatCSV = require("neat-csv");

let productName;
let expectedInvoiceNumber;

describe("Session test", () => {
  it("Is logged in through local storage", () => {
    cy.viewport(1920, 1080);

    cy.LoginAPI().then(() => {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: (window) => {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });

      cy.get(".card-body b").eq(1).then((ele) => {
        productName = ele.text();
      });

      cy.get(".card-body button:last-of-type").eq(1).click();
      cy.get("[routerlink*='/dashboard/cart']").contains("Cart").click();
      cy.contains("Checkout").click();

      cy.get("[placeholder*='Select Country']").type("India");

      cy.get(".ta-results button")
        .contains("India")
        .click({ force: true });

      cy.get(".btnn.action__submit.ng-star-inserted").click();
      cy.get("td label.ng-star-inserted").then((invoiceNumber) => {
        expectedInvoiceNumber = invoiceNumber.text();
      });

      cy.wait(2000);
      cy.get(".order-summary button").eq(0).click();
    });

    const filePath =
      "C:\\Users\dudek\\OneDrive\\Practice\\cypress\\cypress\\downloads\\order-invoice_dudekula.khaja9346.csv";

    cy.readFile(filePath).then(async (text) => {
      const csv = await neatCSV(text);
      const actualProductCSV = csv[0]["Product Name"];
      const actualInvoice = csv[0]["Invoice Number"];

      expect(productName).to.equal(actualProductCSV);
      expect(expectedInvoiceNumber).to.equal(actualInvoice);
    });
  });
});
