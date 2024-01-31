/// <reference types="Cypress" />

describe("My First Test Suite", function () {
    it("My First Test case", function () {
      // Visit the website under test
      cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
  
      // Intercept the GET request and modify the URL
      cy.intercept(
        "GET",
        "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
        (req) => {
          // Modify the URL to test a different scenario
          req.url =
            "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
  
          // Continue with the intercepted request and response
          req.continue((res) => {
            // Uncomment the following line to assert the response status code (if needed)
            // expect(res.statusCode).to.equal(403);
          });
        }
      ).as("dummyurl");
  
      // Click on the button with the specified class
      cy.get("button[class='btn btn-primary']").click();
  
      // Wait for the intercepted request to complete
      cy.wait("@dummyurl").then((interception) => {
        // Perform additional assertions on the intercepted request/response if needed
        // For example, you can check the response body, headers, etc.
        const response = interception.response;
        // assert something about the response
        cy.log(response)
      });
    });
  });
  