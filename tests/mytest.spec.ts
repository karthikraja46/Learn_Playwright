import {test, expect} from "@playwright/test";
/* Syntax

test("title", ()=> {

    //step 1
    //step 2
    //step 3

});

*/ 


test('Verify Page Title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    let title: string = await page.title();
    console.log('Title:', title);

    await expect(page).toHaveTitle('Swag Labs');
});