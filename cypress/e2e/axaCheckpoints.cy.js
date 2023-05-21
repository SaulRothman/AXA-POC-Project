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

    // This test covers login for the Applitools demo site, which is a dummy banking app.
    // The interactions use typical Cypress calls,
    // but the verifications use one-line snapshot calls with Applitools Eyes.
    // If the page ever changes, then Applitools will detect the changes and highlight them in the Eyes Test Manager.
    // Traditional assertions that scrape the page for text values are not needed here.
    it('Axa Login Page', () => {
        // change button to green
        cy.get('#app > div > div.container.view--login-legacy > div > div > form > div:nth-child(4) > button').invoke('attr', 'style', 'background-color: green !important')

        // move password element 4 pixels to the right
        cy.get('[data-cy="login-password-label"]').then(($el) => {
            const currentMarginLeft = parseInt($el.css('margin-left'), 10);
            const newMarginLeft = currentMarginLeft + 4;
            $el.css('margin-left', `${newMarginLeft}px`);
          });
        
          // Change the Login text to italics
         cy.get('#app > div > div.container.view--login-legacy > div > div > form > h2').invoke('css', 'font-style', 'italic');

        //    Hide the logo
        cy.get('#app > div > div:nth-child(1) > header > a > div.HeaderLogo__Visual > div > svg').invoke('css', 'display', 'none');
        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: true
        });
       
    })


    it('Axa Localization', () => {      
        // Select the desired option by its index
        cy.get('select.app_select').select(1);
        cy.wait(5000)
        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "English/French Login page",
            target: 'window',
            fully: true,
        });
    })
    it('Axa Login no password', () => {
        cy.get('#username').type('saul.rothman@applitools.com')
        cy.get('[data-cy="login-button"]').click()
        // move the checkbox 2 pixels to the right and see how applitools doesn't flag the false postive
        cy.get('select.app_select').then(($select) => {
            $select[0].style.marginLeft = '2px';
          });
       // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "no password",
            target: 'window',
            fully: true
        });
    })
    it('Axa Login no  username', () => {
        cy.get('#password').type('ApplitoolsPoC')
        cy.get('[data-cy="login-button"]').click()
        // font change
        cy.get('.el-alert__title').then(($element) => {
            $element[0].style.fontFamily = 'Times New Roman';
          });
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
