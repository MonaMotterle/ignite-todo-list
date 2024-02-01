import style from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg';
import {TaskItemProps, TaskItem} from "./TaskItem.tsx";
const listOfTasks: TaskItemProps[] = [
  {
    done: true,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
]

export const TaskList = () => {
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
        {listOfTasks.length
          ? listOfTasks.map(task => (
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