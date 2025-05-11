import { expect, Locator, Page, test } from '@playwright/test';
import { homePage } from './homePage';
import basePage from './basePage';

export default class loginPage extends basePage {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'SIGN IN' });
  }

  async openLoginPage(): Promise<loginPage> {
    await test.step('Open Login Page', async () => {
      await this.navigateToUrl('/account/login');
    });
    return this;
  }

  async navigateToHomePage(): Promise<homePage> {
    await test.step('Navigate to Home Page', async () => {
      await this.navigateToUrl('/');
    });
    return new homePage(this.page);
  }

  async login(email: string, password: string): Promise<void> {
    await test.step('Fill Email', async () => {
      await this.emailInput.fill(email);
    });
    await test.step('Fill Password', async () => {
      await this.passwordInput.fill(password);
    });
    await test.step('Click Sign In', async () => {
      await this.signInButton.click();
    });
  }

  async assertTextIsVisible(expectedText: string): Promise<void> {
    await test.step(`Assert text "${expectedText}" is visible`, async () => {
      const textElement = this.page.getByText(expectedText, { exact: true });
      await expect(textElement).toBeVisible();
    });
  }

  async assertLoginSuccess(expectedUserName: string): Promise<void> {
    await test.step('Navigate to Account Page', async () => {
      await this.navigateToUrl('/account');
    });
    await test.step('Assert URL contains /account', async () => {
      await expect(this.page).toHaveURL(/.*account/);
    });
    await this.assertTextIsVisible(expectedUserName);
  }
}
