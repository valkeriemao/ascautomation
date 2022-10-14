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

    checkUserModule(value)
    {
        cy.get('.user-role > .ng-tns-c33-3').should('contain',value)
    }

}
export default Login


