const selectors = {
    input : {
        emailTextBox : "#ap_email",
        passWordTestBox : "#ap_password", 
    },
    button : {
        contunueButton : "#continue",
        signInButton  : "#signInSubmit",
    },
    label : {
        signInLabel : ".a-box>div h1",
    },
    errorMessages : {
            blankErrorUserIDMessage : "#auth-email-missing-alert>div div",
            withOutAtTheRateMessage : '[id*="auth-error"] span',
            wrongUserIdErrorMessage : '[id*="auth-error"] span',
            blankPasswordMessage  : "#auth-password-missing-alert>div div",
            wrongPasswordErrorMessage : '[id*="auth-error"] span',
    },

}
class SignInPage{

    enterEMailInToEMailTextBox(email){
        return cy.get(selectors.input.emailTextBox).type(email);
    }

    enterPasswordInToPasswordTextBox(password){
        return cy.get(selectors.input.passWordTestBox).type(password);
    }
    clickOnContinueButton(){
        return cy.get(selectors.button.contunueButton).click();
    }
    clickOnSignInButton(){
        return cy.get(selectors.button.signInButton).click();
    }
    verifyTheSignInOption(signInText){
        return cy.get(selectors.label.signInLabel).invoke('text').then((signInLabelText) => {
                signInLabelText = signInLabelText.trim();
                expect(signInLabelText).to.equal(signInText);
        });
    }
    verifyTheBlankUserIDErrorMessage(blankUserIDErrorMessage){
        return cy.get(selectors.errorMessages.blankErrorUserIDMessage).invoke('text').then((getErrorMessage) =>{
                getErrorMessage = getErrorMessage.trim()
                expect(getErrorMessage).to.have.equal(blankUserIDErrorMessage);
        });
    }
    verifyTheWithOutAtTheRateUserIDErrorMessage(withOutAtTheRateErrorMessage){
        return cy.get(selectors.errorMessages.withOutAtTheRateMessage).invoke('text').then((erroMessage) => {
                erroMessage = erroMessage.trim();
                expect(erroMessage).to.have.equal(withOutAtTheRateErrorMessage);
        })
    }
    verifyTheWrongUserIDErrorMessage(wrongUserIDErrorMessage){
        return cy.get(selectors.errorMessages.wrongUserIdErrorMessage).invoke('text').then((wrongErrorMessage) => {
            wrongErrorMessage = wrongErrorMessage.trim();
            expect(wrongErrorMessage).to.have.equal(wrongUserIDErrorMessage)
        });
    }
    verifyTheBlankPasswordErrorMessage(blankPasswordErrorMessage){
        return cy.get(selectors.errorMessages.blankPasswordMessage).invoke('text').then((getBlankPasswordError) => {
            getBlankPasswordError = getBlankPasswordError.trim();
            expect(getBlankPasswordError).to.have.equal(blankPasswordErrorMessage);
        })
    }
    verifyTheWrongPasswordErrorMessage(wrong_Password_ErrorMessage){
        cy.get(selectors.errorMessages.wrongPasswordErrorMessage).invoke('text').then((getWrongPasswordError) => {
            getWrongPasswordError = getWrongPasswordError.trim();
            expect(getWrongPasswordError).to.have.equal(wrong_Password_ErrorMessage);
        });
    }
 

}

export default new SignInPage();