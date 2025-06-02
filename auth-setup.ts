import { test as setup } from '@playwright/test';
import LoginPage from './src/pages/loginPage';

setup('auth', async ({ page, context }) => {
  const userEmail = process.env.USER_EMAIL;
  const password = process.env.PASSWORD;
  const userName = process.env.USER_NAME;
  if (!userEmail || !password || !userName) {
    throw new Error('Missing required environment variables: USER_EMAIL, PASSWORD, or USER_NAME');
  }

  const loginPage = new LoginPage(page);
  await loginPage.openLoginPage();
  await loginPage.login(userEmail, password);
  await loginPage.assertLoginSuccess(userName);

  await context.storageState({ path: 'storageState.json' });
});
