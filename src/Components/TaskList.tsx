import style from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg';
import {TaskItem, type ItemProps} from "./TaskItem.tsx";

interface TaskListProps {
  items: ItemProps[];
}

export const TaskList = ({ items }: TaskListProps) => {
  const sortList = (list: ItemProps[]) => {
    return [...list].sort((a, b) => {
      if (b.isCompleted === a.isCompleted) return 0;

      return a.isCompleted? 1 : -1
    });
  }

  return (
    <div>
      <header className={style.taskListHeader}>
        <p className={style.taskListCreated}>
          Tarefas criadas <span className={style.countTaskSpan}>5</span>
        </p>

        <p className={style.taskListDone}>
          Concluídas <span className={style.countTaskSpan}>2 de 5</span>
        </p>
      </header>
      <main>
        {items.length
          ? sortList(items).map(task => (
            <TaskItem key={task.content} task={task} />
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