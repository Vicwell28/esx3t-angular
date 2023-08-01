import { IView } from './IView';

export interface IResponseIViewCategory {
  message: string;
  data: IViewCategory | IViewCategory[];
}

export interface IViewCategory {
  id: number;
  name: string;
  description: string;
  status: boolean;
  view: IView[] | null;
}
