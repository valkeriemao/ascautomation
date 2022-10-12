/// <reference types ="cypress" />

class Login {

    fillUsername(value)
    {
        cy.get('#username').type(value)
    }

    fillPassword(value)
    {
        cy.get('#password').type(value)
    }

    clickLogin() 
    {
        cy.get('.mat-primary > .mat-button-wrapper').click()
    }

}
export default Login


