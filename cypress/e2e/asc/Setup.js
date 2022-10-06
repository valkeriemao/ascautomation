/// <reference types ="cypress" />

class Setup
{
    // getData()
    // {
    //     let data
    //     cy.fixture('examples').then((fData) =>
    //     {
    //         data = fData
    //         console.log(data + " --data from Setup.getdata() class")
    //     })
    //     return data
    // }

    visit()
    {
        cy.visit(Cypress.env('url'))
    }
}

export default Setup
