const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test' , async ({browser}) =>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        const cardTitles = page.locator (".card-body a");
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
        console.log(await cardTitles.first().textContent());
        console.log(await cardTitles.nth(1).textContent());
        const allTitles = await cardTitles.allTextContents();
        console.log(allTitles);


});


test.only('UI Controls', async ({page}) =>
{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        const documentLink = page.locator("[href*='documents-request']");
        const dropdown = page.locator("select.form-control")
        await dropdown.selectOption("consult");
        await page.locator(".radiotextsty").last().click();
        await page.locator("#okayBtn").click();
        console.log(await page.locator(".radiotextsty").last().isChecked());
        await expect (page.locator(".radiotextsty").last()).toBeChecked();
        await page.locator("#terms").click();
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();  
        expect (await page.locator("#terms").isChecked()).toBeFalsy();
        await expect(documentLink).toHaveAttribute("class", "blinkingText");
});

test.only ('Child windows handle', async ({page})=>
{
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");
        
        const newPage = await Promise.all([
                context.waitForEvent('page');
                documentLink.click();
        ])
        
        //git test
});