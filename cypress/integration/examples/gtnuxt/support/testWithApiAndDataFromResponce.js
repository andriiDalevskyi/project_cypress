describe('APIGetPost', function(){ 
    it('tokenRequest', function(){
        cy.request({
            method : 'POST',
            url : 'https://gtnuxt.netlify.app/.netlify/identity/token?grant_type=password&username=carl@growingtalent.org&password=test',
    }).then((responce) => {
        cy.writeFile('cypress/fixtures/token.json', responce.body);
        cy.wait(2000)
        cy.expect(responce.status).to.equal(200)
        cy.fixture('token').then((usertoken)=>{
            let tokenForAut = usertoken.access_token         
            cy.visit('https://gtnuxt.netlify.app/')
            cy.get('.grid > :nth-child(2) > input').click()  //press radio button Are you over Age of 21? "Yes"
            cy.contains("Sign in ").click() //press "sign in"
            cy.get('[href="/sign-up"]').click() //press "sign up" /sign-up
            cy.url().should('include', '/sign-up') //check if this is registration page
            cy.wait(1000)
            cy.get(':nth-child(1) > .mt-1').type(tokenForAut) //enter email "dean.metalhead@gmail.com"
            cy.get('.input-tel__input').type('9495065173', {force: true}) //enter phone number "9495065173"
            cy.get(':nth-child(3) > .mt-1').type('test') //enter password "test"
            cy.get(':nth-child(4) > .mt-1').type('test') //ter repeat password "test"
        })
        })
    })
})