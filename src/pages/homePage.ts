import { Page, test } from '@playwright/test';
import { productPage } from './productPage';
import basePage from './basePage';
import E2eProductDao from '../daoLayer/inputDao/e2eProductDao';

export class homePage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async clickProductByName(e2eProductDao: E2eProductDao): Promise<productPage> {
    await test.step(`Click Product by Name: ${e2eProductDao.getProductName()}`, async () => {
      await this.page
        .locator('a')
        .filter({ hasText: `${e2eProductDao.getProductName()}` })
        .click();
      await this.page.waitForLoadState('networkidle');
    });
    return new productPage(this.page);
  }
}
