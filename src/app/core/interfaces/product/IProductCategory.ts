export interface IResponseProductCategory {
    message: string;
    data: IProductCategory | IProductCategory[];
}

export interface IProductCategory {
  id: number;
  name: string;
  description: string;
  status: boolean;
}