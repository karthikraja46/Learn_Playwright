import {test, expect, Locator} from "@playwright/test";

test('Comparing the web methods', async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    const products:Locator = await page.locator('.product-title'); // 6 elements

    // innertext() vs textContent()
    console.log(await products.nth(1).innerText());
    console.log(await products.nth(1).textContent());

    const count = await products.count();
    for (let i = 0; i< count; i++){
        // const productName: string = await products.nth(i).innerText(); // extracts the plain text. Elimknates the whitespaces and line break
        // console.log(productName);

        // const productName: string | null = await products.nth(i).textContent();
        // console.log(productName); // retrieves the raw DOM value we have to trim the value use the map 
        const productNames: string[] = await products.allTextContents();
        console.log("Product Names captured by allTextContents():", productNames);
        const productNamesTrimmed: string[] = productNames.map(text => text.trim());
        console.log("Product Names after trimming:", productNamesTrimmed);
        

    }
});