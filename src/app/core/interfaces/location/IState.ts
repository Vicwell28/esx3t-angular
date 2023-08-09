
export interface IState {
    id: number;
    name: string;
    status: boolean;
}

export interface IResponseState {
    message: string;
    data: IState | IState[];
}