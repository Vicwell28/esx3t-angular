import { IUser } from "../user/IUser";

export interface IResponseOrder {
    message: string;
    data: IOrder | IOrder[];
  }

export interface IOrder {
    id: number;
    date_order: number | null;
    client_id: number;
    employee_id: number;
    status: boolean;
    client: IUser,
    employee: IUser

}