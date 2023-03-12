var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe("daniel's first test group", () =>{
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