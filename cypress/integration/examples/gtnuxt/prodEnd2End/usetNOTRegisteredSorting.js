/// <reference types="cypress-xpath" />

describe('Not registered user end 2 end', function(){
    it('Sort by price',function(){
        cy.visit('https://www.getgoodtree.com/') // go to good tree
        cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click() //click to "I am 21+"
        cy.get('.primary-nav > .nav-item > .nav-link').click() // go to products
        cy.wait(5000)
        cy.get('#__BVID__110').invoke('val', '43').trigger('change')
        cy.get('.filters-container > :nth-child(2) > h5').should('have.text', ' Max price - $43')



 //*[@id="category-home-router-view"]/div[2]/div[3]/div[2]/div/div[1]/div[2]/h4/text()  <-locator for price list

    })
})



