import { ProductDataController } from '../../dataController/productDataController';

export default class E2eProductDao {
  private name: string;
  private size: string;
  private color: string;
  private qty: string;

  constructor(productDataController: ProductDataController) {
    this.name = productDataController.productName;
    this.size = productDataController.productSize;
    this.color = productDataController.productColor;
    this.qty = productDataController.productQuantity;
  }

  public getProductName() {
    return this.name;
  }
  public getProductSize() {
    return this.size;
  }

  public getProductColor() {
    return this.color;
  }

  public getProductQuantity() {
    return this.qty;
  }
}
