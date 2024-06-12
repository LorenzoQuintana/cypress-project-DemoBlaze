import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
const InventoryPage = require('../../pages/InventoryPage');

Given('I am on the homepage 3', () => {
    cy.visit('/');
});

When('I filter by category {string}', (category) => {
    InventoryPage.filterByCategory(category);
});

Then('I should see items of the selected category', () => {
    InventoryPage.validateProductLinksVisible();
});

When('I select a product', () => {
    InventoryPage.goToProductPage(0);
});

Then('I should be redirected to the product description page', () => {
    cy.url().should('include', 'prod.html?idp_');
    InventoryPage.elements.addItemButton().should('be.visible');
});

