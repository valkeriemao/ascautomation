/// <reference types ="cypress" />

class Register {


    clickRegister() 
    {
        cy.get('//span[text()[contains(.,"Register")]]').click()
    }

    clickAccept() 
    {
        cy.get('.mat-checkbox-inner-container').click()
    }

    clickPrivacyNext()
    {
        cy.get(':nth-child(5) > .mat-focus-indicator > .mat-button-wrapper').click()
    }

    fillGivenName(value) 
    {
        cy.get('#mat-input-2').type(value)
    }

    fillMiddleName(value) 
    {
        cy.get('#mat-input-3').type(value)
    }

    fillLastName(value) 
    {
        cy.get('#mat-input-4').type(value)
    }

    fillMobile(value) 
    {
        cy.get('#mat-input-5').type(value)
    }

    clickInfoNext()
    {
        cy.get('.ng-star-inserted.ng-dirty > :nth-child(2) > .mat-stepper-next > .mat-button-wrapper').click()
    }

    clickCompany()
    {
        cy.get('.mat-select-placeholder').click()
    }

    selectCompany()
    {
        cy.get('#mat-option-1 > .mat-option-text').click()
    }

    clickCompanyNext()
    {
        cy.get('#cdk-step-content-0-2 > form.ng-star-inserted > :nth-child(2) > .mat-stepper-next > .mat-button-wrapper').click()
    }
    
    fillEmail(value) 
    {
        cy.get('#mat-input-6').type(value)
    }

    fillPassword(value) 
    {
        cy.get('#mat-input-7').type(value)
    }

    fillConfirmPassword(value) 
    {
        cy.get('#mat-input-8').type(value)
    }

    clickConfirmRegister()
    {
        cy.get('.ng-untouched.ng-star-inserted > :nth-child(2) > .mat-primary > .mat-button-wrapper').click()
    }

    clickReset()
    {
        cy.get('.mat-warn > .mat-button-wrapper').click()
    }
}

export default Register


