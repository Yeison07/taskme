import * as React from 'react';
import styles from './button.module.css';
interface IButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
