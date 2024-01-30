Cypress.Commands.add('SelectProduct', (ProductName) => {
    // Get all elements with class "card-title"
    cy.get(".card-title").each(($el, index, $list) => {
        // Check if the text of the element includes the specified ProductName
        if($el.text().includes(ProductName)){
            // If it includes, click the corresponding button with class "btn-info"
            cy.get("button.btn.btn-info").eq(index).click();
        }
    });
    // Add a comment to indicate the end of the command
    // (optional, but can be helpful in larger scripts)
    cy.log('Product selection completed');
})
