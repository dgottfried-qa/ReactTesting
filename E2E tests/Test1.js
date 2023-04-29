var assert = require('assert');
var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser('chrome').build();


 describe("webpage should load correctly", () =>{
    before(() => {
        //Load webapage
        driver.get("http://localhost:3000/");
    });

    it("should have page title", async () => {
        const pageTitle = await driver.getTitle();
        assert.equal(pageTitle, "React App");
    });

    it("should display link", async () => {
        //var linkTag = driver.findElement(webdriver.By.tagName('a'));
        var linkTag = driver.findElement(webdriver.By.css("a[data-testid='app-link']"));
        var link = await linkTag.getAttribute("href");

        assert.equal(link, "https://reactjs.org/");
    });

    it("should display edit instructions", async () => {
        var editText = await driver.findElement(webdriver.By.xpath("/html/body/div/div/header/p")).getText();
        //console.log(editText);
        assert.equal(editText, "Edit src/App.js and save to reload.")

    });

    after(() => {
        //clean up
        driver.quit();
    });
});