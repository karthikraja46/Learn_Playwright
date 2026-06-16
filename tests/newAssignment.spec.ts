// import { test, expect, Locator } from "@playwright/test";

// test("Bstack demo assignment", async ({ page }) => {
//   await page.goto("https://bstackdemo.com/");

//   // locate the ORDER BY dropdown (select element inside .sort)
//   const orderbyElement: Locator = page.locator(".sort select");

//   // verify dropdown is visible and enabled
//   await expect(orderbyElement).toBeVisible();
//   await expect(orderbyElement).toBeEnabled();

//   // select lowest to highest
//   await orderbyElement.selectOption("lowestprice");

//   // Retrieve and print the product information
//   const names = await page.locator(".shelf-item__title").allTextContents();
//   const prices = await page.locator(".shelf-item__price").allTextContents();

//   const productNames = names.map(n => n.trim());
//     //   console.log(productNames);
//   const productPrices = prices.map(p => p.trim());
// //   console.log(productPrices);

//   // Verify product names and their prices count are equal
//   await expect(productNames.length).toBe(productPrices.length);

//   console.log("---- Products ----");

//   productNames.forEach((name, index) => {
//     console.log(`${name} - ${productPrices[index]}`);
//   });

//   // accesing the first element of the product pries list and first element of the product names list

//   const productNameslist = productNames[0];
//   const productPricesList = productPrices[0];
  
//   // print the lowest priced product name and its price in the console
//   console.log("\nLowest Priced Product:");
//   console.log(`${productPricesList} - $${productNameslist}`);





// });

import { test, expect } from "@playwright/test";

test("Verify product sorting and information retrieval", async ({ page }) => {
  // 1. Navigate to webpage
  await page.goto("https://bstackdemo.com/#");

  // 2. Interact with Order By dropdown
  const orderBy = page.locator(".sort select");

  await expect(orderBy).toBeVisible();
  await expect(orderBy).toBeEnabled();

  await orderBy.selectOption("lowestprice");

  // 3. Retrieve product names and prices
  const productNamesLocator = page.locator(".shelf-item__title");
  const productPricesLocator = page.locator(".shelf-item__price");

  const productNames = (await productNamesLocator.allTextContents())
    .map(name => name.trim());

  const productPrices = (await productPricesLocator.allTextContents())
    .map(price => Number(price.replace("$", "").trim()));

  // 4. Verify count match
  expect(productNames.length).toBe(productPrices.length);

  // 5. Print product name + price
  console.log("\n--- Product List ---");
  productNames.forEach((name, index) => {
    console.log(`${name} - $${productPrices[index]}`);
  });

  // 6. Lowest priced product
  const lowestPrice = productPrices[0];
  const lowestProduct = productNames[0];

  console.log("\nLowest Priced Product:");
  console.log(`${lowestProduct} - $${lowestPrice}`);

  // 7. Highest priced product
  const highestPrice = productPrices[productPrices.length - 1];
  const highestProduct = productNames[productNames.length - 1];

  console.log("\nHighest Priced Product:");
  console.log(`${highestProduct} - $${highestPrice}`);
});

