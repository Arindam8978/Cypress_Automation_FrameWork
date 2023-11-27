const { defineConfig } = require("cypress");
module.exports = defineConfig({
  // env : {
  //     //url : "https://www.amazon.in/",
  // },
  
  projectId: "2u9ptb",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
     baseUrl: 'https://www.amazon.in/', 
     //specPattern : "cypress/e2e/*.js"
  },
 
});
