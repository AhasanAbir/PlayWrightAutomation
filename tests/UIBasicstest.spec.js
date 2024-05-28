const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test' , async ({browser}) =>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("http:google.com");
});

test.only('page Playwright test' , async ({page}) =>
{
       await page.goto("http:google.com");
       //get the title
       console.log(await page.title());
       await expect(page).toHaveTitle("Google")
});