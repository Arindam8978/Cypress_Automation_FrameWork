const selectors = {
    input : {   
        minimunPrice : "#low-price",
        maximumPrice : "#high-price",

    },
    button : {
        goButton : ".a-button-input",
        addToCartButton : "#add-to-cart-button",
        checkOutButton : '[id$="checkout-button"]>span>span',
    },
    label : {
        price : 'div[class*="puis-price-instructions"] span[class="a-price-whole"]',
        selectedProductName : "#search h2 a ",
        addToCartSuccessMessage : "#attach-added-to-cart-message h4",
        selectDeiliveryMessage: ".a-color-state",
        addToCartIcon : "#nav-cart-count-container",
        deleteOption : '[value="Delete"]',
    },
    text : {
        successDeleteMessage : ".a-row>h1",
    }
}

class ProductListPage {

    enterMinimumPrice(minimumAmount){
        return cy.get(selectors.input.minimunPrice).type(minimumAmount);
    }
    enterMaximumPrice(maximumAmount){
        return cy.get(selectors.input.maximumPrice).type(maximumAmount);
    }
    enterGoButton(){
        return cy.get(selectors.button.goButton).click();
    }
    verifyTheSortedProductBasedOnPrice(minimumAmount,maximumAmount) {
        cy.get(selectors.label.price).each((element) => {
            debugger;
            const productPriceLength = element.length;
            const price = parseInt(element.text().replace(/,/g,''));  //  /[^0-9.]/g,''
            expect(price).to.have.gte(minimumAmount);
            expect(price).to.have.lte(maximumAmount);
        });

       // const productPrices = []; // Initialize an array to store prices

       //  cy.get(selectors.label.price).each(($el) => {
        //   // Extract the text, convert it to a number, and add it to the array
        //   cy.wrap($el).invoke('text').then((text) => {
        //     //debugger;
        //     const price = parseInt(text.replace(/[^0-9.]/g, ''));
        //     productPrices.push(price); // Add the price to the array
        //   });
        // }).then(() => {
        //   // Iterate through the array and verify price range for each product
        //   productPrices.forEach((price) => {
        //     debugger;
        //     expect(price).to.be.gte(minimumAmount);
        //     expect(price).to.be.lte(maximumAmount);
        //   });
        // });
       


        // cy.get(selectors.label.price).then((productsPrice)=>
        // {


            // {               
            //     if(products[i]>=lowPrice && products[i]<=maxPrice)
            //         {                     
            //              expect(true).to.equal(true);               
            //         }
            //          else
            //         {
            //            expect(true).to.equal(false);
            //         }
            // }
          
            //     productsPrice=productsPrice.replace(/,/g,'');
            //     let j=0,i=0;
            //     while(i<productsPrice.length)
            //     {
            //         j=i+5;
            //        let productPrice = productsPrice.substring(i,j);
        
            //     if(productPrice >= 10000 && productPrice <= 20000)
            //     {
            //         expect(true).to.equal(true);
                   
            //     }
            //     else
            //     {
            //        expect(true).to.equal(false);
            //     }

            //     i=j;
             //}
        
       
        //})

    }
    clickOnTheSelectedProduct(){
        return cy.get(selectors.label.selectedProductName).invoke('removeAttr','target').first().click();
        
    }
    clickOnTheAddToCartOption(){
        return cy.get(selectors.button.addToCartButton).click();
    }
    verifyAddToCartSuccessMessage(successMessgae){
        return cy.get(selectors.label.addToCartSuccessMessage).should('have.text',successMessgae);
    }
    clickOnTheProceedToCheckOutButton(){
        return cy.get(selectors.button.checkOutButton).click({force:true});
    }
    verifyTheSelectDeliverAddressMessage(deliveryAddressMessage){
        cy.get(selectors.label.selectDeiliveryMessage).invoke('text').then((deliveryText) =>{
               const cleanedText = deliveryText.replace(/\d/g,'').trim();
                expect(deliveryAddressMessage).to.eq(cleanedText);
        })
    }
    clickOnAddToCartIconOption(){
        return cy.get(selectors.label.addToCartIcon).click();
    }
    clickOnTheDeleteOptionFromCart(){
        return cy.get(selectors.label.deleteOption).click();
    }
    verifyTheSuccessfullCartDeleteMessage(cartDeleteSuccessMessage){
         cy.wait(2000); // taking time to loading the success message
          return cy.get(selectors.text.successDeleteMessage).invoke('text').then((deletedMessageText) =>{
            deletedMessageText = deletedMessageText.trim();
                expect(deletedMessageText).to.equal(cartDeleteSuccessMessage);
        });
    }

}

export default new ProductListPage();