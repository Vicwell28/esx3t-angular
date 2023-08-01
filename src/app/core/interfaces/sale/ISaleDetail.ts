export interface Welcome {
  message: string;
  data: Data;
}

export interface Data {
  id: number;
  sale_id: number;
  product_branche_id: number;
  quantity: number;
  status: boolean;
}
