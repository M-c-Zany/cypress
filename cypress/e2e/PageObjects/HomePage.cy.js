class HomePage{
    NameField()
    {
        return cy.get(":nth-child(1) > .form-control");
    }
    MailField(){
        return cy.get('input[name="email"]');
    }
    PasswordField(){
        return cy.get("#exampleInputPassword1");
    }
    CheckBoxField(){
        return cy.get("#exampleCheck1");
    }
    GenderField(){
        return cy.get("#exampleFormControlSelect1");
    }
    RadioButtonInlineField(){
        return cy.get("#inlineRadio1");
    }
    RadioButtonField(){
        return cy.get("#inlineRadio3");
    }
    DateOfBirthField(){
        return cy.get('input[name="bday"]');
    }
    SubmitFormField(){
        return cy.get("form");
    }
}

export default HomePage;