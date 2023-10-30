const selectors = {
    label : {
        yourAddress : 'a[href*="addresses"]',
        addAddress : "#ya-myab-plus-address-icon",
        pinCodeText : "#glow-ingress-line2",
        successAddressMessage : ".a-alert-heading",
        successDeleteAddress : "#yaab-alert-box h4",
    },
    input : {
        fullNameTextBox : "#address-ui-widgets-enterAddressFullName",
        mobileNumber : "#address-ui-widgets-enterAddressPhoneNumber",
        pincode : "#address-ui-widgets-enterAddressPostalCode",
        address1 : "#address-ui-widgets-enterAddressLine1",
        address2 : "#address-ui-widgets-enterAddressLine2",
        landMark : "#address-ui-widgets-landmark",
       
    },
    checkBox : {
        defaultAddressCheckBox : "#address-ui-widgets-use-as-my-default"
    },
    button : {
        submitAddress : '[aria-labelledby*="submit"]',
        deleteAddress : "#deleteAddressModal-0-submit-btn",
    },
    link : {
        removeAddress : ".a-link-normal.delete-link",
    }
}
class AddressPage{
    clickOnYourAddressOption(){
        return cy.get(selectors.label.yourAddress).click();
    }
    clickOnAddAddressOption(){
        return cy.get(selectors.label.addAddress).click();
    }
    enterFullNameInAddress(fullName){
        return cy.get(selectors.input.fullNameTextBox).type(fullName);
    }
    enterMobileNumberInAddress(MobileNumber){
        return cy.get(selectors.input.mobileNumber).type(MobileNumber);
    }
    enterPinCodeInAddress(pinCode){
        return cy.get(selectors.input.pincode).type(pinCode);
    }
    enterFirstAddress(address1){
        return cy.get(selectors.input.address1).type(address1);
    }
    enterSecondAddress(address2){
        return cy.get(selectors.input.address2).type(address2);
    }
    enterLandMarkInAddress(landMark){
        return cy.get(selectors.input.landMark).type(landMark);
    }
    clickOnDefaultAddressCheckBox(){
        return cy.get(selectors.checkBox.defaultAddressCheckBox).check().should('be.checked');
    }
    clickOnSubmitAddressButton(){
        return cy.get(selectors.button.submitAddress).click();
    }
    verifyPinCodeAfterSubmitAddress(pinCode){
        return cy.get(selectors.label.pinCodeText).invoke('text').then((getPinCodeText) => {
            getPinCodeText = getPinCodeText.trim().split(" ");
            const getAcutalPinCode = parseInt(getPinCodeText[1]);
            expect(getAcutalPinCode).to.equal(pinCode);
        });
    }
    verifyTheSuccessFullAddressAddedMessage(addressMessageAddedSuccessfully){
       
        cy.get(selectors.label.successAddressMessage).invoke('text').then((addressMessage) => {
            addressMessage = addressMessage.trim();
            expect(addressMessage).to.equal(addressMessageAddedSuccessfully);
        });
    }
    clickOntheRemoveAddressOption(index){
        return cy.get(selectors.link.removeAddress).eq(index).click();
    }
    clickOnTheYesAsDeleteAddressPopUp(){
        cy.wait(4000); //taking time to loading the address delete button 
        return cy.get(selectors.button.deleteAddress).click();
    }
    veriftTheAddressIsDeletedSuccessFully(deletedAddressSuccessMessage){
        return cy.get(selectors.label.successDeleteAddress).invoke('text').then((getSuccessDeletedMessage) =>{
            getSuccessDeletedMessage = getSuccessDeletedMessage.trim();
            expect(deletedAddressSuccessMessage).to.have.equal(getSuccessDeletedMessage)
        });
    }
    enterFullAddressDetails(fullName,MobileNumber,pinCode,address1,address2,landMark){
        this.enterFullNameInAddress(fullName);
        this.enterMobileNumberInAddress(MobileNumber)
        this.enterPinCodeInAddress(pinCode);
        this.enterFirstAddress(address1);
        this.enterSecondAddress(address2);
        this.enterLandMarkInAddress(landMark)
    }
}

export default new AddressPage();