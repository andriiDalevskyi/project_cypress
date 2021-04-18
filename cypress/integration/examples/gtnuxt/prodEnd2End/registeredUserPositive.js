describe('Registered user end 2 end', function(){
    it('User sign in', function(){
        cy.visit('https://www.getgoodtree.com/') // go to good tree
        cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click() //click to "I am 21+"
        cy.get('.secondary-nav > :nth-child(1) > .nav-link').click()// go to sign in
        cy.get('.modal-body > :nth-child(1) > .form-control').type('carl@growingtalent.org') //enter user name
        cy.get(':nth-child(2) > .form-control').type('test') // enter password
        cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click() //click sign in
        cy.wait(2000)
        })
    it('count items in the cart',function(){
        cy.contains('3142 High Street, Oakland, CA 94619, United States')
        cy.get('#jumbotron-content > .gt-btn').click()
        cy.url().should('include', '/products/flower')
        cy.contains('FLOWER')
        cy.get(':nth-child(1) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button').click()
        cy.get('[style="flex: 1 1 0%; margin-right: -1px; margin-left: -1px;"] > .base-button > .svg-inline--fa > path').click()
        cy.get(':nth-child(2) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button > .svg-inline--fa').click()
        cy.get(':nth-child(3) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button > .svg-inline--fa > path').click()
        cy.contains('Cart 3 items')
        cy.scrollTo('top')
        cy.get('.tertiary-nav > .nav-item > .nav-link').click()        
        })
   it('check delivery address', function(){
        cy.scrollTo('top')
        cy.get('.tertiary-nav > .nav-item > .nav-link').click()
        cy.get('.sidebar-actions > .btn-submit').click()
    })    
})


