class PurchasePage {
    elements = {
      productLinks: () => cy.get('.hrefch'), 
      addItemButton: () => cy.get('.col-sm-12 > .btn'), 
      cartButton: () => cy.get('#cartur'), 
      placeOrderButton: () => cy.get('.col-lg-1 > .btn'), 
      totalAmount: () => cy.get('#totalp'), 
      purchaseButton: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'), 
      successMessage: () => cy.get('.sweet-alert h2'), 
      nameInput: () => cy.get('#name'),
      countryInput: () => cy.get('#country'),
      cityInput: () => cy.get('#city'),
      cardInput: () => cy.get('#card'),
      monthInput: () => cy.get('#month'),
      yearInput: () => cy.get('#year')
    };
  
    goToProductPage(index) {
      this.elements.productLinks().eq(index).click();
    }
  
    addItem() {
      this.elements.addItemButton().click();
    }
  
    goToCart(options = {}) {
      this.elements.cartButton().click(options);
    }
  
    placeOrder() {
      this.elements.placeOrderButton().click();
    }
  
    fillOrderDetails(name, country, city, card, month, year) {
      this.elements.nameInput().type(name);
      this.elements.countryInput().type(country);
      this.elements.cityInput().type(city);
      this.elements.cardInput().type(card);
      this.elements.monthInput().type(month);
      this.elements.yearInput().type(year);
    }
  
    confirmPurchase() {
      this.elements.purchaseButton().click();
    }
  
    getTotalAmount() {
      return this.elements.totalAmount().invoke('text').then(parseFloat);
    }
  
    getSuccessMessage() {
      return this.elements.successMessage();
    }
  }
  
  module.exports = new PurchasePage();
  
  
  