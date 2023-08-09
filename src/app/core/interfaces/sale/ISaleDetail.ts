export interface SaleDetailResponse {
  message: string;
  data: SaleDetail[] | SaleDetail;
}

export interface SaleDetail {
  id: number;
  sale_id: number;
  products: any;
  product_branche_id: number;
  quantity: number;
  status: boolean;
}
