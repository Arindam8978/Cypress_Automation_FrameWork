/// <reference types="Cypress" />
const selectors = {

    input : {
        serachField : "#twotabsearchtextbox",
    },
    label : {
        userName : "#nav-link-accountList-nav-line-1",
        accountList : 'a[data-csa-c-slot-id="nav-link-accountList"]>span',
        allHamburgerOption : "#nav-hamburger-menu",
        signOut : 'a[onclick*="signout"]',
        yourAccount : 'a[href*="nav_em_ya"]',
    }
}
class HomePage{

    enterDataInSearchField(enterData){
    return cy.get(selectors.input.serachField).type(enterData).type('{enter}');
    }
    verifyTheUserNameInTheHomePage(userIdName){
        return cy.get(selectors.label.userName).should('have.text',userIdName);
    }

     clickOnTheAccountAndListOption(){
       return cy.get(selectors.label.accountList).click();
    }
    clickOnTheAllHamBurgerOptionInHomePage(){
        return cy.get(selectors.label.allHamburgerOption).click();
    }
    clickOnTheSignOutOption(){
        return cy.get(selectors.label.signOut).click();
    }
    clickOnYourAccountOption(){
        return cy.get(selectors.label.yourAccount).click();
    }
}

export default new HomePage();