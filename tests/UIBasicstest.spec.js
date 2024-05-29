const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test' , async ({browser}) =>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        //CSS. Xpath
        await page.locator('#username').type("rahulshetty");
        await page.locator("[type='password']").type("learning");
        await page.locator("#signInBtn").click();
        console.log(await page.locator("[style*='block']").textContent());
});


test('UI Controls', async ({page}) =>
{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        const dropdown = page.locator("select.form-control")
        await dropdown.selectOption("consult");
        await page.locator(".radiotextsty").last().click();
        await page.locator("#okayBtn").click();
        await page.pause();     
});