// import { test, expect } from "@playwright/test";

// test('Jquery datepicker', async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com");

//     // const datePicker = page.locator('#datepicker');
//     // await expect(datePicker).toBeVisible();

//     // await datePicker.click();

//     // const year = '2026';
//     // const month = 'May';
//     // const date = '10';
// å
//     while (true) {

//         const currentMonth = (await page.locator('.ui-datepicker-month').textContent())?.trim();
//         const currentYear = (await page.locator('.ui-datepicker-year').textContent())?.trim();

//         if (currentMonth === month && currentYear === year) {
//             break;
//         }

//         //Future
//         // await page.locator('.ui-datepicker-next').click();

//         //past
//         await page.locator('.ui-datepicker-prev').click();
//     }

//     const allDatePicker = await page.locator(".ui-datepicker-calendar td").all();

//     for(let dt of allDatePicker){
//         const dateText = await dt.innerText();
//         if(dateText==date){
//             await dt.click();
//             break;

//         }
//     }


//     // IMPORTANT: wait for value update
//     // await expect(datePicker).toHaveValue('05/10/2026');
// });



// import { Page } from '@playwright/test';
import { test, Locator, Page } from "@playwright/test";

async function selectDate(targetYear: string,targetMonth: string,targetDate: string,page: Page,isFuture: boolean) {
  while (true) {
    const currentMonth = (await page.locator('.ui-datepicker-month').textContent())?.trim();
    const currentYear = (await page.locator('.ui-datepicker-year').textContent())?.trim();

    if (currentMonth === targetMonth && currentYear === targetYear) {
      break;
    }

    if (isFuture) {
      await page.locator('.ui-datepicker-next').click();
    } else {
      await page.locator('.ui-datepicker-prev').click();
    }
    await page.waitForTimeout(4000);
  }

  const allDates = await page.locator('.ui-datepicker-calendar td').all();

  for (const dt of allDates) {
    const dateText = (await dt.innerText()).trim();

    if (dateText === targetDate) {
      await dt.click();
      break;
    }
  }
}

test('Jquery datepicker',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#datepicker').click();
    await selectDate(
    '2027',     // targetYear
    'July',     // targetMonth
    '15',       // targetDate
    page,
    true        // isFuture (navigate forward)
  );
    // await page.waitForTimeout(4000);



});


