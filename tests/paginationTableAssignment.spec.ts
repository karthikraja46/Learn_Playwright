import { test, expect } from "@playwright/test";

test('Pagination assignment in test automation', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const pages = page.locator('#pagination li');
    const pageCount = await pages.count();

    console.log(`Total Pages: ${pageCount}`);

    for (let p = 0; p < pageCount; p++) {

        // Click the page number
        await page.locator('#pagination li').nth(p).click();
        // Get all rows on the current page
        const rows = page.locator('#productTable tbody tr');
        const rowCount = await rows.count();
        for (let r = 0; r < rowCount; r++) {
            const row = rows.nth(r);
            // Optional: get product name
            const productName = await row.locator('td').nth(1).textContent();
            const checkbox = row.locator('input[type="checkbox"]');
            await checkbox.check();
            await expect(checkbox).toBeChecked();
            console.log(`Checked: ${productName}`);
        }
    }
});