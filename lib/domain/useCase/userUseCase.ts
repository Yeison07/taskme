import { AuthGateway } from '../model/gateways/authGateway';
import { User } from '../model/user';

export class RegisterUseCase {
  private authGateway: AuthGateway;

  constructor(authGateway: AuthGateway) {
    this.authGateway = authGateway;
  }

  public async registerUser(user: User): Promise<void> {
    try {
      this.authGateway.register(user);
    } catch (error) {}
  }
}

export class LoginUseCase {
  private authGateway: AuthGateway;

  constructor(authGateway: AuthGateway) {
    this.authGateway = authGateway;
  }

  public async loginUser(user: User): Promise<void> {
    try {
      this.authGateway.login(user);
    } catch (error) {}
  }
}

export class LogoutUseCase {
  private authGateway: AuthGateway;

  constructor(authGateway: AuthGateway) {
    this.authGateway = authGateway;
  }

  public async logOutUser(user: User): Promise<void> {
    try {
      this.authGateway.logout();
    } catch (error) {}
  }
}
