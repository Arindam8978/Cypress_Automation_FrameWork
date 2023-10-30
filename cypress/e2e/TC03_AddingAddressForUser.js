//import { add } from "cypress/types/lodash";
import AddressPage from "../pageObjects/AddressPage";
import HomePage from "../pageObjects/HomePage";
import SignInPage from "../pageObjects/SignInPage";

describe('Add Address', () => {

    let data;
    before(() => {
        cy.visit('/');
        cy.fixture('TestData').then((fixtureData) => {
            data = fixtureData;
        });
    });

    it('Add address for user', () => {
        HomePage.clickOnTheAccountAndListOption();
        SignInPage.enterEMailInToEMailTextBox(data.emailId);
        SignInPage.clickOnContinueButton();
        SignInPage.enterPasswordInToPasswordTextBox(data.password);
        SignInPage.clickOnSignInButton();

        HomePage.verifyTheUserNameInTheHomePage(data.userIdName);
        HomePage.clickOnTheAllHamBurgerOptionInHomePage();
        HomePage.clickOnYourAccountOption();

        AddressPage.clickOnYourAddressOption();
        AddressPage.clickOnAddAddressOption();
        AddressPage.enterFullAddressDetails(data.fullName,data.MobileNumber,data.pinCode,data.address1,data.address2,data.landMark);
        AddressPage.clickOnDefaultAddressCheckBox();
        AddressPage.clickOnSubmitAddressButton();
        AddressPage.verifyTheSuccessFullAddressAddedMessage(data.addressMessageAddedSuccessfully);
        HomePage.clickOnTheAccountAndListOption();
        AddressPage.verifyPinCodeAfterSubmitAddress(data.pinCode);

        HomePage.clickOnTheAccountAndListOption();

        AddressPage.clickOnYourAddressOption();
        AddressPage.clickOntheRemoveAddressOption(data.removeAddressIndex);
        AddressPage.clickOnTheYesAsDeleteAddressPopUp();
        AddressPage.veriftTheAddressIsDeletedSuccessFully(data.deletedAddressSuccessMessage);
        
        HomePage.clickOnTheAllHamBurgerOptionInHomePage();
        HomePage.clickOnTheSignOutOption();
        SignInPage.verifyTheSignInOption(data.signInText);
   
       

    });
});