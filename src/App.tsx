import './global.css'
import style from './App.module.css'
import { v4 as uuidv4 } from 'uuid';

import {Header} from "./Components/Header.tsx";
import {CreateTaskForm} from "./Components/CreateTaskForm.tsx";
import {TaskList} from "./Components/TaskList.tsx";
import {useState} from "react";
import type { ItemProps } from "./Components/TaskItem.tsx";

function App() {
  const [itemsList, setItemsList] = useState<ItemProps[]>([])

  const createItem = (newItem: string) => {
    const newTask = {
      id: uuidv4(),
      isCompleted: false,
      content: newItem,
    }
    setItemsList([...itemsList, newTask])
  }

  return (
    <div>
      <Header />

      <div className={style.container}>
        <CreateTaskForm  createItem={createItem}/>

        <TaskList items={itemsList} />
      </div>
    </div>
  )
}

export default App
