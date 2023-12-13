import { IBranch } from '../branche/IBranch';
import { IProduct } from './IProduct';

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
  isChecked: boolean;
  name: string;
  description: string;
  price: number;
  url_image: string;
  created_at: Date;
  updated_at: Date;
}

export interface ApiResponse<T> {
  message: string;
  data: T[];
}

export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  url_image: string;
  status: number;
  created_at: Date;
  updated_at: Date;
}
