import { test } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import dotenv from 'dotenv';
import E2eProductDao from '../../daoLayer/inputDao/e2eProductDao';
import { readJSONDataFortestCase } from '../../../../utils/fileUtil';
import * as path from 'path';
import { ProductDataController } from '../../dataController/productDataController';

dotenv.config();

test.describe('Shopping Website - End-to-End Tests', () => {
  test('@e2e Verify end-to-end test for shopping site overall user flow', async ({ page }) => {
    // Initialize the LoginPage object
    const loginPage = new LoginPage(page);

    //Test file path
    const __dir = path.join(process.cwd(), '/src/testData/e2eTestData.json');

    //Test data Setup
    const __testData = readJSONDataFortestCase(__dir, 'testData');
    const productData: ProductDataController = __testData['ProductData'];
    const e2eProductDao: E2eProductDao = new E2eProductDao(productData);

    // Retrieve login test data from environment variables
    const userEmail = process.env.USER_EMAIL as string;
    const password = process.env.PASSWORD as string;
    const userName = process.env.USER_NAME as string;

    // Perform login actions
    await loginPage.openLoginPage();
    await loginPage.login(userEmail, password);
    await loginPage.assertLoginSuccess(userName);

    // Navigate to the Home Page and Click Product link
    const homePage = await loginPage.navigateToHomePage();
    const productPage = await homePage.clickProductByName(e2eProductDao);

    //Product Page
    await productPage.selectProductDetailsAndAddToCart(e2eProductDao);
    await productPage.viewCartClick();
  });
});
