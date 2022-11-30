/// <reference types ="cypress" />

describe('login test', () => 
{
    let data

    beforeEach(() =>
    {
        cy.fixture('values').then((fData) =>
        {
            data = fData
        })
    })

    beforeEach(() => 
    {   
        cy.visit(Cypress.env('url'))
    })

    it('successful applicant login', () =>
    {
        cy.successfulLogin(data.ascapplicant.username, data.ascapplicant.password, 'Applicant')
    })

    it('successful evaluator login', () =>
    {
        cy.successfulLogin(data.ascevaluator.username, data.ascevaluator.password, 'Evaluator')
    })

    it('successful adscpecialist login', () =>
    {
        cy.successfulLogin(data.ascadspecialist.username, data.ascadspecialist.password, 'Ad Specialist')
    })

    it('successful screener login', () =>
    {
        cy.successfulLogin(data.ascscreener.username, data.ascscreener.password, 'Screener')
    })

    it('successful admin login', () =>
    {
        cy.successfulLogin(data.ascadmin.username, data.ascadmin.password, 'Admin')
    })

    it('successful accounting login', () =>
    {
        cy.successfulLogin(data.ascaccounting.username, data.ascaccounting.password, 'Accounting')
    })

    it('unknown user login', () =>
    {
        cy.unsuccessfulLogin(data.unknownuser.username, data.unknownuser.password, 'Email address not register on the system')
    })

    it('incorrect password login', () =>
    {
        cy.unsuccessfulLogin(data.ascapplicant.username, 'wrongpassword', 'username/email or password is invalid')
    })

    // it('unverified user login', () =>
    // {
    //  cy.unsuccessfulLogin(data.unverifieduser.username, data.unverifieduser.password, 'User is not verified')
    // })
}
)