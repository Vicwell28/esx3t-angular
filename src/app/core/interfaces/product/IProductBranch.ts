
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
  
}
