import { Role } from "./Role";

export interface User {
  role_id: number;
  username: string;
  email: string;
  id: number;
  role: Role;
}
