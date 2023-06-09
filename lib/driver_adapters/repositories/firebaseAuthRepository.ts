import { AuthGateway } from '@/lib/domain/model/gateways/authGateway';
import { User } from '@/lib/domain/model/user';

export default class FirebaseAuthRepository implements AuthGateway {
  register(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  login(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  logout(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  recoverPassword(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
