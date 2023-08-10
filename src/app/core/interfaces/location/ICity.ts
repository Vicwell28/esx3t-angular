
export interface ICity {
    id: number;
    name: string;
    state_id: number;
    status: boolean;
}

export interface IResponseCity {
    message: string;
    data: ICity | ICity[];
}