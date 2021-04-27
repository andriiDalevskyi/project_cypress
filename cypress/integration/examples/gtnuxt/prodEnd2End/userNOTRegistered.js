describe('Not registered user end 2 end', function(){
    it('add delivery address before adding items', function(){
        cy.visit('https://www.getgoodtree.com/') // go to good tree
        cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click() //click to "I am 21+"
        cy.get('.primary-nav > .nav-item > .nav-link').click()
        cy.url().should('include', '/products/flower')
        cy.wait(2000)
        cy.get(':nth-child(1) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button > .svg-inline--fa > path').click()
        cy.contains('You must enter your delivery address before adding items to cart')

        })


    it('redirect to sign up after adding adress and make purchase',function(){
        cy.get('#delivery').type('468 N Bedford Dr, Beverly Hills, CA 90210').click()
        cy.wait(5000)
        cy.get('#delivery').click
        cy.get('body > div.pac-container.pac-logo.hdpi > div:nth-child(1)').click({force: true})
        cy.get('#jumbotron-content > .gt-btn').click()
        cy.wait(5000)
        cy.get(':nth-child(1) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button > .svg-inline--fa').click()
        cy.scrollTo('top')
        cy.get('.tertiary-nav > .nav-item > .nav-link').click()
        cy.get('.sidebar-actions > .btn-submit').click()
        cy.url().should('include','/sign-up')
        })
    it('count items in the cart', function(){
        cy.contains('Cart 1 items')      
    })

})
