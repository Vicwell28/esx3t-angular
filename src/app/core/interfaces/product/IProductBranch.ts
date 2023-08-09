import { IBranch } from "../branche/IBranch";
import { IProduct } from "./IProduct";

export interface IResponseProductBranch {
    message: string;
    data: IProductBranch | IProductBranch[];
  }

export interface IProductBranch {
  id: number;
  stock: number;
  product_id: number;
  branche_id: number;
  status: boolean;
  product: IProduct;
  branch: IBranch;
  isChecked: boolean ;
  
}
