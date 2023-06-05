import Navbar from '@/components/navbar/navbar';
import * as React from 'react';
import styles from './proyectos.module.css';
interface IProyectosProps {}

const Proyectos: React.FunctionComponent<IProyectosProps> = (props) => {
  return (
    <div className={styles.proyectos_container}>
      <Navbar />
    </div>
  );
};

export default Proyectos;
