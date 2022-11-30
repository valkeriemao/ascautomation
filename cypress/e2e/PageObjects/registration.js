/// <reference types ="cypress" />

class Register {


    clickRegister() 
    {
        cy.xpath('//span[text()[contains(.,"Register")]]').click()
    }

    clickAccept() 
    {
        cy.get('#agree').click()
    }

    clickNext()
    {
        cy.xpath('//span[text()[contains(.,"Next")]]').click()
    }

    fillGivenName(value) 
    {
        cy.get('[aria-label="Given Name *"]').type(value)
    }

    fillMiddleName(value) 
    {
        cy.get('[aria-label="Middle Name"]').type(value)
    }

    fillLastName(value) 
    {
        cy.get('[aria-label="Last Name *"]').type(value)
    }

    fillMobile(value) 
    {
        cy.get('[aria-label="Mobile Number *"]').type(value)
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


