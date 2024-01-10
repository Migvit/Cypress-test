
const { faker, Faker } = require('@faker-js/faker');
beforeEach('visit',()=>{
    cy.visit('minha-conta/')
  })
  
  context('Should register', ()=>{
   
    it('Login on the account', ()=>{
      cy.preRegistration(faker.internet.email(),faker.internet.password(), 
      faker.person.firstName(), faker.person.lastName(), faker.location.streetAddress(),
      faker.location.city(), 15248547, 11952158963)
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    })

})