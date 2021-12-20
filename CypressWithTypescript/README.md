1: check these config files to get the overview: package.json, tsconfig.json, cypress.jscon

2: To run cypress use this command: npx cypress open

3: Note down some problems when create project

	- File tsconfig.json must be done first. Especially for field "Types". This will tells to use cypress, cypress-xpath (as a function)
	- To use cypress-xpath, beside add it in tsconfig.json, we need to add "require("cypress-xpath")" in support/index.js
	- This project you cypress-promise to convert cypress async to promise
	
*Note*
1. Asyncronous in Cypress
- Async in Cypress is not like in javascript (that why we cannot use await - if want to use we must use library such as cypress-promise in this project)
- It is async so all cypress commands will run async and Cypress controll it internally. Async code will run after all normal javascript code run
- Async code will run by order (like FIFO)