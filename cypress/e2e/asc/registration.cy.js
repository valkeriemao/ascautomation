/// <reference types ="cypress" />

//const { should } = require("chai")

describe('applicant registration', () => 
{
    let data
    beforeEach(() =>
    {
        cy.fixture('values').then((fData) =>
        {
            data = fData
        })
    }
    )

    it('access registration pop-up', () =>
    {
        cy.viewport(data.ascViewport.width, data.ascViewport.height)
        cy.visit(data.ascUrl)
        cy.get('.register__button > .mat-button-wrapper').click()
        cy.get('.mat-checkbox-inner-container').click()
        cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('#mat-input-2').type(data.newUser.givenName)
        cy.get('#mat-input-4').type(data.newUser.lastName)
        cy.get('#mat-input-3').type(data.newUser.midName)
        cy.get('#mat-input-5').type(data.newUser.mobile)
        cy.get('.ng-star-inserted.ng-dirty > :nth-child(2) > .mat-stepper-next > .mat-button-wrapper').click()
        cy.get('.mat-select-placeholder').click()
        cy.get('#mat-option-1 > .mat-option-text').click()
        cy.get('#cdk-step-content-0-2 > form.ng-star-inserted > :nth-child(2) > .mat-stepper-next > .mat-button-wrapper').click()
        cy.get('#mat-input-6').type(data.newUser.email)
        cy.get('#mat-input-7').type(data.newUser.password)
        cy.get('#mat-input-8').type(data.newUser.password)
        // // cy.get('.ng-untouched.ng-star-inserted > :nth-child(2) > .mat-primary > .mat-button-wrapper').click()
        // // cy.get('.user-role > .ng-tns-c33-15').should('be.equal',"APPLICANT")
    }
    )
}
)