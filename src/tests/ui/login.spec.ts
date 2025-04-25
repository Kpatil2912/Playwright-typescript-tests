import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.describe('@Login Tests', () => {
  test('should log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    const userEmail = process.env.USER_EMAIL;
    const password = process.env.PASSWORD;
    const userName = process.env.USER_NAME;

    if (!userEmail || !password || !userName) {
      throw new Error('Environment variables USER_EMAIL, PASSWORD, or USER_NAME are not set.');
    }

    await loginPage.openLoginPage();
    await loginPage.login(userEmail, password);
    await loginPage.assertLoginSuccess(userName);
  });
});
