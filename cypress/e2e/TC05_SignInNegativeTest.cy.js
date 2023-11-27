import HomePage from "../pageObjects/HomePage";
import SignInPage from "../pageObjects/SignInPage";
describe('Negative SignIn Page Test', () => {

    let data;
    before(() => {
        cy.fixture("TestData").then((fixtureData) => {
            data = fixtureData;
        });
    });

    beforeEach(() => {
        cy.visit('/');
        HomePage.clickOnTheAccountAndListOption();
    });
    it('UserId is blank then verify the error message', () => {      
        SignInPage.clickOnContinueButton();
        SignInPage.verifyTheBlankUserIDErrorMessage(data.blankUserIDErrorMessage);
    });
    it('UserId does not contain @ then verify the error message', () => {
        SignInPage.enterEMailInToEMailTextBox(data.withOutAtTheRateUserId);
        SignInPage.clickOnContinueButton();
        SignInPage.verifyTheWithOutAtTheRateUserIDErrorMessage(data.withOutAtTheRateErrorMessage);
    });
    it('Wrong UserId then Verify the error message', () => {
        SignInPage.enterEMailInToEMailTextBox(data.wrongUserID);
        SignInPage.clickOnContinueButton();
        SignInPage.verifyTheWrongUserIDErrorMessage(data.wrongUserIDErrorMessage);
    });
    it('Password is blank then verify the error message', () => {
        SignInPage.enterEMailInToEMailTextBox(data.emailId);
        SignInPage.clickOnContinueButton();
        SignInPage.clickOnSignInButton();
        SignInPage.verifyTheBlankPasswordErrorMessage(data.blankPasswordErrorMessage);
    });
    it('Password is wrong then verify the error message', () => {
        SignInPage.enterEMailInToEMailTextBox(data.emailId);
        SignInPage.clickOnContinueButton();
        SignInPage.enterPasswordInToPasswordTextBox(data.wrongPassword);
        SignInPage.clickOnSignInButton();
        SignInPage.verifyTheWrongPasswordErrorMessage(data.wrong_Password_ErrorMessage);
    });
});