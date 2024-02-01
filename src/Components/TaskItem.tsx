import {Trash} from "phosphor-react";
import style from './TaskItem.module.css';

export interface TaskItemProps {
  isCompleted?: boolean;
  content: string;
}

interface ITaskItem {
  task: TaskItemProps;
}

export const TaskItem = ({ task }: ITaskItem) => {
  return (
    <div className={`${style.taskItemWrap} ${task.isCompleted ? style.taskItemDone : ''}`}>
      <button
        className={style.radioCheckBoxButton}
        title={task.isCompleted ? "Desfazer concluir tarefa" : "Concluir tarefa"}
      >
        <div className={style.radioCheckBox} />
      </button>

      <p>{task.content}</p>

      <button className={style.deleteTask}><Trash size={14} /></button>
    </div>
  )
}