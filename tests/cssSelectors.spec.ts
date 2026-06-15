import { test, expect, Locator } from "@playwright/test";

test("Verify CSS locator types", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Tag + ID
    const searchBoxById: Locator =page.locator("input#small-searchterms");
    await expect(searchBoxById).toBeVisible();

    // 2. Tag + Single Class
    const searchBoxByClass: Locator = page.locator("input.search-box-text");
    await expect(searchBoxByClass).toBeVisible();

    // 3. Tag + Multiple Classes
    const searchBoxByMultipleClasses: Locator = page.locator("input.search-box-text.ui-autocomplete-input");
    await expect(searchBoxByMultipleClasses).toBeVisible();

    // 4. Class Only
    const searchBoxClassOnly: Locator = page.locator(".search-box-text");
    await expect(searchBoxClassOnly).toBeVisible();

    // 5. ID Only
    const searchBoxIdOnly: Locator = page.locator("#small-searchterms");
    await expect(searchBoxIdOnly).toBeVisible();

    // 6. Attribute
    const searchBoxByName: Locator = page.locator("input[name='q']");
    await expect(searchBoxByName).toBeVisible();

    // 7. Multiple Attributes
    const searchBoxByAttributes: Locator = page.locator("input[type='text'][name='q']");
    await expect(searchBoxByAttributes).toBeVisible();

    // 8. Fill and Verify
    await searchBoxById.fill("T-Shirts");
    await expect(searchBoxById).toHaveValue("T-Shirts");
});
