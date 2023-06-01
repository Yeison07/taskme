import Image from 'next/image';
import * as React from 'react';
import logo from '../../public/icons/logo.svg';
import welcomeImg from '../../public/icons/welcome_login.svg';
import Button from '../button/button';
import Form from '../form/form';
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
          <input
            type="text"
            name="input_email"
            id=""
            placeholder="Ingrese su correo"
          />
          <input
            type="password"
            name="input_password"
            id=""
            placeholder="Ingrese su contraseña"
          />
          <Button>Iniciar sesion</Button>
        </Form>
      </div>
    </main>
  );
};

export default Login;
