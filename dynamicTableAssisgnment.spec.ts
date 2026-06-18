import { test, expect, Locator } from "@playwright/test";

test('Get Firefox network load', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table: Locator = page.locator("table.table > tbody");
    await expect(table).toBeVisible();

    const rows = await table.locator("tr").all();

    let firefoxNetwork = "";

    for (const row of rows) {
        const processName = await row.locator("td").nth(0).innerText();

        if (processName === "Firefox") {
            firefoxNetwork = await row.locator("td").nth(1).innerText(); // Network column
            console.log("Firefox Network Load:", firefoxNetwork);
            break;
        }
    }

    const yellowText = await page.locator("#chrome-cpu").innerText();

    console.log("Yellow text:", yellowText);
});