// @ts-check
const { test, expect } = require('@playwright/test');

test('alt text 1.1.1a', async ({ page }) => {

  await page.goto('https://sussexcountyde.gov/');
  
  // Get all img tags on the page
  const imgTags = await page.$$('img');

  for (const imgTag of imgTags) {
    const altText = await imgTag.getAttribute('alt');
    if (!altText) {
      console.log('Image without Alt text found! ' + imgTag );
    }

    await expect(altText).not.toBe('')    
  }
});