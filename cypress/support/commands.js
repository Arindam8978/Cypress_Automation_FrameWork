///<reference types="Cypress" />


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('isProductAvailable', (ProductName) => {
    // debugger;
    //     if(cy.contains(ProductName))
    //         return true;
    //     else
    //         return false;
    // cy.get("h2.a-size-base>a").then((text) => {
    //     debugger
    //         if(text.is(':visible'))
    //         {
    //                 return cy.get("h2.a-size-base>a").should('have.length.gte',0).then((element) => {
    //                 debugger
    //                 let productFound =false;
    //                 element.each((index,element) => {
    //                 debugger;
    //                  const productText = Cypress.$(element).text();
    //                 if (productText.includes(ProductName)) {
    //                  productFound = true;
    //                 return false; // Exit the loop
    //             }
    //          });
    //         debugger
    //         return productFound;
    //     });
 
    //         }
    //         else{
    //         return false;
    //     }
    // });
       return cy.get("h2.a-size-base>a").should('have.length.gte',0).then((element) => {
            let productFound =false;
            element.each((index,element) => {
                const productText = Cypress.$(element).text();
                if (productText.includes(ProductName)) {
                  productFound = true;
                  return false; // Exit the loop
                }
            });
            return productFound;
        });
 
});
       
// Cypress.Commands.add('isProductAvailable', (ProductName) => {
//   return cy.get("h2.a-size-base a").should('have.length.gte', 0).then((element) => {
//     for (let index = 0; index < element.length; index++) {
//       const productText = Cypress.$(element[index]).text();
//       if (productText.includes(ProductName)) {
//         cy.get('[data-action="reg-item-delete"]>span span input').click();
//         return true;
//       }
//     }
//     return false;
//   });
// });

       
