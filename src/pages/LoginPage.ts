import { Page } from '@playwright/test';

export default class LoginPage {
  private page: Page;
  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private submitButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }
}
