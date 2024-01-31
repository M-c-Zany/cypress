// Describe block for the "Session test"
describe("Session test", () => {

    // Test case: "Is logged in through local storage"
    it("Is logged in through local storage", () => {
  
      // Set the viewport size to 1920x1080
      cy.viewport(1920, 1080);
  
      // Use the custom Cypress command "LoginAPI" to perform API login and get the token
      cy.LoginAPI().then(() => {
  
        // Visit the specified URL with additional configuration
        cy.visit("https://rahulshettyacademy.com/client", {
          
          // Use the "onBeforeLoad" callback to execute code before the page is loaded
          onBeforeLoad: ((window) => {
            
            // Set the 'token' in the local storage with the value from Cypress environment variables
            window.localStorage.setItem('token', Cypress.env('token'));
          })
        });
      });
    });
  });
  