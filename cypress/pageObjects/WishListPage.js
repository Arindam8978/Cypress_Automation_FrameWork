const selectors = {

    button : {
        wishListButton : "#add-to-wishlist-button-submit",
        viewListButton : 'a[href*="view_your_list"]',
        deletedWishListButton : '[data-action="reg-item-delete"]>span span input',
    },
    label : {
        wishListProduct : "h2.a-size-base >a",

    },
    link : {
        wishListLink : 'a[href*="ya_d_l_lists"]',
    },
    text :{
        deletedMessage : 'Deleted',
    }
}

class WishListPage{
    clickOnTheAddToWishListButton(){
      return cy.get(selectors.button.wishListButton).click();
    }
    clickOnViewYourWishListButton(){
        return cy.get(selectors.button.viewListButton).click();
    }
    verifyTheWishListProduct(wishListProduct){
        return cy.get(selectors.label.wishListProduct).invoke('text').then((productText) => {
          productText =  productText.trim().includes(wishListProduct)
          expect(productText).to.be.true;
        });
    }
    clickOnTheListOptionForWishList(){
        return cy.get(selectors.link.wishListLink).click();
    }
    clickOnTheDeleteWishListButton(){
        return cy.get(selectors.button.deletedWishListButton).click();
    }
    verifyTheSuccessfullyDeletedWishListMessage(wishListDeletedMessage){
        return cy.contains(selectors.text.deletedMessage).should('have.text',wishListDeletedMessage);
    }
    verifyThatThereIsNoProductFound(noProductFoundMessage){
        return cy.log(noProductFoundMessage)
    }
    VerifyProductPresentOrNotInTheWishList(wishListProduct){
        debugger;
       if(cy.contains(wishListProduct)){
            return true;
        }
        else{
            return false;
        }
    }
}

export default new WishListPage();