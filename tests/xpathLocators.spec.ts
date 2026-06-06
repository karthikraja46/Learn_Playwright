import { test, expect, Locator } from "@playwright/test";

test("Verifying the logo using XPath (Relative/Absolute)", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  // Absolute XPath
  const logo_absolute: Locator = page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img");
  await expect(logo_absolute).toBeVisible();

  // Relative XPath
  const logo_relative: Locator = page.locator("xpath=//img[@alt='Tricentis Demo Web Shop']");
  await expect(logo_relative).toBeVisible();

  // contains()
  const products:Locator = page.locator("//img[contains(@alt,'Build your own cheap computer')]");
  const productCount: number = await products.count();
  console.log("No of computer related products", productCount);
  expect(productCount).toBeGreaterThan(0);
  console.log("First computer related product:", await products.first().textContent());
  console.log("Last computer Releated oproducts:", await products.last().textContent());
  let productTitles: string[] = await products.allTextContents();

  for (let pt of productTitles){
    console.log(pt);

  }

  // text()
  const regLink: Locator = page.locator("//a[text()='Register']");
  await expect(regLink).toBeVisible();

  //   //console.log("Nth computer Releated oproducts:", await products.nth(1).textContent());

//   await expect(products).toBeVisible();

// | XPath                                       | Matches              |
// | ------------------------------------------- | -------------------- |
// | `//button[@name='start']`                   | START                |
// | `//button[contains(@name,'st')]`            | START, STOP, RESTART |
// | `//button[starts-with(@name,'st')]`         | START, STOP          |
// | `//button[text()='START']`                  | START                |
// | `//button[text()='START' or text()='STOP']` | START, STOP          |

});



