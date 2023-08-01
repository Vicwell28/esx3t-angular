export interface IResponseViewRole {
  message: string;
  data: IViewRole | IViewRole[];
}

export interface IViewRole {
  id: number;
  view_id: number;
  role_id: number;
  status: boolean;
  created_at: null;
  updated_at: null;
}
