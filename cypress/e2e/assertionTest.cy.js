describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('https://productmodeler-uat.axa.com/admin-login');
    });
  
    it('should have the required elements', () => {

      // Check that Login text is present
      cy.get('#app > div > div.container.view--login-legacy > div > div > form > h2').should('be.visible');
      cy.get('#app > div > div.container.view--login-legacy > div > div > form > h2').should("contain", "Login")

      // check that username text is present
      cy.get('#username').should('be.visible');
      cy.get('#app > div > div.container.view--login-legacy > div > div > form > div:nth-child(2) > label').should("contain", "Username");
      // check that password text is present
      cy.get('#password').should('be.visible');
      cy.get('#app > div > div.container.view--login-legacy > div > div > form > div:nth-child(3) > label').should("contain", "Password");
      // check that login button is present
      cy.get('[data-cy="login-button"]').should('be.visible');
      cy.get('[data-cy="login-button"]').should('contain', "Log in");
    });
    
    it('should have all elements in the header', () => {
        // Language Selector
        cy.get('.app_select').should('be.visible');
        // Test language Selector
        cy.get('#app > div > div:nth-child(1) > header > div.locale-changer.ml-3.rel_pos.ui_select_lang > select').should('be.visible');
        // Test Header Elements
        cy.get('.HeaderLogo__Project').should('be.visible');
        cy.get('.HeaderLogo__Project').should('contain', 'Authoring Tool');

        cy.get('.HeaderLogo__Name').should('be.visible');
        cy.get('.HeaderLogo__Name').should('contain', 'Authoring Tool');
    });
    it("Validate Error message functionality", () => {
      // log in
      cy.get('[data-cy="login-button"]').click()
      // check current error message
      cy.get(".el-alert__title").should(
        "contain",
        "connection refused"
      );
      cy.get(".el-alert__title").should(
       'be.visible'
      );
    });

});