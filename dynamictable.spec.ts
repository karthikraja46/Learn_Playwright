import { test, expect, Locator } from "@playwright/test";

test('Verify chrome cpu load in dynamic table', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table: Locator = page.locator("table>tbody");
    await expect(table).toBeVisible();

    const rows = await table.locator("tr").all();

    let cpuLoad = "";

    // Get Chrome CPU value from the table
    for (const row of rows) {
        const processName = await row.locator("td").nth(0).innerText();
        if (processName === "Chrome") {
            cpuLoad = await row.locator("td").nth(1).innerText();
            console.log("Chrome CPU Load:", cpuLoad);
            break;
        }
    }

    // Get the yellow text
    const yellowText = await page.locator("#chrome-cpu").innerText();
    console.log("Yellow text:", yellowText);
    // Compare using if else
    if (yellowText.includes(cpuLoad)) {
        console.log("PASS: CPU values match");
    } else {
        console.log("FAIL: CPU values do not match");

    }
});


