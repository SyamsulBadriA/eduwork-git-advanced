/// <reference types="cypress" />

describe('Searchbox Test', () => {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")
    })
    
    it('Should type info searchbox and submit', () => {
        cy.get('#searchTerm').type('zero{enter}')
        cy.get('h2').should('exist') 
        cy.get('h2').should('contain.text', 'Search Results:')

        const expectedResults = [
            'Zero - Personal Banking - Loans - Credit Cards',
            'Zero - Log in',
            'Zero - FAQ - Frequently Asked Questions',
            'Zero - Contact Us',
            'Zero - Help',
            'Zero - Free Access to Online Banking',
            'Zero - Account Summary',
            'Zero - Account Activity',
            'Zero - Transfer Funds',
            'Zero - Pay Bills',
            'Zero - My Money Map',
            'Zero - Online Statements'
        ]

        expectedResults.forEach(result => {
            cy.contains(result).should('exist')
        })
    })
})
