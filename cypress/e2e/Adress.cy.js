import data from '../fixtures/profile.json'

beforeEach( () =>{
    cy.visit('minha-conta')
    cy.login(data.user, data.password)
})

context('Should login', ()=>{
 
    it('Sing in on adress correctly', ()=>{

      
    })

})