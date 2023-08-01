import { Role } from '../auth/Role';

export interface IResponseUser {
  message: string;
  data: IUser;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  remember_me_token: string | null;
  fname: string | null;
  lname: string | null;
  date_birth: string | null;
  rfc: string | null;
  address: string | null;
  postal_code: string | null;
  role_id: number;
  city_id: string | null;
  branche_id: string | null;
  status: boolean;
  branch: string | null;
  city: string | null;
  role: Role;
}
