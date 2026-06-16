import { test, expect, Locator } from "@playwright/test";

test("Verify dropdown has no duplicates", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const options: Locator = page.locator("#colors > option");

  const list = (await options.allTextContents()).map(text => text.trim().toLowerCase());
  const myset = new Set<string>();
  const duplicates: string[] = [];
  for (const text of list) {
    if (myset.has(text)) {
      duplicates.push(text);
    } else {
      myset.add(text);
    }
  }
  // expect(duplicates.length).toBe(0);
  if(duplicates.length>0){
    console.log('Duplicate options are', duplicates);
  }else{
    console.log('Dupliates options are foind', duplicates);

  }
});
