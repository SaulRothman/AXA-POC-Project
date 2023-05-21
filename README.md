### AXA PoC
To view the Applitools Cypress SDK click [here](https://www.npmjs.com/package/@applitools/eyes-cypress)
## Pre-Requisites
1.  Install node [here](https://nodejs.org/en/) or for a mac user: `brew update` and then `brew install node`
2.  Register to Applitools and [create an account](https://auth.applitools.com/users/register)
3.  Ensure you have your Applitools API Key!


**Instructions**
-  Important note, 
1.  Open the VisualAISuiteSolution and set your ApiKey in string 'eyes.api_key = "api_key"' (or comment the string and set APPLITOOLS_API_KEY environment variable), or write to the terminal: `export APPLIOOLS_API_KEY=<APPLITOOLS_API_KEY>`
2.  Review the assertionTest.cy.js file and run.
3.  Review the axa.cy.js file and run it to set a baseline
4.  Review the axaCheckpoints.cy.js file and run it to compare against the baseline
TraditionalSuite
Note: When you run the tests against V2, you’ll see differences in screenshots because the app is actually different. You should see exactly what those differences are (highlighted in pink) in Applitools dashboard.

## Running the Example

1.  Download the Example
    -  Option 1:  `git clone https://github.com/applitools/cs-applitools-cypress-hackathon.git`
    -  Option 2:  Download it as a Zip file and extract it
2.  Run the Project inside Visual Studio Code

**In order to run the test from commandLine:**

3.1.  Open a commandLine window

3.2.  Navigate to the recently cloned folder cs-applitools-java-hackathon
-  run `npm install`
- run `npx eyes-setup`
- run for a mac: `export APPLITOOLS_API_KEY=<YOUR_API_KEY>` for windows: `set APPLITOOLS_API_KEY=<YOUR_API_KEY>`
  
3.3.  Run the following commands for Assertion Test Suite
-  Run the Assertion Test: 
    -  `npm run assertionTest`
 
3.4.  Run one of the following commands for AXA PoC Tests,
- To set a baseline run:
    - `npm run setBaseline`
- To run the checkpoint:
    - `npm run setCheckpoint`
