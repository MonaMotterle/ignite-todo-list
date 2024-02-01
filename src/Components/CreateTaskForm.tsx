import style from './CreateTaskForm.module.css'
import {PlusCircle} from "phosphor-react";
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";

export const CreateTaskForm = ({ createItem }: {createItem: (newItem: string) => void}) => {
  const [newTask, setNewTask] = useState('');

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();

    createItem(newTask)

    setNewTask('');
  }

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');

    setNewTask(event.target.value);
  }

  const handleInvalidTask = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
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
        value={newTask}
        onChange={handleTaskChange}
        onInvalid={handleInvalidTask}
        required
      />

      <button className={style.createButton} type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}