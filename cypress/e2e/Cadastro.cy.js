
const { faker, Faker } = require('@faker-js/faker');
beforeEach('visit',()=>{
    cy.visit('minha-conta/')
  })
  
  context('Should register', ()=>{
   
    it('Login on the account', ()=>{
        cy.get('#reg_email').type(faker.internet.email()) 
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#select2-billing_country-container')
        .click()
        .type('Brasil')
        .get('[aria-selected="true"]')
        .click()
        cy.get('#billing_address_1').type(faker.location.streetAddress())
        cy.get('#billing_city').type(faker.location.city())
        cy.get('#select2-billing_state-container')  
        .click()
        .type('São Paulo')
        .get('[aria-selected="true"]')
        .click()
        cy.get('#billing_postcode').type(15248547)
        cy.get('#billing_phone').type(11952158963)
        cy.get('.button').click()
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    })

})