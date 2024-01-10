import data from '../fixtures/profile.json'

beforeEach('visit',()=>{
  cy.visit('http://lojaebac.ebaconline.art.br/')
})


context('Should login', ()=>{
 
  it('Login on the account', ()=>{
  //  cy.fixture('perfil.json').as('dados')
      cy.get('.dropdown-toggle > .zmdi').click()
      cy.get('#topmenu > .menu-item-221 > a').click()
      cy.login(data.user,data.password)
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac (não é aluno_ebac? Sair)')
    
  })

  it('Does not login on the account', ()=>{
    cy.get('.dropdown-toggle > .zmdi').click()
    cy.get('#topmenu > .menu-item-221 > a').click()
    cy.login(data.errorUser,data.errorPassword)
    cy.get('.woocommerce-error').should('contain','Erro:')
 
  })
})