import { test } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import dotenv from 'dotenv';
import E2eProductDao from '../../daoLayer/inputDao/e2eProductDao';
import * as path from 'path';
import { readJSONDataFortestCase } from '../../../utils/fileUtil';
import { ProductDataController } from '../../dataController/productDataController';

dotenv.config();

test.describe('Shopping Website - End-to-End Tests', () => {
  // Test file path
  const __dir = path.join(process.cwd(), '/src/testData/e2eTestData.json');
  // Test data Setup
  const __testData = readJSONDataFortestCase(__dir, 'testData');
  const productData: ProductDataController = __testData['ProductData'];
  const e2eProductDao: E2eProductDao = new E2eProductDao(productData);

  test('@e2e Step 1: Navigate to product and add to cart', async ({ page }) => {
    // Initialize the LoginPage object

    const loginPage = new LoginPage(page);
    // Navigate to the Home Page and Click Product link
    await loginPage.openLoginPage();
    await loginPage.login('kpatil255@gmail.com', 'Password');
    const homePage = await loginPage.navigateToHomePage();
    const productPage = await homePage.clickProductByName(e2eProductDao);
    // Product Page
    await productPage.selectProductDetailsAndAddToCart(e2eProductDao);
  });

  test('@e2e Step 2: View cart after adding product', async ({ page }) => {
    // Initialize the LoginPage object
    const loginPage = new LoginPage(page);

    // Navigate to the Home Page and Click Product link
    const homePage = await loginPage.navigateToHomePage();
    const productPage = await homePage.clickProductByName(e2eProductDao);

    // Product Page
    await productPage.selectProductDetailsAndAddToCart(e2eProductDao);
    await productPage.viewCartClick();
  });
});
