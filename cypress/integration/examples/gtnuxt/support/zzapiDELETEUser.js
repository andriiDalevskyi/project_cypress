describe('test DELETE user', function(){
    it('DELETE', function(){
        cy.request({
            method : 'DELETE',
            url : 'https://gtnuxt.netlify.app/.netlify/functions/removeAccount?phone=9495065173',
            headers : {
                'Authorization' : 'Basic YWxla3NlajpkaXg='
            }
        }).then((responce) => {
            cy.expect(responce.status).to.equal(204)
        })
    })
})