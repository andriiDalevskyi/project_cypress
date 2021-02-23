describe('Practice with real website', function(){
    it('registration',function(){
        function generatorMail(){
            let first = '';
            let second = '';
            let res = '';
            let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for(let i=0; i<9; i++)
            first += symbols.charAt(Math.floor(Math.random() * symbols.length));
            for(let i=0; i<4; i++)
            second += symbols.charAt(Math.floor(Math.random() * symbols.length));
            res = first + '@' + second + '.mail'
            return res;    
        }
        function generatorPass(){
            let pass = '';
            let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
            for(let i=0; i<9; i++)
            pass += symbols.charAt(Math.floor(Math.random() * symbols.length))
            return pass;
        }
        const randomMail = generatorMail()
        const randomPass = generatorPass() 
        cy.visit('https://decemberboys.com.ua/')
        cy.contains('Мои заказы').click()
        cy.url().should('include', '/accounts/orders/') 
        cy.get('#id_registration-email').type(randomMail)
        cy.get('#id_registration-password1').type(randomPass)
        cy.get('button').contains('Зарегистрироваться').click()
        
    })
})