// import { Role } from "./Role";

export interface ICity {
    id: number;
    name: string;
}

export interface IResponseCity {
    message: string;
    data: ICity | ICity[];
}