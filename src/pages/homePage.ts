import { time } from "console";
import { Locator, Page } from "playwright";
import productPage from "./productPage";
import { promises } from "dns";
import basePage from "./basePage";

export  class homePage extends basePage{
    constructor(page : Page){
        super(page);
    }

    async clickProductByName(productName : string ) : Promise<productPage>{
        await this.page.locator('a').filter({ hasText: `${productName}` }).click();
        await this.page.waitForLoadState('networkidle');
        return new productPage(this.page)
    }

}

