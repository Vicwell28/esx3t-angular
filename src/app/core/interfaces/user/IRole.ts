export interface IResponseRole {
    message: string;
    data: IRole | IRole[];
  }
  
export interface IRole {
  id: number;
  name: string;
  description: string;
  status: boolean;
}
