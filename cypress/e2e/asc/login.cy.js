// /// <reference types ="cypress" />

// import Login from '../PageObjects/login'

// describe('login test', () => 
// {
//     const register = new Login()
//     let data

//     beforeEach(() =>
//     {
//         cy.fixture('values').then((fData) =>
//         {
//             data = fData
//         })
//     }
//     )

//     beforeEach(() => 
//     {   
//         cy.visit(Cypress.env('url'))
//     }
//     )

//     it('successful applicant login', () =>
//     {
//         const dateNow = Date.now()

//         cy.get('.user-role > .ng-tns-c33-15').should('be.equal',"APPLICANT")
//     }
//     )

// }
// )