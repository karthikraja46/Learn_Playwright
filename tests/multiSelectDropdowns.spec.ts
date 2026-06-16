import { test, Locator, expect} from "@playwright/test";

test("Multi select drop downs", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com");

    // 1) Select option from the dropdown - 4 ways
    await page.locator("#colors").selectOption(['Red','Blue','Green']); // using visible text
    await page.locator("#colors").selectOption(['red','green', 'white']); // using the value attribute
    await page.locator("#colors").selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]);
    await page.locator("#colors").selectOption([{index:0},{index:1},{index:2}]);


    // 2) Check the number of options in the dropdown
    const dropDownOptions_colours: Locator = await page.locator('#colors>option');
    await expect(dropDownOptions_colours).toHaveCount(7)

    // 3) Check an option present in the dropdown
    const allTextContent_colours = await dropDownOptions_colours.allTextContents();
    const colors_different = allTextContent_colours.map(text => text.trim().toLowerCase());
    // console.log(colors_different);
    await expect(colors_different).toContain('green');
    
    // 4) printing the options from the dropdown
    for (const option of colors_different){
        console.log(option);
    }



    await page.waitForTimeout(2000);

})
