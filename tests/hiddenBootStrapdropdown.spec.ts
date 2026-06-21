import { test, expect, Locator } from "@playwright/test";

test("Bootstrap hidden dropdown", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  // Login
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  // Click PIM
  const pim = page.getByText("PIM", { exact: true });
  await pim.click();

  console.log('it is clicked');

  // click job title dropdown
  await page.locator('form i').nth(2).click();

  // dropdown options
  const options: Locator = page.locator("div[role='listbox'] span");
  console.log('scelevelvev;eveeveve');

  // wait for dropdown
  await expect(options.first()).toBeVisible();

  const count: number = await options.count();
  console.log("Number of options in dropdown:", count);

  // print all the options
  for(let i = 0; i<count; i++){
    console.log(await options.nth(i).allTextContents());
  }

  //select or click on option
  for (let i = 0; i < count; i++) {
  const text = await options.nth(i).innerText();

  if (text.trim().toLowerCase() === "automation tester") {
    await options.nth(i).click();
    break;
  }
}

  await page.waitForTimeout(4000);

});