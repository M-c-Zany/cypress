/// <reference types="cypress"/>

// Describe block to group the tests related to frame handling
describe("Frame test", () => {
    let data;
  
    // BeforeEach block to navigate to the target website before each test
    beforeEach(() => {
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
  
      // Load data from the fixture file and set it to the 'data' variable
      cy.fixture("example.json").then((information) => {
        data = information;
      });
    });
  
    // Test case for interacting with form elements inside frames
    it("Frame test", () => {
      // Type "John Doe" into the first form control
      cy.get(":nth-child(1) > .form-control").type(data.name);
  
      // Check if the input field has a minimum length of 2
      cy.get(":nth-child(1) > .form-control").should("have.attr", "minlength", "2");
  
      // Type the email address into the email input field
      cy.get('input[name="email"]').type(data.email);
  
      // Type "password123" into the password input field
      cy.get("#exampleInputPassword1").type(data.password);
  
      // Check the checkbox for terms and conditions
      cy.get("#exampleCheck1").check();
  
      // Select the gender from the dropdown
      cy.get("#exampleFormControlSelect1").select(data.gender);
  
      // Check the radio button for inline option 1
      cy.get("#inlineRadio1").check();
  
      // Check if the third radio button is disabled
      cy.get("#inlineRadio3").should("be.disabled");
  
      // Type "2000-01-01" into the date of birth input field
      cy.get('input[name="bday"]').type(data.date_of_birth);
  
      // Submit the form
      cy.get("form").submit();
    });
  });
  