import {test, expect, Locator} from "@playwright/test";

test('Static web tables', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    // const table: Locator = page.locator("table[name='BookTable'] tbody");

    const table: Locator = page.locator("table[name='BookTable'] tbody");
    console.log(typeof(table));
    await expect(table).toBeVisible();
    // 1) count number of rows in a table
    const rows: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(rows).toHaveCount(7);

    const rowCount: number = await rows.count();
    console.log('Number of rows in a table', rowCount);
    await expect(rowCount).toBe(7);

});

