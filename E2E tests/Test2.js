var assert = require('assert');
//var assert = require('chai').assert;
var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe("webpage has loaded", () =>{
    it("should display link", async () => {
        /*
        driver.navigate().to("http://localhost:3000/")
        .then(() => driver.findElement(webdriver.By.css("a[data-testid='app-link']")))
        .then(element => console.log("HREF: " + element.getAttribute("href")));
        */

        before(() => {
            //Load webapage
            driver.get("http://localhost:3000/");
        });
        

/*
            driver.findElement(webdriver.By.css("a[data-testid='app-link']"))
                .then(element => {
                    console.log("in hihihhihhihh");
                    assert(element).to.not.be.null;
                });
    */

        console.log("hi");

        var logo = driver.findElements(webdriver.By.css("a[data-testid='app-link']")).size();


        //Assert whether logo is displayed
       assert.notEqual(logo, 0);
        
        after(() => {
            //clean up
            driver.quit();
        });
    });
});