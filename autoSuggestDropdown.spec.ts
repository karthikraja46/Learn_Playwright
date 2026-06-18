import {test, expect, Locator} from "@playwright/test";

test("Learning how to do the autosuggest dropdowns", async ({page})=>{
    await page.goto("https://www.flipkart.com/");

    await page.locator("input[name='q']").fill("smart"); // search text
    await page.waitForTimeout(5000);

    // get all the suggested options cmd+shift+p choose emulate focused page

    const options_dropdown:Locator = await page.locator("ul>li");
    const count = await options_dropdown.count();
    console.log("Number of suggsted options", count);

    await page.waitForTimeout(4000);


});
