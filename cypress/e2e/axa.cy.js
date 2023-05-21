/// <reference types="cypress" />

// This test case spec contains everything needed to run a full visual test against the ACME bank site.
// The file `applitools.config.js` specifies how to run this test against multiple browsers in Applitools Ultrafast Grid.

// This "describe" method contains related test cases with per-test setup and cleanup.
// In this example, there is only one test.
describe('Axa PoC', () => {
    // This method performs setup before each test.
    beforeEach(() => {
        // Open Eyes to start visual testing.
        // Each test should open its own Eyes for its own snapshots.
        cy.eyesOpen({        
            // The name of the application under test.
            // All tests for the same app should share the same app name.
            // Set this name wisely: Applitools features rely on a shared app name across tests.
            appName: 'AXA PoC',
            
            // The name of the test case for the given application.
            // Additional unique characteristics of the test may also be specified as part of the test name,
            // such as localization information ("Home Page - EN") or different user permissions ("Login by admin"). 
            testName: Cypress.currentTest.title,
        })
        cy.visit('https://productmodeler-uat.axa.com/admin-login')

    })

    
    // The interactions use typical Cypress calls,
    // but the verifications use one-line snapshot calls with Applitools Eyes.
    // If the page ever changes, then Applitools will detect the changes and highlight them in the Eyes Test Manager.
    // Traditional assertions that scrape the page for text values are not needed here.
    it('Axa Login Page', () => {

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: true
        });
       
    })

    it('Axa Localization', () => {

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "English/French Login page",
            target: 'window',
            fully: true
        });
    })
    it('Axa Login no password', () => {

        cy.get('#username').type('saul.rothman@applitools.com')
        cy.get('[data-cy="login-button"]').click()
          
       // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "no password",
            target: 'window',
            fully: true
        });
       
    })   
    it('Axa Login no username', () => {     
        cy.get('#password').type('ApplitoolsPoC')
        cy.get('[data-cy="login-button"]').click()
        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "no username",
            target: 'window',
            fully: true
        });
    })
    it('Axa Login wrong credentials', () => {
        cy.get('#username').type('saul.rothman@applitools.com')
        cy.get('#password').type('ApplitoolsPoC')
        cy.get('[data-cy="login-button"]').click()

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "wrong credentials",
            target: 'window',
            fully: true
        });
    })
    // This method performs cleanup after each test.
    afterEach(() => {
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})
