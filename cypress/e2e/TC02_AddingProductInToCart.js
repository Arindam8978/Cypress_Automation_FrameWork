import SignInPage from "../pageObjects/SignInPage";
import HomePage from "../pageObjects/HomePage";
import ProductListPage from "../pageObjects/ProductListPage";
describe('Add the product', function() {
    let data;
    before(() => {
        cy.visit('/');
        cy.fixture('TestData').then((fixtureData) => {
            data = fixtureData;
        });
    })

    it('Add product into cart', function() {
        HomePage.clickOnTheAccountAndListOption();

        SignInPage.enterEMailInToEMailTextBox(data.emailId);
        SignInPage.clickOnContinueButton();
        SignInPage.enterPasswordInToPasswordTextBox(data.password);
        SignInPage.clickOnSignInButton();

        HomePage.verifyTheUserNameInTheHomePage(data.userIdName);
        HomePage.enterDataInSearchField(data.searchProductType);

        ProductListPage.clickOnTheSelectedProduct();
        ProductListPage.clickOnTheAddToCartOption();
        ProductListPage.verifyAddToCartSuccessMessage(data.cartSuccessMessage);
        ProductListPage.clickOnTheProceedToCheckOutButton();
        ProductListPage.verifyTheSelectDeliverAddressMessage(data.deliveryAddressMessage)

        cy.go('back');

        ProductListPage.clickOnAddToCartIconOption();
        ProductListPage.clickOnTheDeleteOptionFromCart();
        ProductListPage.verifyTheSuccessfullCartDeleteMessage(data.cartDeleteSuccessMessage);
        
        HomePage.clickOnTheAllHamBurgerOptionInHomePage();
        HomePage.clickOnTheSignOutOption();
        SignInPage.verifyTheSignInOption(data.signInText);

    });

});