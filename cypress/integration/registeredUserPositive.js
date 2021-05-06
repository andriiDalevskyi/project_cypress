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
        cy.contains('3142 High Street, Oakland, CA 94619, United States') //check is addres present
        cy.wait(3000)
        cy.get('#jumbotron-content > .gt-btn').click() //click "shop now"
        cy.url().should('include', '/products/flower')
        cy.contains('FLOWER')
        cy.wait(3000)
        cy.get(':nth-child(1) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button > .svg-inline--fa > path').click()//click on firs product
        cy.get(':nth-child(2) > [style="position: absolute; bottom: 1px; left: 50%; z-index: 100;"] > .base-button > .svg-inline--fa > path').click()//click on second product
        cy.contains('Cart 2 items')
        })
    it('remove all item from the cart',function(){
        cy.scrollTo('top')
        cy.get('.tertiary-nav > .nav-item > .nav-link').click()//open the cart
        cy.get(':nth-child(1) > [style="display: flex; flex-direction: row; justify-content: center; align-items: center; padding-right: 24px;"] > [style="flex: 3 1 0%; margin-left: 16px;"] > [style="justify-content: space-between; align-items: center;"] > [style="width: 100%;"] > .flex-row > :nth-child(1) > .svg-inline--fa').click()//remove first item from a cart
        cy.wait(2000)
        cy.get('.flex-row > :nth-child(1) > .svg-inline--fa').click() //remove second item from a cart
        cy.contains('No items in cart')
        cy.get('.text-right > .clickable').click() //close cart
    })
    it('all product tabs is work',function(){
        cy.get('#category-container > :nth-child(2)').click()
        cy.url().should('include', '/products/vapes')
        cy.get('#category-container > :nth-child(3)').click()
        cy.url().should('include', '/products/prerolls')
        cy.get('#category-container > :nth-child(4)').click()
        cy.url().should('include', '/products/extracts')
        cy.get('#category-container > :nth-child(5)').click()
        cy.url().should('include', '/products/edibles')
        cy.get('#category-container > :nth-child(6)').click()
        cy.url().should('include', '/products/accessories')
        


    })    
})


