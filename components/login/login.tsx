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

const Login: React.FC<ILoginProps> = (props) => {
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
          <Input type="text" placeholder="Ingrese su correo" />
          <Input type="password" placeholder="Ingrese contraseña" />
          <Button>Iniciar sesion</Button>
        </Form>
        <p className={styles.login_registerLink}>
          ¿Aún no tienes cuenta?, <Link href={'/'}>registrate aqui</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
