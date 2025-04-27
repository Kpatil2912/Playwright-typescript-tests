import { Page } from "playwright";

export default class basePage{
    protected readonly page: Page;
    private readonly baseWaitForloadState : "networkidle" | "load" | "domcontentloaded";
    private readonly baseWaitForstate : "visible" | "attached" | "detached" | "hidden" | undefined;



    constructor(page: Page) {
        this.page = page;

        this.baseWaitForloadState = "networkidle";
        this.baseWaitForstate = 'visible' ;


    }

    async navigateToUrl(url: string): Promise<void> {
        await this.page.waitForLoadState('networkidle');
        await this.page.goto(url);
    }

    async  waitForLoadAndClick(locator) {
        await this.page.waitForLoadState(this.baseWaitForloadState);
        await locator.click();
    }
    async  waitForLocatorState(locator) {
        await locator.waitFor({ state: this.baseWaitForstate });
    }

}