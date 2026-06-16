import{test, expect, Locator} from "@playwright/test";

test('Verifying the sorted dropdown', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropdownOptions:Locator = await page.locator("#animals>option");
    console.log(await dropdownOptions.allTextContents());
    const optionsText_animals:string[] = (await dropdownOptions.allTextContents()).map(text=> text.trim());
    
    const originalList:string[] = [...optionsText_animals]; // rest parameters
    const sortedList: string[] = [...optionsText_animals].sort();

    await expect(originalList).toEqual(sortedList);
    // sort method is mutable in playwright
    console.log('Original list', originalList);
    console.log('sorted list', sortedList)
    await page.waitForTimeout(3000);


})
