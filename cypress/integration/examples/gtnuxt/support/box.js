describe('Registration new user negative test', function(){
    it('Registration without email', function(){
        cy.goToSignUpPage()
        cy.get('.input-tel__input').type('9495065173', {force: true}) //enter phone number "9495065173"
        cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
        cy.get(':nth-child(4) > .mt-1').type('test') //ter repeat password "test"
        cy.get('.form-checkbox').click() //click check-box "I accept Terms and Conditions"
        cy.get('input:invalid').should('have.length', 1)
        cy.get('.inline-flex > .flex-1').click() //click button "SIGN-UP"
        cy.get('[type="email"]').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })
})