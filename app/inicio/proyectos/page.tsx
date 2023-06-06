import Card from '@/components/card/card';
import { FlexColumContainer } from '@/components/container/container';
import Input from '@/components/input/input';
import Navbar from '@/components/navbar/navbar';
import { Title } from '@/components/text/text';
import Link from 'next/link';
import * as React from 'react';
import styles from './proyectos.module.css';
interface IProyectosProps {}

const Proyectos: React.FunctionComponent<IProyectosProps> = (props) => {
  const card = {
    title: 'El pepe',
    description: 'El pepe remix oficial',
  };
  return (
    <div className={styles.projects_container}>
      <Navbar />
      <main className={styles.projects_content}>
        <FlexColumContainer>
          <Title>Mis proyectos</Title>
          <Input
            placeholder="Ingresa el titulo o descrición del proyecto que buscas"
            type="text"
          />
          <div className={styles.projects}>
            <Link href={'/'}>
              <Card card={card} />
            </Link>
            <Link href={'/'}>
              <Card card={card} />
            </Link>
            <Link href={'/'}>
              <Card card={card} />
            </Link>
            <Link href={'/'}>
              <Card card={card} />
            </Link>
            <Link href={'/'}>
              <Card card={card} />
            </Link>
          </div>
        </FlexColumContainer>
      </main>
    </div>
  );
};

export default Proyectos;
