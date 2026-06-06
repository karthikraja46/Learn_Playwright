import{test, expect} from "@playwright/test";

test("Verify the page title",async ({page})=>{

    await page.goto("https://www.saucedemo.com");
    let url:string = page.url();
    console.log("url", url);
    await expect(page).toHaveURL(/sauce/);

});
