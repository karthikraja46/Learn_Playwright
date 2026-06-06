/*
Locator - Identifies the elements on the page.
DOM - Document Object Model (API Interface provided by the browser in the backend at the run time)

These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import { test, expect } from '@playwright/test';

test('OrangeHRM Built-in Locators Demo', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);

    // =========================
    // getByAltText()
    // =========================
    await expect(page.getByAltText('client brand banner')).toBeVisible();

    // =========================
    // getByPlaceholder()
    // =========================
    // await page.getByPlaceholder('Username').fill('Admin');

    // await page.getByPlaceholder('Password').fill('admin123');

    // =========================
    // getByRole()
    // =========================
    // await page.getByRole('button', { name: 'Login' }).click();

    // Wait for Dashboard
    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    // =========================
    // getByText()
    // =========================
    await expect(page.getByText("Dashboard")).toBeVisible();

    // =========================
    // getByRole() - Menu Item
    // =========================
    await page.getByRole('link', { name: 'Admin' }).click();

    // =========================
    // getByText()
    // =========================
    await expect(page.getByText('System Users')).toBeVisible();

});


