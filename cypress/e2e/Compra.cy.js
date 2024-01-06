beforeEach('visit',()=>{
  cy.visit('http://lojaebac.ebaconline.art.br/produtos')
})

context('Should login', ()=>{
 
  it('Select the product', ()=>{
     
      cy.get('[class="product-block grid"]').eq(4).click()
      cy.get('.woocommerce-review-link').should('contain','customer reviews)')
      
  })

  it('Add the product to cart', ()=>{
    cy.get('[class="product-block grid"]').eq(4).click()
    cy.get('.button-variable-item-33').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type('3')
    cy.get('.single_add_to_cart_button').click()
    cy.get('[class="mini-cart-items"]').should('be.greaterThan', 0)
  })

  it('Check itens on cart', ()=>{
    cy.get('[class="product-block grid"]').eq(4).click()
    cy.get('.button-variable-item-33').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type('3')
    cy.get('.single_add_to_cart_button').click()
    cy.get('[class="mini-cart-items"]').should('be.greaterThan', 0)
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    cy.get('.checkout-button').click()
  })
    
})





