import React from "react";
import style from './TaskItem.module.css';

import {Trash} from "phosphor-react";

export interface ItemProps {
  id: React.Key;
  isCompleted?: boolean;
  content: string;
}

interface ITaskItem {
  task: ItemProps;
}

export const TaskItem = ({ task }: ITaskItem) => {
  return (
    <div className={`${style.itemWrap} ${task.isCompleted ? style.isCompleted : ''}`}>
      <button
        className={style.radioButton}
        title={task.isCompleted ? "Desfazer concluir tarefa" : "Concluir tarefa"}
      >
        <div className={style.radioCheckBox} />
      </button>

      <div className={style.itemDescription}><p>{task.content}</p></div>

      <button className={style.deleteTask}><Trash size={14} /></button>
    </div>
  )
}