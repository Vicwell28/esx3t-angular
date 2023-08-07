export interface IResponseOrder {
    message: string;
    data: IOrder;
  }

export interface IOrder {
    id: number;
    date_order: number | null;
    client_id: number;
    employee_id: number;
    status: boolean;

}