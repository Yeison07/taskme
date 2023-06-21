import { app } from '@/lib/config/fireBaseConfig';
import { AuthGateway } from '@/lib/domain/model/gateways/authGateway';
import { User } from '@/lib/domain/model/user';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export default class FirebaseAuthRepository implements AuthGateway {
  private _auth;

  constructor() {
    this._auth = getAuth(app);
  }
  async register(user: User): Promise<boolean> {
    try {
      await createUserWithEmailAndPassword(
        this._auth,
        user.email,
        user.password
      );
      return true;
    } catch (error) {
      return false;
    }
  }
  async login(user: User): Promise<{ error?: any }> {
    try {
      await signInWithEmailAndPassword(this._auth, user.email, user.password);
      return {};
    } catch (error) {
      return {
        error,
      };
    }
  }
  logout(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  recoverPassword(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public get auth(): Auth {
    return this._auth;
  }
}
