import { Page } from "playwright";

export default class basePage{
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToUrl(url: string): Promise<void> {
        await this.page.waitForLoadState('networkidle');
        await this.page.goto(url);
    }

}