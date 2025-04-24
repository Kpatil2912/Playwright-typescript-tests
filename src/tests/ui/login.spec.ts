import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login('validUser', 'validPass');
  await loginPage.isLoginSuccessful();
  
});
