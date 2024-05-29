const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test' , async ({browser}) =>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("http:google.com");
});

test('page Playwright test' , async ({page}) =>
{
       await page.goto("http:google.com");
       //get the title
       console.log(await page.title());
       await expect(page).toHaveTitle("Google")
});
test.only('UI Controls', async ({page}) =>
{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        const dropdown = page.locator("select.form-control")
        await dropdown.selectOption("consult");
        await page.pause();
});