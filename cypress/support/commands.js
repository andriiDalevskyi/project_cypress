// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("removeUserDeanMetalHead", () => {
    let urlForGenerateToken = 'https://gtnuxt.netlify.app/.netlify/identity/token?grant_type=password&username=dean.metalhead@gmail.com&password=test' // it is possible to separate username and pass 
    let baseUrlForDeleterequest = 'https://deploy-preview-74--gtnuxt.netlify.app/.netlify/functions/removeAccount?'
    let userPhoneNumberForUrl = 'phone=9495065173'
    let passForWritingTokenResponce = 'cypress/fixtures/tokenForDelete.json'
    let passForWritingDecodedToken = 'cypress/fixtures/userId.json'
    cy.request({
        method : 'POST',
        url : urlForGenerateToken
    }).then((responce)=>{
        cy.writeFile(passForWritingTokenResponce, responce.body);
        cy.wait(2000)
        cy.expect(responce.status).to.equal(200)
        cy.fixture('tokenForDelete').then((tokenForDelete)=>{
            let tokenWhole = tokenForDelete.access_token
            var arrayOfString = tokenWhole.split('.')
            let middlePartOfToken = arrayOfString[1]
            middlePartOfToken.toString()
            var decodedToken = atob(middlePartOfToken)
            cy.writeFile(passForWritingDecodedToken, decodedToken)
            cy.fixture('userId').then((id=>{
                let userId = id.sub
                let urlForDeleteRequest = baseUrlForDeleterequest + userPhoneNumberForUrl + '&userId=' + userId
                cy.request({
                    method : 'DELETE',
                    url : urlForDeleteRequest,
                    headers : {
                        'Authorization' : 'Basic YWxla3NlajpkaXg='
                    }
                }).then((responce) => {
                    cy.expect(responce.status).to.equal(204)
                })                                   
            }))
        })
    })
})

Cypress.Commands.add("goToSignUpPage", () => {
    cy.visit('https://gtnuxt.netlify.app/')
    cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
    cy.contains("Sign in ").click() //press "sign in"
    cy.get('[href="/sign-up"]').click() //press "sign up" /sign-up
    cy.url().should('include', '/sign-up') //check if this is registration page
    cy.wait(2000)
})

Cypress.Commands.add("createUserDeanMetalHeadWithoutValidation", () =>{
    cy.visit('https://gtnuxt.netlify.app/')
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
})

Cypress.Commands.add("visitGtnuxtNetlifyMainPage", () => {
    cy.visit('https://gtnuxt.netlify.app/')
})

Cypress.Commands.add("goToForgotPassword", () => {
    cy.visitGtnuxtNetlifyMainPage()
    cy.get('.grid > :nth-child(2) > input').click() //press radio button Are you over Age of 21? "Yes"
    cy.get(':nth-child(3) > .flex > .button').click() //press "sign in"
    cy.get('[href="/forgot-password"]').click()
})



