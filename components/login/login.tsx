'use client'; //MODIFICAR A USE SERVER CUANDO SEA ESTABLE
import { AuthGateway } from '@/lib/domain/model/gateways/authGateway';
import { User } from '@/lib/domain/model/user';
import { RegisterUseCase } from '@/lib/domain/useCase/userUseCase';
import FirebaseAuthRepository from '@/lib/infrastructure/driver_adapters/repositories/firebaseAuthRepository';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import logo from '../../public/icons/logo.svg';
import welcomeImg from '../../public/icons/welcome_login.svg';
import Button from '../button/button';
import Form from '../form/form';
import Input from '../input/input';
import styles from './login.module.css';

interface ILoginProps {}

const authGateway: AuthGateway = new FirebaseAuthRepository();
const register = new RegisterUseCase(authGateway);

const Login: React.FC<ILoginProps> = (props) => {
  const [user, setUser] = React.useState<User>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async (e: MouseEvent) => {
    if (user.email.trim() === '' || user.password.trim() === '') {
      console.log(user);
      return;
    }
    let registerSucces = await register.registerUser(user);
    if (registerSucces) {
    }
  };
  return (
    <main className={styles.login_container}>
      <div className={styles.login_logo}>
        <p className={styles.login_title}>
          Task <span>Me !</span>
        </p>
        <Image src={welcomeImg} alt="Logotipo decorativo inicio de sesion" />
      </div>
      <div className={styles.login_form}>
        <Image src={logo} alt="Logotipe" />
        <Form title="Hola, bienvenido de nuevo">
          <Input
            name="email"
            type="text"
            placeholder="Ingrese su correo"
            onChange={handleInputChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Ingrese contraseña"
            onChange={handleInputChange}
          />
          <Button handleClick={registerUser}>Iniciar sesion</Button>
        </Form>
        <p className={styles.login_registerLink}>
          ¿Aún no tienes cuenta?, <Link href={'/'}>registrate aqui</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
