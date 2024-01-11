import adressPage from '../support/adress.page'
const dataAdress = require('../fixtures/profile.json')

beforeEach('visit',()=>{
    cy.visit('minha-conta/')
  })
  
  context('Should register', ()=>{
   
    it('Login on the account', ()=>{
     adressPage.editAdress(
      dataAdress.email, 
      dataAdress.password, 
      dataAdress.firstName, 
      dataAdress.lastName, 
      dataAdress.streetAddress, 
      dataAdress.city, 
      dataAdress.cep, 
      dataAdress.phoneNumber
     )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    })

})