// import { Role } from "./Role";

import { IUser } from "../user/IUser";

export interface ISale {
    id: number,
    name: string,
    client_id: number,
    employee_id: number,
    created_at: string,
    client: IUser,
    employee: IUser
}
