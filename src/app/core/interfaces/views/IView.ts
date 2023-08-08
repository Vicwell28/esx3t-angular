import { IViewCategory } from './IViewCategory';

export interface IResponseView {
  message: string;
  data: IView | IView[];
}

export interface IView {
  id: number;
  name: string;
  description: string;
  view_category_id: number;
  url: string;
  status: boolean;
  isCheked: boolean | null;
  viewCategory: IViewCategory | null;
}

export interface IStoreView {
  name: string;
  view_category_id: number;
}
