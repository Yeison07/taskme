import * as React from 'react';
import styles from './task.module.css';
interface ITaskProps {
  description: string;
}

const Task: React.FunctionComponent<ITaskProps> = ({ description }) => {
  return (
    <div className={`${styles.card_task} drag`}>
      <p>{description}</p>
      {}
    </div>
  );
};

export default Task;
