import { test } from '@playwright/test';
import LoginPage from '../../pages/loginPage';

test.describe('Shopping Website - End-to-End Tests', () => {
  test('@e2e Verify end-to-end test for shopping site overall user flow', async ({ page }) => {
    // Initialize the LoginPage object
    const loginPage = new LoginPage(page);

    // Retrieve login test data from environment variables
    const userEmail = process.env.USER_EMAIL ?? '';
    const password = process.env.PASSWORD ?? '';
    const userName = process.env.USER_NAME ?? '';

    // Perform login actions
    await loginPage.openLoginPage();
    await loginPage.login(userEmail, password);
    await loginPage.assertLoginSuccess(userName);

    // Navigate to the Home Page and Click Product link
    const homePage = await loginPage.navigateToHomePage();
    const productPage = await homePage.clickProductByName('Nike react infinity run');

    //Product Page
    await productPage.selectProductDetailsAndAddToCart('L', 'Black', '4');
    await productPage.viewCartClick();

    //Cart Page
  });
});
