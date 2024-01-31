import style from './CreateTaskForm.module.css'
import {PlusCircle} from "phosphor-react";
import {FormEvent} from "react";
export const CreateTaskForm = () => {

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <form
      className={style.createTaskForm}
      onSubmit={handleCreateTask}
    >
      <input
        className={style.taskDescription}
        placeholder="Adicione uma nova tarefa"
        name="description"
        type="text"
      />

      <button className={style.createButton} type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}