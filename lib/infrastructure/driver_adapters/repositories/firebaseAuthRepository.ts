import { app } from '@/lib/config/fireBaseConfig';
import { AuthGateway } from '@/lib/domain/model/gateways/authGateway';
import { User } from '@/lib/domain/model/user';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export default class FirebaseAuthRepository implements AuthGateway {
  private auth;

  constructor() {
    this.auth = getAuth(app);
  }
  async register(user: User): Promise<boolean> {
    try {
      await createUserWithEmailAndPassword(
        this.auth,
        user.email,
        user.password
      );
      return true;
    } catch (error) {
      return false;
    }
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
