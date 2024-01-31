import './global.css'
import style from './App.module.css'
import {Header} from "./Components/Header.tsx";
import {CreateTaskForm} from "./Components/CreateTaskForm.tsx";
import {TaskList} from "./Components/TaskList.tsx";

function App() {

  return (
    <div>
      <Header />

      <div className={style.container}>
        <CreateTaskForm />

        <TaskList />
      </div>
    </div>
  )
}

export default App
