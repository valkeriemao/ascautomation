/// <reference types ="cypress" />

const { should } = require("chai")

describe('applicant registration', () => 
    {
        beforeEach(() => 
                {
                    cy.fixture('cypress\fixtures\testData.json')
                }
            )

        it('page title check', () => 
            {
                cy.title.should('be.equal','ASC Online System')
            }
        )
    }
)