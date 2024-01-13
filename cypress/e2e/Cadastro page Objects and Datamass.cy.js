import adressPage from '../support/adress.page'
beforeEach('visit',()=>{
    cy.visit('minha-conta/')
  })
  
  context('Should register - with Page Objects', ()=>{
   const pageAdress = new adressPage()
    it('Login on the account', ()=>{
     pageAdress.editAdress()
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    })

})


  context('Should register - with Data mass', ()=>{
    const dataAdress = require('../fixtures/profile.json')
    it('Login on the account', ()=>{
 cy.preRegistration(
      dataAdress.email1, 
      dataAdress.password1, 
      dataAdress.firstName1, 
      dataAdress.lastName1, 
      dataAdress.streetAddress1, 
      dataAdress.city1, 
      dataAdress.cep1, 
      dataAdress.phoneNumber1
     )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    })

})