import Link from 'next/link';
import * as React from 'react';
import styles from './sidebar.module.css';
interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return (
    <div className={styles.sidebar}>
      <p>Project name</p>
      <Link className={styles.sidebar_item} href={'/'}>
        Tasks board
      </Link>
      <Link className={styles.sidebar_item} href={'/'}>
        Configurar proyecto
      </Link>
    </div>
  );
};

export default SideBar;
