beforeEach('visit',()=>{
  cy.visit('produtos')
})

context('Should login', ()=>{
 
  it('Select the product', ()=>{
     
      cy.selectProduct(3)
      cy.get('.woocommerce-review-link').should('contain','customer reviews)')
      
  })

  it('Add the product to cart', ()=>{
    cy.addProductOnCart(3,'XS', 'Green', 3)
    cy.get('.page-title').should('contain','Carrinho')
  })

  it('Check itens on cart', ()=>{
    cy.checkCart(3,'XS', 'Green', 3)
    cy.get('.woocommerce-billing-fields > h3').should('contain','Detalhes de faturamento')
  })
    
})





