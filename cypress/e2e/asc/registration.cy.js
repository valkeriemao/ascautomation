/// <reference types ="cypress" />

import Register from '../PageObjects/registration'

describe('applicant registration', () => 
{
    const register = new Register()
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

    it('successful registration', () =>
    {
        const dateNow = Date.now()
        register.clickRegister()
        register.clickAccept()
        register.clickPrivacyNext()
        register.fillGivenName(data.newUser.givenName + dateNow)
        register.fillMiddleName(data.newUser.midName  + dateNow)
        register.fillLastName(data.newUser.lastName  + dateNow)
        register.fillMobile(dateNow)
        register.clickInfoNext()
        register.clickCompany()
        register.selectCompany()
        register.clickCompanyNext()
        register.fillEmail(dateNow + '@yopmail.com')
        register.fillPassword(data.newUser.password)
        register.fillConfirmPassword(data.newUser.password)
        // register.clickConfirmRegister()
        // cy.get('.user-role > .ng-tns-c33-15').should('be.equal',"APPLICANT")
    }
    )

    it('failed registration due to existing email', () =>
    {
        const dateNow = Date.now()
        register.clickRegister()
        register.clickAccept()
        register.clickPrivacyNext()
        register.fillGivenName(data.newUser.givenName + dateNow)
        register.fillMiddleName(data.newUser.midName  + dateNow)
        register.fillLastName(data.newUser.lastName  + dateNow)
        register.fillMobile(dateNow)
        register.clickInfoNext()
        register.clickCompany()
        register.selectCompany()
        register.clickCompanyNext()
        register.fillEmail('alvingjohndrich@gmail.com')
        register.fillPassword(data.newUser.password)
        register.fillConfirmPassword(data.newUser.password)
        // register.clickConfirmRegister()
        // cy.get('.user-role > .ng-tns-c33-15').should('be.equal',"APPLICANT")
    }
    )

    it('reset registration form', () =>
    {
        const dateNow = Date.now()
        register.clickRegister()
        register.clickAccept()
        register.clickPrivacyNext()
        register.fillGivenName(data.newUser.givenName + dateNow)
        register.fillMiddleName(data.newUser.midName  + dateNow)
        register.fillLastName(data.newUser.lastName  + dateNow)
        register.fillMobile(dateNow)
        register.clickInfoNext()
        register.clickCompany()
        register.selectCompany()
        register.clickCompanyNext()
        register.fillEmail(dateNow + '@yopmail.com')
        register.fillPassword(data.newUser.password)
        register.fillConfirmPassword(data.newUser.password)
        register.clickReset()
        cy.get('.ng-star-inserted > h4').contains(' Terms and Agreements ')
        cy.get('.mat-checkbox-inner-container').should('not.be.checked')

    }
    )
}
)