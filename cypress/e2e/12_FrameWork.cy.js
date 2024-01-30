/// <reference types="cypress"/>

// Describe block to group the tests related to frame handling
describe("Frame test", () => {
  
    // Before block to navigate to the target website before each test
    before(() => {
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
    });
  
    // Test case for interacting with form elements inside frames
    it("Frame test", () => {
      // Type "John Doe" into the first form control
      cy.get(":nth-child(1) >.form-control").type("John Doe");
  
      // Type the email address into the email input field
      cy.get('input[name="email"]').type("john.doe@example.com");
  
      // Type "password123" into the password input field
      cy.get("#exampleInputPassword1").type("password123");
  
      // Check the checkbox for terms and conditions
      cy.get("#exampleCheck1").check();
  
      // Select "Male" from the dropdown
      cy.get("#exampleFormControlSelect1").select("Male");
  
      // Check the radio button for inline option 1
      cy.get("#inlineRadio1").check();
  
      // Type "2000-01-01" into the date of birth input field
      cy.get('input[name="bday"]').type("2000-01-01");
    
      // Submit the form
      cy.get("form").submit();
    
      // Add assertions for successful form submission or any error messages
      // For example, you can check if a success message is displayed
      // cy.get(".success-message").should("be.visible");
    }); 
  });
  