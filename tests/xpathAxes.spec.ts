import {test, expect, Locator} from "@playwright/test";

test("XPath Axes Examples", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // =====================================
    // 1. SELF AXIS
    // =====================================
    const germanyCell: Locator =
        page.locator("//td[normalize-space()='Germany']/self::td");

    await expect(germanyCell).toHaveText("Germany");

    // =====================================
    // 2. PARENT AXIS
    // =====================================
    const parentRow: Locator =
        page.locator("//td[normalize-space()='Germany']/parent::tr");

    await expect(parentRow).toContainText("Maria Anders");

    // =====================================
    // 3. CHILD AXIS
    // Get all td children of Germany row
    // =====================================
    const childCells: Locator =
        page.locator("//td[normalize-space()='Germany']/parent::tr/child::td");

    await expect(childCells).toHaveCount(3);

    console.log("Company:", await childCells.nth(0).textContent());
    console.log("Contact:", await childCells.nth(1).textContent());
    console.log("Country:", await childCells.nth(2).textContent());

    // =====================================
    // 4. ANCESTOR AXIS
    // Get table ancestor of Germany cell
    // =====================================
    const tableAncestor: Locator =
        page.locator("//td[normalize-space()='Germany']/ancestor::table");

    await expect(tableAncestor).toBeVisible();

    // =====================================
    // 5. DESCENDANT AXIS
    // Get all td descendants of table
    // =====================================
    const descendants: Locator =
        page.locator("//table[@id='customers']/descendant::td");

    await expect(descendants).toHaveCount(18);

    // =====================================
    // 6. FOLLOWING-SIBLING AXIS
    // Contact after Company
    // =====================================
    const followingSibling: Locator =
        page.locator("//td[normalize-space()='Alfreds Futterkiste']/following-sibling::td[1]");

    await expect(followingSibling).toHaveText("Maria Anders");

    // =====================================
    // 7. PRECEDING-SIBLING AXIS
    // Contact before Germany
    // =====================================
    const precedingSibling: Locator =
        page.locator("//td[normalize-space()='Germany']/preceding-sibling::td[1]");

    await expect(precedingSibling).toHaveText("Maria Anders");

    // =====================================
    // BONUS: ANCESTOR-OR-SELF
    // =====================================
    const ancestorOrSelf: Locator =
        page.locator("//td[normalize-space()='Germany']/ancestor-or-self::td");

    await expect(ancestorOrSelf).toHaveText("Germany");

});