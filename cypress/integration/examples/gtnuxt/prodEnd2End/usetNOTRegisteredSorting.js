/// <reference types="cypress-xpath" />

describe('Not registered user end 2 end', function(){
    it('Sort by price',function(){
        cy.visit('https://www.getgoodtree.com/') // go to good tree
        //cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click() //click to "I am 21+"
        cy.get('.primary-nav > .nav-item > .nav-link').click() // go to products
        cy.wait(5000)
        cy.get('#__BVID__110').invoke('val', '43').trigger('change')
        //cy.trainingXPath()
        cy.xpath(`//*[@id="category-container"]/button[4]/div`)
        .click()
        
        
        
            
        //var arrayOfPrices = cy.get('//*[@id="category-home-router-view"]/div[2]/div[3]/div[2]/div/div[1]/div[2]/h4/text()')
        //cy.get('[style="margin-left: 0.5em;"]').invoke('$43')


        //cy.get(`[id="#${menuNav[1]}$Menu"]`)


// //*[@id="category-home-router-view"]/div[2]/div[3]/div[2]/div/div[1]/div[2]/h4/text()  <-locator for price list

    })
})



