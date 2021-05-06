describe.only('Not registered user end 2 end', function(){
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
        cy.get('#delivery')
            .type("468 N Bedford Dr, Beverly Hills, CA 90210, USA", { delay: 100 })
        cy.get('[class=pac-item]').first().click()
        cy.get('#jumbotron-content > .gt-btn').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button > .svg-inline--fa').click()
        cy.scrollTo('top')
        cy.get('.tertiary-nav > .nav-item > .nav-link').click()
        cy.get('.sidebar-actions > .btn-submit').click()
        cy.url().should('include','/sign-up')
        })


    it('count items in the cart', function(){
        cy.contains('Cart 1 items')      
        })

    it('increase the number of product in the cart', function(){
        cy.get('.tertiary-nav > .nav-item > .nav-link').click()
        cy.get('.flex-row > :nth-child(3) > .svg-inline--fa > path').click()
        cy.get('.flex-row > .text-center').should('have.text', ' 2 ')
    })
    
    it('continue shopping, add one more product', function(){
        cy.get('.btn-close').click()
        cy.get('.primary-nav > .nav-item > .nav-link').click()
        cy.url().should('include', '/products/flower')
        cy.wait(5000)
        cy.get(':nth-child(2) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button > .svg-inline--fa > path').click()
        cy.contains('Cart 2 items')
    })



})
