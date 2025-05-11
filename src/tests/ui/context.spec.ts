import { test, chromium, firefox } from '@playwright/test';

test('Multi Browser test', async () => {
  const chromeBrowser = await chromium.launch();
  const firefoxBrowser = await firefox.launch();

  const chromeContext = await chromeBrowser.newContext();
  const firefoxContext = await firefoxBrowser.newContext();

  const chromePage = await chromeContext.newPage();
  const firefoxPage = await firefoxContext.newPage();

  await chromePage.goto('https://www.google.com/');
  await firefoxPage.goto('https://www.youtube.com/');

  await chromeBrowser.close();
  await firefoxBrowser.close();
});
