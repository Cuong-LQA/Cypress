1. To use we need to do this step:
    - Add "cypress-file-upload" to this field in tsconfig.json "compilerOptions": {
        "types": ["cypress", "cypress-file-upload"]
      }
    - In cypress/support/commands.js: import 'cypress-file-upload';
    
2.Usage
    
    HTML5 file input
    cy.get('[data-cy="file-input"]')
      .attachFile('myfixture.json');
    Drag-n-drop component
    cy.get('[data-cy="dropzone"]')
      .attachFile('myfixture.json', { subjectType: 'drag-n-drop' });
    Attaching multiple files
    cy.get('[data-cy="file-input"]')
      .attachFile(['myfixture1.json', 'myfixture2.json']);