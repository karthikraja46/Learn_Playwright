/* 
 
CSS ( Cascading style sheets)

html + css+js

1) Absolute CSS locators
2) Relative CSS locators

tag with id    tag#id
tag with class  tag.class
tag with any other attribute tag[attribute=value]
tag with class and attribute tag.class[attribute = value]

page.locator(css/Xpath)

*/

import {test, expect ,Locator} from "@playwright/test";

test('Verify the CSS locators', async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // tag#id

    // const searchBox: Locator = page.locator("input#small-searchterms");
    const searchBox: Locator = page.locator("#small-searchterms");
    await expect(searchBox).toBeVisible();
    await expect(searchBox).toBeEnabled();

    await searchBox.fill('T-Shirts');
    await expect(searchBox).toHaveValue('T-Shirts');
    // await page.waitForTimeout(2000);

    // tag.class
    await page.locator("input.search-box-text").fill("T-Shirts");
    await page.locator(".search-box-text").fill("T-Shirts");

    await page.waitForTimeout(3000);

    // tag[attribute=value]

    await page.locator("input[name=q]").fill("T-Shirts");
    await page.locator("[name=q]").fill("T-Shirts");

    

    


    

})

