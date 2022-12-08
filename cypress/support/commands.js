// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import Login from "../e2e/PageObjects/login"

const login = new Login();

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('successfulLogin', (username, password, module) => {
    login.fillUsername(username)
    login.fillPassword(password)
    login.clickLogin()
    login.checkUserModule(module)
})

Cypress.Commands.add('unsuccessfulLogin', (username, password, message) => {
    login.fillUsername(username)
    login.fillPassword(password)
    login.clickLogin()
    login.checkDialogMsg(message)
})

Cypress.Commands.add('registration', (givenName, midName, lastName, password) => {
    const dateNow = Date.now()
    register.clickRegister()
    register.clickAccept()
    register.clickNext()
    register.fillGivenName(givenName + dateNow)
    register.fillMiddleName(midName  + dateNow)
    register.fillLastName(lastName  + dateNow)
    register.fillMobile(dateNow)
    register.clickInfoNext()
    register.clickCompany()
    register.selectCompany()
    register.clickCompanyNext()
    register.fillEmail(dateNow + '@yopmail.com')
    register.fillPassword(password)
    register.fillConfirmPassword(password)
    // register.clickConfirmRegister()
    // login.checkDialogMsg('Applicant')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })