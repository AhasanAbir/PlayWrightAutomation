const {test, expect} = require('@playwright/test');


test.only('Browser Context Playwright test' , async ({page}) =>
{
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill("anshika@gmail.com");
        await page.locator("userPassword").type("Iamking@000");
        await page.locator("[value='Login']").click();
        
});