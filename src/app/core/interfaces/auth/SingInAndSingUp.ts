import { Token } from "./Token";
import { User } from "./User";

export interface SignInSignUp {
  message: string;
  user: User;
  token: Token;
}
