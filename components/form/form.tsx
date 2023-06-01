import * as React from 'react';
import styles from './form.module.css';

interface IFormProps {
  title: string;
  children: React.ReactNode;
}

const Form: React.FC<IFormProps> = ({ title, children }) => {
  return (
    <div className={styles.form_container}>
      <h1 className={styles.form_title}>{title}</h1>
      <div className={styles.form_input}>{children}</div>
    </div>
  );
};

export default Form;
