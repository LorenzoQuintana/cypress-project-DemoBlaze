class InventoryPage {
    elements = {
      categoryLinks: (category) => cy.contains('a', category), 
      productLinks: () => cy.get('.hrefch'), 
      addItemButton: () => cy.get('.col-sm-12 > .btn'), 
    };
  
    filterByCategory(category) {
      this.elements.categoryLinks(category).click();
    }
  
    goToProductPage(index) {
      this.elements.productLinks().eq(index).click();
    }
  
    validateProductLinksVisible() {
      this.elements.productLinks().should('be.visible');
    }
  }
  
  module.exports = new InventoryPage();
  