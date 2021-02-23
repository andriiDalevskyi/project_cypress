describe('registration without validation', function(){
    it('registration', function(){
        cy.visitGtnuxtNetlifyMainPage()
        cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
        cy.contains("Sign in ").click() //press "sign in"
        cy.get('[href="/sign-up"]').click() //press "sign up" /sign-up
        cy.url().should('include', '/sign-up') //check if this is registration page
        cy.wait(2000)
        cy.get(':nth-child(1) > .mt-1', { timeout: 10000 }).should('be.visible').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get('.input-tel__input').type('9495065173', {force: true}) //enter phone number "9495065173"
        cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
        cy.get(':nth-child(4) > .mt-1').type('test') //enter repeat password "test"
        cy.get('.form-checkbox').click() //click check-box "I accept Terms and Conditions"
        cy.get('.inline-flex > .flex-1').click()  //click button "SIGN-UP"
        cy.get('#email', { timeout: 10000 }).should('be.visible').type('dean.metalhead@gmail.com') //enter email
        cy.get('#password').type('test') //enter password
        cy.get('.inline-flex > .flex-1').click() //click "sign in"
        cy.wait(2000)
    })

    it('user who is already registered negative', function(){
        cy.visitGtnuxtNetlifyMainPage()
        cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
        cy.contains("Sign in ").click() //press "sign in"
        cy.get('[href="/sign-up"]').click() //press "sign up" /sign-up
        cy.url().should('include', '/sign-up') //check if this is registration page
        cy.wait(2000)
        cy.get(':nth-child(1) > .mt-1', { timeout: 10000 }).should('be.visible').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get('.input-tel__input').type('9495065173', {force: true}) //enter phone number "9495065173"
        cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
        cy.get(':nth-child(4) > .mt-1').type('test') //enter repeat password "test"
        cy.get('.form-checkbox').click() //click check-box "I accept Terms and Conditions"
        cy.get('.inline-flex > .flex-1').click()  //click button "SIGN-UP"
        cy.contains('A user with this email address has already been registered')
        cy.removeUserDeanMetalHead();

    })
})
