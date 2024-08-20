/// <reference types="cypress" />

describe('Working with input', () => {
    it('Visit the website',() =>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.url().should('include', 'login.html')
    });

    it('Should fill username',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    
    it('Should fill password',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });
    
    it('Must fill in the check box',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.get('#user_remember_me').uncheck()
        cy.get('#user_remember_me').click()
    });

    it('Should try to login',() =>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('input[name="submit"]').click()
        })
    });

    it('Should try to logout',() =>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('input[name="submit"]').click()

            cy.get('a.dropdown-toggle').should('be.visible').find('i.icon-user').click();
            cy.get('#logout_link').should('be.visible').click();
            cy.get('#signin_button') 
            .should('be.visible') 
            .and('contain.text', 'Signin'); 

        })
    })
})