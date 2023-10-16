const { expect, test } = require('@playwright/test');

test('Practice Test Login', async ({ page }) => {
  // visit the site
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.locator("#username").fill("student");
  await page.locator("#password").fill("Password123");
  await page.locator("#submit").click();

  const successHeader = await page.locator("//h1[@class='post-title']");
  // check if product in cart is same as one added
  expect(successHeader).toBeVisible();
});
