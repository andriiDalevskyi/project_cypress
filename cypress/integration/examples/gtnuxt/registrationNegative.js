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

    it('Registration with not valid email', function(){
        cy.goToSignUpPage()
        cy.get(':nth-child(1) > .mt-1').type('aa@') //enter email "aa@"
        cy.get('.input-tel__input').type('9495065173', {force: true}) //enter phone number "9495065173"
        cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
        cy.get(':nth-child(4) > .mt-1').type('test') //ter repeat password "test"
        cy.get('.form-checkbox').click() //click check-box "I accept Terms and Conditions"
        cy.get('input:invalid').should('have.length', 1)
        cy.get('.inline-flex > .flex-1').click() //click button "SIGN-UP"
        cy.get('[type="email"]').then(($input) => {
        expect($input[0].validationMessage).to.contain("Please enter a part following '@'. 'aa@' is incomplete.")
        })
    })
    
    it('Registration without phone number', function(){
        cy.goToSignUpPage()
        cy.get(':nth-child(1) > .mt-1').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
        cy.get(':nth-child(4) > .mt-1').type('test') //ter repeat password "test"
        cy.get('.form-checkbox').click() //click check-box "I accept Terms and Conditions"
        cy.get('input:invalid').should('have.length', 1)
        cy.get('.inline-flex > .flex-1').click() //click button "SIGN-UP"
        cy.get('[type="tel"]').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
        }) 
    })

    it('Registration with not valid phone number', function(){
        cy.goToSignUpPage()
        cy.get(':nth-child(1) > .mt-1').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get('.input-tel__input').type('94', {force: true}) //enter not valid phone number "94"
        cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
        cy.get(':nth-child(4) > .mt-1').type('test') //ter repeat password "test"
        cy.get('.form-checkbox').click() //click check-box "I accept Terms and Conditions"
        cy.get('.inline-flex > .flex-1').click() //click button "SIGN-UP"
        cy.wait(2000)
        cy.contains('Failed to handle signup webhook')
    })     
    
    it('Registration without "I accept Terms and Conditions"', function(){
        cy.goToSignUpPage()
        cy.get(':nth-child(1) > .mt-1', { timeout: 10000 }).should('be.visible').type('dean.metalhead@gmail.com') //enter email "dean.metalhead@gmail.com"
        cy.get('.input-tel__input').type('9495065173', {force: true}) //enter phone number "9495065173"
        cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
        cy.get(':nth-child(4) > .mt-1').type('test') //enter repeat password "test"
        cy.get('.inline-flex > .flex-1').click()  //click button "SIGN-UP"
        cy.get('input:invalid').should('have.length', 1)
        cy.get('.inline-flex > .flex-1').click() //click button "SIGN-UP"
        cy.get('[type="checkbox"]').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please check this box if you want to proceed.')
    })

    }) 

})