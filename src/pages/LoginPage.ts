import { expect, Locator, Page } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
export default class LoginPage {
  private page: Page;

  private usernameInput : Locator;
  private passwordInput : Locator;
  private submitButton: Locator; 
  private accountIcon: Locator;
  private loggedInUserName : Locator ;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Email' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.submitButton = page.getByRole('button', { name: 'SIGN IN' })
    this.accountIcon = page.locator('//a[@href="https://demo.evershop.io/account"]');
    this.loggedInUserName = page.getByText('Akhil', { exact: true });
  }
  async navigateToLoginPage() : Promise<LoginPage> {
    // /const baseUrl = process.env.BASE_URL; // Replace with your default URL
    //await this.page.goto(''); // Replace with your actual login URL
    await this.navigateToPage('networkidle', '/account/login'); // Replace with your actual login URL
    return this;
   } // Replace with your actual login URL

  async login(username: string, password: string) : Promise<LoginPage> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    return this;
  }
async verifyTextIsVisible(expectedText: string): Promise<LoginPage> {
  const textElement = this.page.getByText(expectedText, { exact: true });
  await expect(textElement).toBeVisible();
  return this;
}

async verifyLoginSuccess(expectedUserName: string): Promise<LoginPage> {
  //  await this.accountIcon.waitFor({ state: 'visible' });
  // await this.accountIcon.click();
  // const baseUrl = process.env.HOME_URL as string; // Replace with your default base URL
  //await this.page.waitForLoadState('load');

  await this.navigateToPage('networkidle', '/account');
  
  await expect(this.page).toHaveURL(/.*account/);
  await this.verifyTextIsVisible(expectedUserName);
  return this;
}

async  navigateToPage( loadState : "networkidle" | "load" | "domcontentloaded" | undefined , pathParam : string)  : Promise<LoginPage>{
  await this.page.waitForLoadState(loadState);
  await this.page.goto(pathParam);
  return this;
}


}