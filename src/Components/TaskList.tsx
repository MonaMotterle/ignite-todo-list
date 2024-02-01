import React from "react";

import style from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg';

import {TaskItem, type ItemProps} from "./TaskItem.tsx";

interface TaskListProps {
  items: ItemProps[];
  onUpdateItem: (item: ItemProps) => void;
  onDeleteItem: (item: React.Key) => void;
}

export const TaskList = ({ items, onUpdateItem, onDeleteItem }: TaskListProps) => {
  const completedTasks = items.reduce(
    (count, item) => item.isCompleted ? count + 1 : count,
    0
  );

  const sortList = (list: ItemProps[]) => {
    return [...list].sort((a, b) => {
      if (b.isCompleted === a.isCompleted) return 0;

      return a.isCompleted ? 1 : -1
    });
  }

  return (
    <div>
      <header className={style.taskListHeader}>
        <p className={style.taskListCreated}>
          Tarefas criadas <span className={style.countTaskSpan}>{items.length}</span>
        </p>

        <p className={style.taskListDone}>
          Concluídas <span className={style.countTaskSpan}>
          {items.length > 0 ? `${completedTasks} de ` : ''}{items.length}
        </span>
        </p>
      </header>
      <main>
        {items.length
          ? sortList(items).map(task => (
            <TaskItem
              key={task.content}
              task={task}
              onUpdateItem={onUpdateItem}
              onDeleteItem={onDeleteItem}
            />
          )) : (
            <div className={style.emptyTaskList}>
              <img src={clipboard} alt="Clipboard icon" />
              <p><strong>Você ainda não tem tarefas cadastradas</strong> <br/>
                Crie tarefas e organize seus itens a fazer</p>
            </div>
          )
        }
      </main>
    </div>
  )
}