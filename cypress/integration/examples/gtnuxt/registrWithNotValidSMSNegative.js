describe('Registration new user test', function(){
    it('Registration with not valid code from sms', function(){    
        cy.goToSignUpPage()
        cy.get(':nth-child(1) > .mt-1', { timeout: 10000 }).should('be.visible').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get('.input-tel__input').type('9495065173', {force: true}) //enter phone number "9495065173"
        cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
        cy.get(':nth-child(4) > .mt-1').type('test') //enter repeat password "test"
        cy.get('.form-checkbox').click() //click check-box "I accept Terms and Conditions"
        cy.get('.inline-flex > .flex-1').click()  //click button "SIGN-UP"
        cy.get('#email', { timeout: 10000 }).should('be.visible') // wait sign in page
        cy.reload() //reolad page
        cy.get('#email', { timeout: 10000 }).should('be.visible').type('dean.metalhead@gmail.com') //enter email
        cy.get('#password').type('test') //enter password
        cy.get('.inline-flex > .flex-1').click() //click "sign in"
        cy.url().should('include', '/account/')
        cy.wait(2000)
        cy.get('.mt-1', { timeout: 10000 }).should('be.visible').first().type('123456') // enter not valid code from sms
        cy.get('.flex > span').click() // press VERIFY
        cy.contains('sms code is not valid, please try again')
        cy.removeUserDeanMetalHead();
})
})