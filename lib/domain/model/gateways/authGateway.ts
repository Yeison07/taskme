import { User } from '../user';

export interface AuthGateway {
  register(user: User): Promise<boolean>;
  login(user: User): Promise<void>;
  logout(): Promise<void>;
  recoverPassword(user: User): Promise<void>;
}
