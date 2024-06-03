const {test, expect} = require('@playwright/test');


test.only('Browser Context Playwright test' , async ({browser}) =>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        //CSS. Xpath
        await userName.type("rahulshetty");
        await page.locator("[type='password']").type("learning");
        await signIn.click();
        console.log(await page.locator("[style*='block']").textContent());
        //type -fill
        await userName.fill("");
        await userName.fill("rahulshettyacademy")
        await signIn.click();
        console.log(await page.locator (".card-body a").first().textContent())
        console.log(await page.locator (".card-body a").nth(1).textContent())

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