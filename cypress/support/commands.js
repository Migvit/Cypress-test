// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, password) => {
    cy.get('#username').type(user)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()

 })
 
 Cypress.Commands.add('preRegistration', (email, password, firstName, lastName, streetAddress, city, cep, phoneNumber) => {
    cy.get('#reg_email').type(email) 
    cy.get('#reg_password').type(password)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()

    cy.get('#select2-billing_country-container')
    .click()
    .type('Brasil')
    .get('[aria-selected="true"]')
    .click()
    cy.get('#billing_address_1').type(streetAddress)
    cy.get('#billing_city').type(city)
    cy.get('#select2-billing_state-container')  
    .click()
    .type('São Paulo')
    .get('[aria-selected="true"]')
    .click()
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(phoneNumber)
    cy.get('.button').click()
    
    
 })

 Cypress.Commands.add('selectProduct', (number) => {
    cy.get('[class="product-block grid"]').eq(number).click()
 })

 Cypress.Commands.add('addProductOnCart', (number, size, coulor, quantity) => {
 cy.get('[class="product-block grid"]').eq(number).click()
 cy.get('.button-variable-item-'+ size).click()
 cy.get('.button-variable-item-'+ coulor).click()
 cy.get('.input-text').clear().type(quantity)
 cy.get('.single_add_to_cart_button').click()
 cy.get('#cart > .dropdown-toggle').click()
 cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
})


Cypress.Commands.add('checkCart', (number, size, coulor, quantity) => {
cy.get('[class="product-block grid"]').eq(number).click()
cy.get('.button-variable-item-'+ size).click()
cy.get('.button-variable-item-'+ coulor).click()
cy.get('.input-text').clear().type(quantity)
cy.get('.single_add_to_cart_button').click()
cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
cy.get('.checkout-button').click()
})