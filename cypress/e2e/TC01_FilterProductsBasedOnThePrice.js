import HomePage from "../pageObjects/HomePage";
import ProductListPage from "../pageObjects/ProductListPage";

describe('Amazon Filte price Test', () => {
    let data;
    before(() => {
        cy.visit('/');
        cy.fixture('TestData').then((fixtureData) => {
            data = fixtureData; // Assign the fixture data to the variable
        });
    });

    it('Filter products based on the prices', () =>
    {         
        HomePage.enterDataInSearchField(data.searchProductType);
        ProductListPage.enterMinimumPrice(data.minimumAmount);
        ProductListPage.enterMaximumPrice(data.maximumAmount);
        ProductListPage.enterGoButton();
        ProductListPage.verifyTheSortedProductBasedOnPrice(data.minimumAmount,data.maximumAmount);
        

    });  

 

});   
