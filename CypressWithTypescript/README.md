1: check these config files to get the overview: package.json, tsconfig.json, cypress.jscon

2: To run cypress use this command: _npx cypress open_

3: Note down some problems when create project

	- File tsconfig.json must be done first. Especially for field "Types". This will tells to use cypress, cypress-xpath (as a function)
	- To use cypress-xpath, beside addind it in tsconfig.json, we need to add "require("cypress-xpath")" in support/index.js
	- This project you cypress-promise to convert cypress async to promise
	
*Note*
1. Asyncronous in Cypress
- Async in Cypress is not like in javascript (that why we cannot use await - if want to use we must use library such as cypress-promise in this project)
- Cypress controll async code internally.
- Async code will run by order (like FIFO). Async code will run after all normal javascript code run

2. Check condition method of should in this: \node_modules\cypress\types\cypress.d.ts - interface Chainer<Subject>

3. One thing to note: when change file to support/index.ts => it will alarm for require but all tests still run. Don't know why
This discussion in link suggest to add a config to tsconfig.json to run it but I havent figure it out https://github.com/cypress-io/cypress/issues/1118 