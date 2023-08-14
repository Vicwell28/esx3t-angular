
export interface IResponseProduct {
    message: string;
    data: IProduct | IProduct[];

   
  }

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  product_category_id: number;
  product_categories: number;
  status: boolean;
  url_img: string;
  
}

