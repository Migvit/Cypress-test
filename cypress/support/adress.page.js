class AdressPage{

    editAdress(email, password, firstName, lastName, streetAddress, city, cep, phoneNumber){

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
    }

}