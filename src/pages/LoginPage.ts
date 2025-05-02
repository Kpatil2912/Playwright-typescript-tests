import { expect, Locator, Page } from '@playwright/test';
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
    await this.navigateToUrl('/account/login');
    return this;
  }

  async navigateToHomePage(): Promise<homePage> {
    await this.navigateToUrl('/');
    return new homePage(this.page);
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async assertTextIsVisible(expectedText: string): Promise<void> {
    const textElement = this.page.getByText(expectedText, { exact: true });
    await expect(textElement).toBeVisible();
  }

  async assertLoginSuccess(expectedUserName: string): Promise<void> {
    await this.navigateToUrl('/account');
    await expect(this.page).toHaveURL(/.*account/);
    await this.assertTextIsVisible(expectedUserName);
  }
}
