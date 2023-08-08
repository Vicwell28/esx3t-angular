// import { Role } from "./Role";

export interface IBranch {
    address: string;
    citie_id: number;
    city: string;
    id: number;
    name: string;
    postal_code: string;
    status: boolean;
}

export interface IResponseBranch {
    message: string;
    data: IBranch | IBranch[];
}