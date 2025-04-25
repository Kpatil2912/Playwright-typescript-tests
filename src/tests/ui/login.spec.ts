import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await (await loginPage.navigateToLoginPage()).login(process.env.USER_EMAIL as string  , process.env.PASSWORD as string );
  await loginPage.verifyLoginSuccess(process.env.USER_NAME as string );
});
