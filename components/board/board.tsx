'use client';
import interact from 'interactjs';
import * as React from 'react';
import Box from '../box/box';
import Task from '../task/task';
import styles from './board.module.css';
interface IBoardProps {
  path: string;
}

type assignes = {
  assigne: [];
};
const Board: React.FunctionComponent<IBoardProps> = ({ path }) => {
  /*
  const getAllAssignes = () => {
    return assignes.map((el) => {
      return <Image alt="Imagen de perfil" src={el.picProfile} />;
    });
  };
*/
  const position = { x: 0, y: 0 };
  const initialPosition = { x: 0, y: 0 };

  const dragAndDrop = () => {
    interact('.drag').draggable({
      listeners: {
        start(event) {
          initialPosition.x = event.dx;
          initialPosition.y = event.dy;
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;
          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
          event.target.style.transform += `rotate(5deg)`;
          event.target.style.zIndex = `2`;
          event.target.style.transition = `transform 60ms`;
        },
        end(event) {
          event.target.style.transform = `translate(${initialPosition.x}px, ${initialPosition.y}px)`;
          position.x = 0;
          position.y = 0;
          event.target.style.zIndex = `1`;
          event.target.style.animation = 'appear 300ms';
        },
      },
    });

    interact('.drop')
      .dropzone({
        ondrop: function (event) {
          event.target.insertAdjacentElement('beforeend', event.relatedTarget);
        },
      })
      .on('dropactivate', function (event) {
        event.target.classList.add('drop-activated');
      });
  };

  dragAndDrop();

  return (
    <div className={styles.board_container}>
      <div className={styles.board}>
        <h3>{path}</h3>
        <h2>Lista de tareas</h2>
        <div className={styles.board_navbar}>
          <input
            className={styles.board_inputSearch}
            type="text"
            name="inputSearch"
            id="inputSearch"
          />
          <button>Mis tareas</button>
          <button>Más recientes</button>
        </div>
        <div className={styles.board_tasks}>
          <Box>
            <Task description="Hola" />
          </Box>
          <Box>
            <Task description="Hola" />
          </Box>
          <Box>
            <Task description="Hola" />
          </Box>
          <Box>
            <Task description="Hola" />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Board;
