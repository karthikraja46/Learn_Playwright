import{test, expect, Locator } from '@playwright/test';

test('Read the data from all the table pages', async ({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let hasmorepages = true;
    while(hasmorepages){
        const rows = await page.locator("#example tbody tr").all();
        for(let row of rows){
            console.log(await row.innerText());
        }

        const nextButton: Locator = await page.locator("button[aria-label = 'Next']");
        const isDisabled = await nextButton.getAttribute('class');
        if(isDisabled?.includes('disabled')){
            hasmorepages = false;
        }
        else{
            await nextButton.click();
        }
    }
});



// import { test, expect, Locator } from '@playwright/test';

test.only("Filter the rows and check the rows count", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown: Locator = page.locator("#dt-length-0");
    await dropdown.selectOption({ label: '25' });
    const rows = await page.locator('#example tbody tr').all();
    console.log("Row count:", rows.length);
    expect(rows.length).toBe(25);
});



test.only("Search for the specific data in the field of search", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const searchBox: Locator = await page.locator("#dt-search-0");
    await searchBox.fill('Paul Byrd');

    const rows = await page.locator("#example tbody tr").all();

    if(rows.length>= 1){

        let matchFound = false;
        for(let row of rows){
            const text = await row.innerText();
            if(text.includes('Paul Byrd')){
                console.log("Record exist - found");
                matchFound = true;
                break;
            }
        }
        expect(matchFound).toBeTruthy();

    }
    else{
        console.log("No rows found with the search text");
    }

});
