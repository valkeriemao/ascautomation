/// <reference types ="cypress" />

//const { should } = require("chai")

describe('applicant registration', () => 
{
    beforeEach(function ()
    {
        cy.fixture('testData').then(function (testdata)
        {
            this.testdata = testdata
        }
        )
        cy.viewport(this.testdata.viewport)
        cy.visit(this.testdata.ascUrl)
    }
    )

    it('page title check', function () 
    {
        cy.title('equal','ASC Online System')
    }
    )
}
)