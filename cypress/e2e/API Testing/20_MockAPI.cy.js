/// <reference types="Cypress" />

describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookretrievals");

    cy.get("button[class='btn btn-primary']").click();

    // Use cy.wait() without the should() callback and move assertions outside
    cy.wait("@bookretrievals");

    // Assert the response after waiting for the interception to complete
    cy.get("tr").should("have.length", 2); // Assuming there's a header row, adjust accordingly
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });
});


/*
1./// <reference types="Cypress" />`: This is a TypeScript reference comment. It informs the TypeScript compiler about the types available in the Cypress library, providing better code intelligence and autocompletion support.

2.describe("My First Test Suite", function () {`: This is the beginning of a test suite. Thedescribe` function is used to group related test cases together. In this case, the test suite is named "My First Test Suite."

3.it("My FirstTest case", function () {`: This is the beginning of a specific test case within the test suite. Theit` function is used to define an individual test case. In this case, the test case is named "My FirstTest case."

4.cy.visit("https://rahulshettyacademy.com/angularAppdemo/");`: This command instructs Cypress to open the specified URL in the browser.

5.cy.intercept({...}).as("bookretrievals");`: This line sets up an interception usingcy.intercept()` to intercept a specific network request. The intercepted request is a GET request to a URL that retrieves books with a specific AuthorName parameter. The intercepted response is mocked with a status code of 200 and a sample book object. Theas("bookretrievals")` alias is used to reference this interception later.

6.cy.get("button[class='btn btn-primary']").click();`: This command usescy.get()` to locate a button with a specific class and then triggers a click event on it.

7.cy.wait("@bookretrievals");`: This command instructs Cypress to wait for the interception with the alias "bookretrievals" to complete before proceeding further in the test.

8.cy.get("tr").should("have.length", 2);`: This command usescy.get()` to select all table rows (`<tr>`) and asserts that there should be exactly two rows. This assumes there is a header row, so the actual data rows are expected to be one.

9.cy.get("p").should("have.text", "Oops only 1 Book available");`: This command usescy.get()` to select a paragraph (`<p>`) element and asserts that it should have the specified text: "Oops only 1 Book available."

Overall, this Cypress test case visits a web page, intercepts a network request, performs a button click, waits for the interception to complete, and then asserts some conditions on the resulting page content.*/