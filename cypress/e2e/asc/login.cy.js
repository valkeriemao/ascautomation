/// <reference types ="cypress" />

import Login from '../PageObjects/login'

describe('login test', () => 
{
    const login = new Login()
    let data

    beforeEach(() =>
    {
        cy.fixture('values').then((fData) =>
        {
            data = fData
        })
    }
    )

    beforeEach(() => 
    {   
        cy.visit(Cypress.env('url'))
    }
    )

    it('successful applicant login', () =>
    {
        login.fillUsername(data.ascapplicant.username)
        login.fillPassword(data.ascapplicant.password)
        login.clickLogin()
        login.checkUserModule('Applicant')
    }
    )

    it('successful evaluator login', () =>
    {
        login.fillUsername(data.ascevaluator.username)
        login.fillPassword(data.ascevaluator.password)
        login.clickLogin()
        login.checkUserModule('Evaluator')
    }
    )

    it('successful adscpecialist login', () =>
    {
        login.fillUsername(data.ascadspecialist.username)  
        login.fillPassword(data.ascadspecialist.password)
        login.clickLogin()
        login.checkUserModule('Ad Specialist')
    }
    )

    it('successful screener login', () =>
    {
        login.fillUsername(data.ascscreener.username)
        login.fillPassword(data.ascscreener.password)
        login.clickLogin()
        login.checkUserModule('Screener')
    }
    )

    it('successful admin login', () =>
    {
        login.fillUsername(data.ascadmin.username)
        login.fillPassword(data.ascadmin.password)
        login.clickLogin()
        login.checkUserModule('Admin')
    }   
    )

    it('successful accounting login', () =>
    {
        login.fillUsername(data.ascaccounting.username)
        login.fillPassword(data.ascaccounting.password)
        login.clickLogin()
        login.checkUserModule('Accounting')
    }
    )

    it('unknown user login', () =>
    {
        login.fillUsername(data.unknownuser.username)
        login.fillPassword(data.unknownuser.password)
        login.clickLogin()
        login.checkDialogMsg('Email address not register on the system')
    }
    )

    it('incorrect password login', () =>
    {
        login.fillUsername(data.ascapplicant.username)
        login.fillPassword('wrongpassword')
        login.clickLogin()
        login.checkDialogMsg('username/email or password is invalid')
    }
    )

    // it('unverified user login', () =>
    // {
    //     login.fillUsername(data.unverifieduser.username)
    //     login.fillPassword(data.unverifieduser.password)
    //     login.clickLogin()
    //     cy.get('#swal2-title').should('contain','User is not verified')
    // }
    // )

}
)