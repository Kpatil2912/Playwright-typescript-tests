import { Page } from "playwright";
import basePage from "./basePage";
export  class cartPage extends basePage{
    
    constructor(page : Page){
        super(page);
    }
}