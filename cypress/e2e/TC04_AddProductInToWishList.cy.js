import SignInPage from "../pageObjects/SignInPage";
import HomePage from "../pageObjects/HomePage";
import WishListPage from "../pageObjects/WishListPage";
import ProductListPage from "../pageObjects/ProductListPage";
describe('Add Product in wishlist' , ()=> {

    let data;
    before(() => {
        
        cy.fixture('TestData').then((fixtureData) => {
            data = fixtureData;
        });
    });
    beforeEach(() => {
        cy.visit('/');
        HomePage.clickOnTheAccountAndListOption();
        SignInPage.enterEMailInToEMailTextBox(data.emailId);
        SignInPage.clickOnContinueButton();
        SignInPage.enterPasswordInToPasswordTextBox(data.password);
        SignInPage.clickOnSignInButton();
        HomePage.verifyTheUserNameInTheHomePage(data.userIdName);
    })

    // const signInPage = new SignInPage();
    // const homePage = new HomePage();
    // const wishListPage = new WishListPage();
    // const productListPage = new ProductListPage();
    it('Add product into Wishlist',() => {
   
        HomePage.enterDataInSearchField(data.wishListProduct);
        ProductListPage.clickOnTheSelectedProduct();
        WishListPage.clickOnTheAddToWishListButton();
        WishListPage.clickOnViewYourWishListButton();
        WishListPage.verifyTheWishListProduct(data.wishListProduct);
    });
    it('Delete the wishlist product', () => {
        HomePage.clickOnTheAccountAndListOption();
        WishListPage.clickOnTheListOptionForWishList();
        
        cy.isProductAvailable(data.wishListProduct).then((isProductPresent) => {
            if(isProductPresent)    
            {
                WishListPage.clickOnTheDeleteWishListButton();
                WishListPage.verifyTheSuccessfullyDeletedWishListMessage(data.wishListDeletedMessage);
            }
            else
            {
                WishListPage.verifyThatThereIsNoProductFound(data.noProductFoundMessage)
            }

        });
    });

});