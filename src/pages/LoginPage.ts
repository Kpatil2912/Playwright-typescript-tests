import { Locator, Page } from '@playwright/test';
import dotenv from 'dotenv';

export default class LoginPage {
  private page: Page;

  private usernameInput : Locator;
  private passwordInput : Locator;
  private submitButton: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
  }
  async navigateToLoginPage() : Promise<LoginPage> {
    const baseUrl = process.env.BASE_URL; // Replace with your default URL
    await this.page.goto(baseUrl); // Replace with your actual login URL
    return this;
   } // Replace with your actual login URL

  async login(username: string, password: string) : Promise<LoginPage> {
    await this.usernameInput.fill( username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    return this;
  }
  async isLoginSuccessful() : Promise<boolean> {
    return await this.page.locator('text=Welcome').isVisible();
  }

}