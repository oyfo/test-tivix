###Description
Purpose of this test pack is to automate single test case against https://www.tivix.com/
This test case will curl and check response codes of subpages listed in config files.

###Usage
Before runing test is needed to install dependencies by `npm install`
To run  all tests (currently there is only one test case) with default parameters (all avalible testcases wit default env config file `tuvix_test_env.json`) execute: `npm test`  
To execute specifiy testcase and env file:
`npm test --config=tuvix_test_env_2 -- --grep TC-01`

To check linting: `npm run lint`

Author: Mikołaj Kacprzak
mikolaj.kacprzak@gmail.com
