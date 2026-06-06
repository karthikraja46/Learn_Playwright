/*
Locator - Identifies the elements on the page.
DOM - Document Object Model (API Interface provided by the browser in the backend at the run time)

These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/



import {test, expect, Locator} from "@playwright/test";

// test("verify the playwright locators", async ({page})=>{

//     await page.goto("https://demo.nopcommerce.com/");
//     // 1) page.getAltByText() - Indentifies the images and similar elements based on the alt attribute
//     // Use this locator and when your element supports alt text such as img and area elements.
//     const logo:Locator = page.getByAltText("nopCommerce demo store");
//     // console.log('the element is ',typeof(logo));
//     // console.log('the element is ',logo);
//     expect(logo).toBeVisible();
    
// });

// test('verify the playwright locators', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/');
//     console.log('URL:', page.url());
//     console.log('Title:', await page.title());

//     const logo:Locator = page.getByAltText("nopCommerce demo store");
//     console.log('the logo needs to be visible',logo)
//     // console.log('Count:', await logo.count());

//     // await expect(logo).toBeVisible();
// });


// 2)getByText() - find an element by text it contains whether the text contains.You may catch a subbstring , exact string 
// Use this locator to find the non interactiv elements like div, span, p etc

test('verify the playwright locators', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    // await expect(page.getByText("Swag Labs")).toBeVisible();
    // await expect(page.getByText("Swag")).toBeVisible();// this is a substring
    await expect(page.getByText(/Swag\s+Labs/)).toBeVisible();
    // const logo:Locator = page.getByAltText("")
    // console.log('URL:', page.url());
    // console.log('Title:', await page.title());
    // const logo:Locator = page.getByAltText("nopCommerce demo store");
    // console.log('the logo needs to be visible',logo)
    // console.log('Count:', await logo.count());

    // await expect(logo).toBeVisible();
});

