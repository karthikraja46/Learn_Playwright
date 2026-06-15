import { test, expect, Locator } from "@playwright/test";


// text Input/ textBox/ Input Box

test('Text input Actions', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com");

    const textBox: Locator = page.locator("#name");

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxlength:string | null = await textBox.getAttribute("maxlength");

    expect(maxlength).toBe("15");

    textBox.fill("John Canedy");
    console.log("text content of FirstName: ", await textBox.textContent()) //returns empty
    console.log("Input value of the FirstName", await textBox.inputValue()) // returns the input value of text Box


});


//Radio buttons

// import { test, expect, Locator } from "@playwright/test";

test.only('Radio Button Actions', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com");
    const maleRadio: Locator = page.locator('#male');
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    // Verify initially not selected
    expect(await maleRadio.isChecked()).toBe(false);
    // Select radio button
    await maleRadio.check();
    // Verify selected
    expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio)
    await page.waitForTimeout(1000);
});

test.only('Checkbox Actions', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com");

  // 1. Select Sunday and assert
  const sundayCheckbox = page.getByLabel('Sunday');
  await sundayCheckbox.check();
  await expect(sundayCheckbox).toBeChecked();

  // 2. Select all checkboxes and assert
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const checkboxes = days.map(day => page.getByLabel(day));

  expect(checkboxes).toHaveLength(7);

  for (const checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  // 3. Uncheck last 3 checkboxes and assert
  const lastThree = checkboxes.slice(-3);

  for (const checkbox of lastThree) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }

  // 4. Toggle checkboxes : If checked, uncheck; if unchecked, check. Assert state flipped
  for (const checkbox of checkboxes){
    if(await checkbox.isChecked()){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    else{
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
  }

  // 5. Randomly select check boxes = select checkboxes by index(1,3,6) and assert
  const indexes = [1,3,6];

  for(const i of indexes){
    checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();

  }


  // 7. Select the check box on the label
  const weekname: string = "Friday";
  for(const label of days){
    if(label.toLowerCase() == weekname.toLocaleLowerCase()){
        const checkbox_weekname = page.getByLabel(label);
        checkbox_weekname.check();
        await expect(checkbox_weekname).toBeChecked();

    }
  }


  await page.waitForTimeout(4000);

});
