export interface IResponseViewRole {
  message: string;
  data: IViewCategoryRole[];
}

export interface IViewCategoryRole {
  category: string;
  views: IViewRole[] | undefined;
}

export interface IViewRole {
  id: number;
  name: string;
  description: string;
  view_category_id: number;
  status: boolean;
  url: string;
  isChecked: boolean;
}
