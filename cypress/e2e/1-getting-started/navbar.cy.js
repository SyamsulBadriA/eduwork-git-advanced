describe('Navbar test', function() {
    before(function() {
      cy.visit('http://zero.webappsecurity.com/index.html');
    });
  
    it('Should navigate to Online Banking, Feedback, and Homepage correctly', function() {
      cy.contains('Online Banking').click();
      cy.url().should('include', 'online-banking.html');
      
      cy.get('h1').should('have.text', 'Online Banking');
      
      cy.contains('Feedback').click();
      cy.url().should('include', 'feedback.html');
      
      cy.get('h3').should('have.text', 'Feedback');

      cy.contains('Zero Bank').click();
      cy.url().should('include', 'index.html');

      cy.get('a.brand').should('have.text', 'Zero Bank');
    });
  });
  