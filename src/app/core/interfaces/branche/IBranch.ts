// import { Role } from "./Role";

import { ICity } from "../location/ICity";

export interface IBranch {
  address: string;
  citie_id: number;
  city: ICity;
  id: number;
  name: string;
  postal_code: string;
  status: boolean;
}

export interface IResponseBranch {
  message: string;
  data: IBranch | IBranch[];
}
