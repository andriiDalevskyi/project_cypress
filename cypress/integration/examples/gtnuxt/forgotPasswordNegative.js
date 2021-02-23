describe('ForgotPassword negative', function(){
    it('Forgot password without email', function(){
        cy.goToForgotPassword() 
        cy.get('.inline-flex > .flex-1').click()
        cy.contains('invalid_grant: No user found with that email, or password invalid.')
    })

    it('Forgot password with fictional email', function(){
        cy.goToForgotPassword()
        cy.wait(2000)
        cy.get('.mt-1').type('a@aa')
        cy.get('.grid > .button').click()
        cy.contains('User not found')
    })

     it('Forgot password with not valid email', function(){
        cy.goToForgotPassword()
        cy.wait(2000)
        cy.get('.mt-1').type('a')
        cy.get('.grid > .button').click() //press "renew password"
        cy.get('input:invalid').should('have.length', 1)
        cy.get('[type="email"]').then(($input) => {
        expect($input[0].validationMessage).to.contain("Please include an '@' in the email address. 'a' is missing an '@'.")
    })
  })
})
