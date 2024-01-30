/// <reference types="cypress"/>
import HomePage from "./PageObjects/HomePage.cy";
// Describe block to group the tests related to frame handling
describe("Implementing Page object Design pattern into Cypress", () => {
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
    it("Page Object Model", () => {
        const HP = new HomePage()
      // Type "John Doe" into the first form control
      HP.NameField().type(data.name);
  
      // Check if the input field has a minimum length of 2
      cy.get(":nth-child(1) > .form-control").should("have.attr", "minlength", "2");
  
      // Type the email address into the email input field
      HP.MailField().type(data.email);
  
      // Type "password123" into the password input field
      HP.PasswordField().type(data.password);
  
      // Check the checkbox for terms and conditions
      HP.CheckBoxField().check();
  
      // Select the gender from the dropdown
      HP.GenderField().select(data.gender);
  
      // Check the radio button for inline option 1
      HP.RadioButtonInlineField().check();
  
      // Check if the third radio button is disabled
      HP.RadioButtonField().should("be.disabled");
  
      // Type "2000-01-01" into the date of birth input field
      HP.DateOfBirthField().type(data.date_of_birth);
  
      // Submit the form
      HP.SubmitFormField().submit();

      // 
    });
  });
  