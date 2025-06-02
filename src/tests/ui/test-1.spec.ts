import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  // Recording...
  await page.goto('https://www.google.com/');

  await page.locator(`//textarea[@title='Search']`).fill('Amazon');
  await page.locator(`//ul[@jsname="bw4e9b"][1]//li[1]`).click();

  await page.locator(`(//span[text()='Amazon.in'])[1]`).click();
  await page.locator(`//div[@id="icp-nav-flyout"]`).click();
  await page.locator(`//span[text()='TE']`).click();
  // await page.waitForTimeout(3000)
  // await page.locator(`(//a[text()='Start here.'])[2]`).click();

  // const signInHeadertext = 'Sign in or create account';
  // const outputHeadertext = await page.locator(`//h1`).innerText();

  // await expect(outputHeadertext).toContain(signInHeadertext);
  // await console.log('Header text:', outputHeadertext);

  const allLanguageTexts: string[] = await page
    .locator(`//div[@class="a-row a-spacing-mini"]`)
    .allInnerTexts();
  await console.log('All inner texts:', allLanguageTexts);
  await page.locator(`//span[@id='icp-cancel-button']`).click();
  await page.locator(`//div[@class="nav-line-1-container"]`).click();
  await page.locator(`//a[@class="a-size-mini a-link-normal"][1]`).click();

  const newPagePromise = context.waitForEvent('page');
  await page.locator(`//a[@class="a-size-mini a-link-normal"][1]`).click();
  const newPage = await newPagePromise;
  await newPage.waitForLoadState();

  const outputHeadertext = await newPage.locator(`//h1`).innerText();
  const signInHeadertext = 'Conditions of Use';
  await page.keyboard.press('ControlOrMeta+f');

  page.on('dialog', async (alert) => {
    await alert.type();
    await alert.dismiss();
  });

  await expect(outputHeadertext).toContain(signInHeadertext);
});
