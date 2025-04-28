import { Locator, Page } from "playwright";
import { cartPage } from "./cartPage";
import basePage from "./basePage";
export class productPage extends basePage {

    private readonly btnAddToCart : Locator ;
    private readonly parentLi :string ;
    protected  waitForloadState : "networkidle" | "load" | "domcontentloaded";
    protected  waitForstate : "visible" | "attached" | "detached" | "hidden" | undefined;
    private readonly fillQuantity : Locator ;
    private readonly viewCart : Locator ;

    constructor(page : Page) {
        super(page);
        this.btnAddToCart = page.getByRole('button', { name: 'ADD TO CART' });
        this.parentLi =  "//parent::li[@class='selected']";
        this.waitForloadState = "networkidle";
        this.waitForstate = 'visible' ;
        this.fillQuantity = page.getByRole('textbox', { name: 'Qty' });
        this.viewCart = page.getByRole('link', { name: 'VIEW CART' })
    }

    async selectProductSize (size : string): Promise<productPage>{
        const sizeLocator = this.page.getByRole('link', { name: size, exact: true });
        await this.waitForLoadAndClick(sizeLocator);
        let parentLiLocator = sizeLocator.locator(this.parentLi);
        await this.waitForLocatorState(parentLiLocator);
        return this ;
        async function waitForLocatorState() {
            await sizeLocator.locator(this.parentLi).waitFor({ state: this.waitForstate });
        }
    }
    async selectProductColor (color : string): Promise<productPage>{
        const colorLocator = this.page.getByRole('link', { name: color});
        await this.page.waitForLoadState(this.waitForloadState);
        await colorLocator.click();
        await colorLocator.locator(this.parentLi).waitFor({state : this.waitForstate});
        return this ;
    }
    
    async clickAddToCArtBtn () : Promise<productPage>{
        await this.btnAddToCart.click();
        return this ;
    }
    
    async selectProductDetailsAndAddToCart (size : string , color : string , qty :string ):Promise<productPage> {
        await this.selectProductSize(size);
        await this.selectProductColor(color);
        await this.fillQuantity.fill(qty);
        await this.clickAddToCArtBtn();
        return this ;
    }

    async viewCartClick() : Promise<cartPage>{
        await this.viewCart.click();
        await this.page.waitForLoadState(this.waitForloadState);
        return new cartPage(this.page);
    }

}