/// <reference types ="cypress" />

class Login {

    fillUsername(value)
    {
        cy.get('[aria-label="Email Address"]').type(value)
    }

    fillPassword(value)
    {
        cy.get('[aria-label="Password"]').type(value)
    }

    clickLogin() 
    {
        // cy.get('.q-mt-lg > :nth-child(1) > .q-btn > .q-btn__content').click()
        cy.xpath('//span[text()[contains(.,"Login")]]').click()
    }

    checkUserModule(value)
    {
        cy.get('.q-ma-none').should('contain',value)
    }

    checkDialogMsg(value)
    {
        cy.get('.q-dialog__message').should('contain',value)
    }

}
export default Login


