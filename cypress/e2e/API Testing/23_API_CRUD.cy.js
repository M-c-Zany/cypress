// cypress/integration/crud_operations_spec.js

describe("CRUD Operations with Cypress", () => {
  let createdItemId;

  it("should create a new item", () => {
    const newItem = {
      name: "New Item",
      description: "Description of the new item",
    };

    cy.request({
      method: "POST",
      url: "https://example-api.com/items",
      body: newItem,
    }).then((response) => {
      // Assertions on the response
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("id");
      expect(response.body.name).to.equal(newItem.name);
      expect(response.body.description).to.equal(newItem.description);

      // Store the created item's ID for later use in update and delete tests
      createdItemId = response.body.id;
    });
  });

  it("should retrieve the created item", () => {
    cy.request({
      method: "GET",
      url: `https://example-api.com/items/${createdItemId}`,
    }).then((response) => {
      // Assertions on the response
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
      expect(response.body.name).to.equal("New Item");
      expect(response.body.description).to.equal("Description of the new item");
    });
  });

  it("should update the created item", () => {
    const updatedItem = {
      name: "Updated Item",
      description: "Updated description",
    };

    cy.request({
      method: "PUT",
      url: `https://example-api.com/items/${createdItemId}`,
      body: updatedItem,
    }).then((response) => {
      // Assertions on the response
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
      expect(response.body.name).to.equal(updatedItem.name);
      expect(response.body.description).to.equal(updatedItem.description);
    });
  });

  it("should delete the created item", () => {
    cy.request({
      method: "DELETE",
      url: `https://example-api.com/items/${createdItemId}`,
    }).then((response) => {
      // Assertions on the response
      expect(response.status).to.equal(200);

      // Confirm that the item is dzeleted by trying to retrieve it again
      cy.request({
        method: "GET",
        url: `https://example-api.com/items/${createdItemId}`,
        failOnStatusCode: false, // Expecting a 404 status code for a deleted item
      }).then((getResponse) => {
        expect(getResponse.status).to.equal(404);
      });
    });
  });
});
