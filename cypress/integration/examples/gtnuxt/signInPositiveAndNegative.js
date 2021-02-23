describe('Sign in test', function(){
    it('Sign in and Sign out positive', function(){
        cy.createUserDeanMetalHeadWithoutValidation()
        cy.wait(2000)
        cy.visitGtnuxtNetlifyMainPage() //open mine page
        cy.wait(2000)
        //cy.reload() //reolad page
        //cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
        cy.contains("Sign in ").click() //press "sign in"
        cy.get('#email').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get('#password').type('test') //enter password "test"
        cy.get('.inline-flex > .flex-1').click() //click button "sign-in"
        cy.get(':nth-child(3) > .flex-shrink-0 > #user-menu').click()
        cy.get('.rounded-md > .text-left').click()  
    })

    it('Sign in without email and password negative', function(){
        cy.visitGtnuxtNetlifyMainPage() //open mine page
        //cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
        cy.contains("Sign in ").click() //press "sign in"
        cy.get('.bg-white > .grid > :nth-child(2) > input').click()
        cy.get('.inline-flex > .flex-1').click()
        cy.contains('invalid_grant: No user found with that email, or password invalid.')
    })

    it('Sign in with not valid email negative', function(){
        cy.visitGtnuxtNetlifyMainPage() //open mine page
        cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
        cy.contains("Sign in ").click() //press "sign in"
        cy.get('#email').type('a@a') //enter email "a@a"
        cy.get('#password').type('test') //enter password "test"
        cy.get('.inline-flex > .flex-1').click()
        cy.contains('invalid_grant: No user found with that email, or password invalid.')
    })

    it('Sign in with not valid password negative', function(){
        cy.visitGtnuxtNetlifyMainPage() //open mine page
        cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
        cy.contains("Sign in ").click() //press "sign in"
        cy.get('#email').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get('#password').type('a') //enter password "a"
        cy.get('.inline-flex > .flex-1').click()
        cy.contains('invalid_grant: No user found with that email, or password invalid.')
    })

    it('Sign in and Sign out positive 2', function(){
        cy.visitGtnuxtNetlifyMainPage() //open mine page
        cy.reload() //reolad page
        cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
        cy.contains("Sign in ").click() //press "sign in"
        cy.get('#email').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get('#password').type('test') //enter password "test"
        cy.get('.inline-flex > .flex-1').click() //click button "SIGN-UP"
        cy.get(':nth-child(3) > .flex-shrink-0 > #user-menu').click()
        cy.get('.rounded-md > .text-left').click()
        cy.removeUserDeanMetalHead() 
    })


})