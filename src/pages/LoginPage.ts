import { expect, Locator, Page } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default class LoginPage {
  private readonly page: Page;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'SIGN IN' });
  }

  async openLoginPage(): Promise<LoginPage> {
    await this.navigateTo('/account/login', 'networkidle');
    return this;
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
    await this.navigateTo('/account', 'networkidle');
    await expect(this.page).toHaveURL(/.*account/);
    await this.assertTextIsVisible(expectedUserName);
  }

  private async navigateTo(
    urlPath: string,
    loadState: 'networkidle' | 'load' | 'domcontentloaded' = 'load'
  ): Promise<void> {
    await this.page.waitForLoadState(loadState);
    await this.page.goto(urlPath);
  }
}
