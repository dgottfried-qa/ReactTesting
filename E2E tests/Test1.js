var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser('chrome').build();
var assert = require('assert');

const By = webdriver.By; // useful Locator utility to describe a query for a WebElement
driver.navigate().to("Yahoo")
.then(() => driver.findElement(By.css("#login-username")))
.then(element => element.getAttribute("value"))
.then(value => console.log(value));

describe("Page loaded correctly", () =>{
    before(() => {
        driver.get("http://www.youtube.com");
    });

    it("should do the thing", () => {
        console.log("\n---thing---\n");
    });

    after(() => {
        driver.quit();
    });
});

describe("webpage has loaded", () =>{
    driver.navigate().to("http://localhost:3000/")
    .then(() => driver.findElement(webdriver.By.css("img [data-testid='app-logo']")))
    .then(() => console.log("hiiii"));
});

/*
describe("Logo is displayed", () =>{
    before(() => {
        //Load webapage
        driver.get("http://localhost:3000/")
    });
    
    //Look for logo, re-add the await
    const logo = driver.$('img [data-testid="app-logo"]')
    
    //Assert whether logo is displayed
    assert(logo).to.do.be.null;
    
    after(() => {
        //clean up
        driver.quit();
    });
});

*/