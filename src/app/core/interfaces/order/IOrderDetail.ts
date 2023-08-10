export interface IResponseOrderDetail {
    message: string;
    data: IOrderDetail;
}


export interface IOrderDetail {
  id: number;
  name:string;
  order_id: number;
  product_branche_id: number;
  quantity:number;
  status: boolean;
}
